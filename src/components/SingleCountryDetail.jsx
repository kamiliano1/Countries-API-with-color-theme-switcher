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
                key={country}
                name={country}
            />
      })

    return (
      <div>
        {allCountry.length ? (
          <div className="dark:text-veryLightGray text-black 
          flex flex-col space-y-10 py-6 w-[85%] md:w-[90%] mx-auto md:grid gap-x-14 
          min-[1000px]:grid-cols-auto-fit-big
          min-[1000px]:grid-rows-auto-fit-big 
          max-[1000px]:grid-cols-2
          max-[1000px]:grid-rows-min-content">
            <button
              className="box-shadow flex self-start px-5 mb-5 md:px-7 py-2 mt-buttonClamp -order-3 md:justify-self-start"
              onClick={() => navigate("/")}
            >
              <ArrowIcon /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-800 min-[1000px]:row-start-2 min-[1000px]:col-start-2 max-[1000px]:row-start-3 max-[1000px]:col-span-2 md:self-end">
              {currentCountry.name}
            </h1>
            <div className="space-y-[.6rem] min-[1000px]:row-start-3 md:col-start-2 max-[1000px]:row-start-4 max-[1000px]:col-start-1">
              <p className="md:text-lg">
                <span className="font-600 ">Native Name:</span>{" "}
                {currentCountry.nativeName}
              </p>
              <p className="md:text-lg">
                <span className="font-600">Population:</span>{" "}
                {currentCountry.population}
              </p>
              <p className="md:text-lg">
                <span className="font-600">Region:</span>{" "}
                {currentCountry.region}
              </p>
              <p className="md:text-lg">
                <span className="font-600">Sub Region:</span>{" "}
                {currentCountry.subregion}
              </p>
              <p className="md:text-lg">
                <span className="font-600">Capital:</span>{" "}
                {currentCountry.capital}
              </p>
            </div>
            <div className="space-y-[.6rem] min-[1000px]:row-start-3 min-[1000px]:col-start-3 max-[1000px]:row-start-4 max-[1000px]:col-start-1">
              <p className="md:text-lg">
                <span className="font-600">Top Level Domain:</span>{" "}
                {currentCountry.topLevelDomain}
              </p>
              <p className="md:text-lg">
                <span className="font-600">Currencies:</span>{" "}
                {currentCountry.currencies}
              </p>
              <p className="md:text-lg">
                <span className="font-600">Languages:</span>{" "}
                {currentCountry.language}
              </p>
            </div>
            <div className="min-[1000px]:row-start-4 min-[1000px]:col-start-2 place-self-start
            min-[1000px]:col-span-2 
            max-[1000px]:row-start-5 
            max-[1000px]:col-start-1 
            max-[1000px]:col-span-2">

              {currentCountry.borders !== "None" ? (
                <div className="flex flex-wrap space-y-4">
                  <p className="md:text-lg w-[100%]">
                    <span>Border Countries:</span>
                  </p>
                  {borderButtons}
                </div>
              ) : (
                <p className="md:text-lg">
                  <span>Border Countries: None</span>
                </p>
              )}
            </div>
            <div className="-order-2 min-[1000px]:row-start-2 min-[1000px]:col-start-1 min-[1000px]:row-span-3 
            max-[1000px]:row-start-2 
            max-[1000px]:col-start-1 
            max-[1000px]:col-span-2
            ">
              <img
                className="max-h-[450px] "
                src={currentCountry.flag}
                alt={`${currentCountry.name} flag`}
              />
            </div>
          </div>
        ) : (
          <SpinnerIcon />
        )}
      </div>
    );
}
