import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate, Link, redirect  } from "react-router-dom"
import { CountryContext } from "../Context"
export default function SingleCountry() {
    const {allCountryData, countryData} = useContext(CountryContext)
    const { countryName } = useParams()
    const currentCountry = allCountryData.find(country=>country.name===countryName)
    const [countryBorder, setCountryBorder] = useState([])
    const navigate = useNavigate()

    function BorderCountryButton(props) {
        return (
            <Link to={`/${props.name}`}>
                <button className="-order-2 bg-darkBlue my-3 flex self-start px-5 py-1" >{props.name}</button>
            </Link>
        )
    }
    // console.log(`https://restcountries.com/v2/alpha?codes=${currentCountry.borders}`)
    useEffect(()=>{
        if (currentCountry.borders !=="None") {
            fetch(`https://restcountries.com/v2/alpha?codes=${currentCountry.borders}`)
            .then(res=>res.json())
            .then(data=>setCountryBorder(data.map(country=>country.name)))
        }

    },[])
    function IcBaselineArrowBack(props) {
        return (
          <svg className="self-center mr-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"></path></svg>
        )
      }
    
      const borderButtons = countryBorder.map(country=>{
        console.log(country)
        return <BorderCountryButton 
                name={country}
            />
      })

    // console.log(currentCountry)
    return (
        <div className="text-white text-xs flex flex-col w-[85%] mx-auto space-y-1">
            {/* <button className="-order-2 bg-darkBlue my-3 flex self-start px-5 py-1" onClick={()=>navigate(-1)}><IcBaselineArrowBack /> Back</button> */}
            <button className="-order-2 bg-darkBlue my-3 flex self-start px-5 py-1" onClick={()=>navigate("/")}><IcBaselineArrowBack /> Back</button>
            <h1 className="text-2xl mb-5">{currentCountry.name}</h1>
            <p><span>Native Name:</span> {currentCountry.nativeName}</p>
            <p><span>Population:</span> {currentCountry.population}</p>
            <p><span>Region:</span> {currentCountry.region}</p>
            <p><span>Sub Region:</span> {currentCountry.subregion}</p>
            <p><span>Capital:</span> {currentCountry.capital}</p>
            <div className="space-y-1 py-7">
                <p><span>Top Level Domain:</span> {currentCountry.topLevelDomain}</p>
                <p><span>Currencies:</span> {currentCountry.currencies}</p>
                <p><span>Languages</span>: {currentCountry.language}</p>
            </div>
            {currentCountry.borders !=="None" && 
            <div>
                <p><span>Border Countries</span>:</p>
                {borderButtons}
            </div> }
            <img className="-order-1 py-7" src={currentCountry.flag} alt={`${currentCountry.name} flag`} />
        </div>
    )
}
