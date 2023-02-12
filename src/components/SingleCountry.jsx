import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { CountryContext } from "../Context"
export default function SingleCountry() {

    const {allCountryData, countryData} = useContext(CountryContext)
    // console.log(allCountryData)
    const { countryName } = useParams()
    // console.log(countryName)
    const currentCountry = allCountryData.find(country=>country.name===countryName)
    console.log(currentCountry)
    return (
        <div>
            <h1>{currentCountry.name}</h1>
            <p>Native Name: {currentCountry.nativeName}</p>
            <p>Population: {currentCountry.population}</p>
            <p>Region: {currentCountry.region}</p>
            <p>Sub Region: {currentCountry.subregion}</p>
            <p>Capital: {currentCountry.capital}</p>
            <p>Top Level Domain: {currentCountry.topLevelDomain}</p>
            <p>Currencies: {currentCountry.currencies}</p>
            <p>Languages: {currentCountry.language}</p>
            <p>Border Countries: {currentCountry.borders}</p>
            <img src={currentCountry.flag} alt={`${currentCountry.name} flag`} />
        </div>
    )
}
