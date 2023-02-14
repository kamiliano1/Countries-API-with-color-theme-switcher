import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate, Link, redirect  } from "react-router-dom"
import { CountryContext } from "../Context"
export default function SingleCountry() {
    const { allCountryData,allCountry } = useContext(CountryContext)
    const { countryName } = useParams()
    const currentCountry = allCountry.length ? allCountry.find(country=>country.name===countryName) : ""
    console.log(currentCountry.language)
    const [countryBorder, setCountryBorder] = useState([])
    const navigate = useNavigate()

    function Spinner(props) {
        return (
          <svg className="w-20 h-20 mt-6 md:w-44 md:h-44 mx-auto md:mt-16" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".14"></rect><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".29" transform="rotate(30 12 12)"></rect><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".43" transform="rotate(60 12 12)"></rect><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".57" transform="rotate(90 12 12)"></rect><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".71" transform="rotate(120 12 12)"></rect><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".86" transform="rotate(150 12 12)"></rect><rect width="2" height="5" x="11" y="1" fill="currentColor" transform="rotate(180 12 12)"></rect><animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"></animateTransform></g></svg>
        )
      }
    function BorderCountryButton(props) {
        return (
            <Link to={`/${props.name}`}>
                <button className="-order-2 bg-darkBlue my-1 flex self-start px-5 py-1" >{props.name}</button>
            </Link>
        )
    }
    
    useEffect(()=>{
        if (currentCountry.borders !=="None" && allCountry.length) {
            fetch(`https://restcountries.com/v2/alpha?codes=${currentCountry.borders}`)
            .then(res=>res.json())
            .then(data=>setCountryBorder(data.map(country=>country.name)))
        }

    },[currentCountry])
    function IcBaselineArrowBack(props) {
        return (
          <svg className="self-center mr-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"></path></svg>
        )
      }
    
      const borderButtons = countryBorder.map(country=>{
        // console.log(country)
        return <BorderCountryButton 
                name={country}
            />
      })

    // console.log(currentCountry)
    return (
       <div>
        {
allCountry.length ?
        <div className="text-white text-xs flex flex-col md:grid md:grid-cols-4 
        md:grid-rows-6 w-[85%]  mx-auto space-y-1 md:grid-rows-big-screen md:grid-cols-big-screen gap-y-10">

            <button className="-order-2 bg-darkBlue my-6 flex self-start px-5 py-1 md:col-start-1 md:row-start-1 md:justify-self-start " 
            onClick={()=>navigate("/")}><IcBaselineArrowBack /> Back</button>
            <h1 className="text-2xl pb-3 font-700 md:col-start-3 md:row-start-3 col-span-2">{currentCountry.name}</h1>
            <div className="md:row-start-4 md:col-start-3">
                <p><span className="font-600">Native Name:</span> {currentCountry.nativeName}</p>
                <p><span className="font-600">Population:</span> {currentCountry.population}</p>
                <p><span className="font-600">Region:</span> {currentCountry.region}</p>
                <p><span className="font-600">Sub Region:</span> {currentCountry.subregion}</p>
                <p><span className="font-600">Capital:</span> {currentCountry.capital}</p>
            </div>
            <div className="space-y-1 py-7 md:row-start-4 md:col-start-4  md:p-0 ">
                <p><span className="font-600">Top Level Domain:</span> {currentCountry.topLevelDomain}</p>
                <p><span className="font-600">Currencies:</span> {currentCountry.currencies}</p>
                <p><span className="font-600">Languages:</span> {currentCountry.language}</p>
            </div>
            {
            currentCountry.borders !=="None" && 
            <div className="md:row-start-5 md:col-start-3 md:col-span-2 md:flex md:items-center">
                <p className="mb-3 md:self-center md:mb-0 md:whitespace-nowrap"><span className="">Border Countries:</span></p>
                <div className="flex gap-2 flex-wrap mb-10 justify-start md:mb-0 md:ml-5 ">
                    {borderButtons}
                </div>
            </div> }
            <img className="-order-1 py-6 h-[100%] w-[100%] md:col-start-1 md:row-start-2 md:row-span-5" src={currentCountry.flag} alt={`${currentCountry.name} flag`} />
        </div>
        :
        <Spinner />}
        {/* <Spinner /> */}
       </div>
    )
}
