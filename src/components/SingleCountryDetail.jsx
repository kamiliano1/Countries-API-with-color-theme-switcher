import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { CountryContext } from "../Context"
import BorderCountryButton from "./BorderCountryButton"
import SpinnerIcon from "../Icons/SpinnerIcon"
import ArrowIcon from "../Icons/ArrowIcon"
export default function SingleCountryDetail() {

    const { allCountry } = useContext(CountryContext)
    const { countryName } = useParams()
    const currentCountry = allCountry.length ? allCountry.find(country=>country.name===countryName) : ""
    const [countryBorder, setCountryBorder] = useState([])
    const navigate = useNavigate()
 
    useEffect(()=>{
        if (currentCountry.borders !=="None" && allCountry.length) {
            fetch(`https://restcountries.com/v2/alpha?codes=${currentCountry.borders}`)
            .then(res=>res.json())
            .then(data=>setCountryBorder(data.map(country=>country.name)))
        }

    },[currentCountry])
    
      const borderButtons = countryBorder.map(country=>{
        return <BorderCountryButton 
                name={country}
            />
      })

    return (
       <div>
        {
allCountry.length ?
        <div className=" dark:text-veryLightGray text-black text-xs flex flex-col md:grid md:grid-cols-4w-[85%] w-[90%] mx-auto md:grid-cols-big-screen md:gap-y-4 gap-x-[2vw] max-[570px]:w-[90%] mt-5">
            <button className=" mt-buttonClamp box-shadow -order-2 dark:bg-darkBlue bg-white flex self-start px-5 md:px-7 py-2 md:col-start-1 md:row-start-1 md:justify-self-start " 
            onClick={()=>navigate("/")}><ArrowIcon /> Back</button>
            <h1 className="text-2xl md:text-3xl pb-3 font-800 md:col-start-3  md:row-start-3 col-span-2">{currentCountry.name}</h1>
            <div className="md:row-start-4 md:col-start-3 space-y-[.9rem]">
                <p className="md:text-lg"><span className="font-600 ">Native Name:</span> {currentCountry.nativeName}</p>
                <p className="md:text-lg"><span className="font-600">Population:</span> {currentCountry.population}</p>
                <p className="md:text-lg"><span className="font-600">Region:</span> {currentCountry.region}</p>
                <p className="md:text-lg"><span className="font-600">Sub Region:</span> {currentCountry.subregion}</p>
                <p className="md:text-lg"><span className="font-600">Capital:</span> {currentCountry.capital}</p>
            </div>
            <div className="space-y-2 py-9 md:row-start-4 md:col-start-4  md:p-0 ">
                <p className="md:text-lg"><span className="font-600">Top Level Domain:</span> {currentCountry.topLevelDomain}</p>
                <p className="md:text-lg"><span className="font-600">Currencies:</span> {currentCountry.currencies}</p>
                <p className="md:text-lg"><span className="font-600">Languages:</span> {currentCountry.language}</p>
            </div>
            <div className="md:row-start-5 md:col-start-3 md:col-span-2 md:flex md:items-center">
            {
            currentCountry.borders !=="None" ?
                <div className="flex gap-2 flex-wrap mb-10 justify-start md:mb-0 md:mt-10 ">
                <p className="md:text-lg self-center md:mb-0 md:whitespace-nowrap w-[100%] md:w-auto"><span>Border Countries:</span></p>
                    {borderButtons}
                </div>
            :
            <p className="md:text-lg  md:mb-0 md:whitespace-nowrap w-[100%] md:w-auto"><span>Border Countries: None</span></p>
            }
            </div>
            <div className="-order-1 py-6 my-7 md:col-start-1 md:row-start-2 md:row-span-5 max-h-[350px] self-start">
                <img className="w-[100%] h-[100%] " src={currentCountry.flag} alt={`${currentCountry.name} flag`} />
            </div>
        </div>
        :
        <SpinnerIcon />}
       </div>
    )
}
