import { useState, useContext, useEffect } from 'react'
import { CountryContext } from './Context'
function App() {
  const [count, setCount] = useState(0)
  const [countryData, setCountryData] = useState([])

  useEffect(()=>{

    fetch("https://restcountries.com/v2/name/usa")
      .then(res => res.json())
      .then(data=> {
        const currencies = data[0].currencies.map(currency=>{
          return currency.name
        }).join("")
        const languages = data[0].languages.map(language=>{
          return language.name
        }).join(", ")
        fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(",")}`)
        .then(res => res.json())
        .then(borderData=> {console.log(borderData)
          const borderCountry = borderData.map(country=>{
            return country.name.common
          }).join(", ")
          setCountryData({
          name:data[0].name,
          nativeName: data[0].nativeName,
          population: data[0].population.toLocaleString('en-US'),
          region: data[0].region,
          subregion: data[0].subregion,
          capital: data[0].capital,
          topLevelDomain: data[0].topLevelDomain,
          currencies: currencies,
          language: languages,
          borders: borderCountry,
          flag: data[0].flag
        })
        })

  })
    
  },[])
  // console.log(countryData)
  // console.log(countryData.nativeName)
  const values = useContext(CountryContext)
  // const currency = countryData.length>0 ?countryData.currencies.map(currenc=>{
  //   return currenc.name
  // }).join("") : ""
  return (
    <div className="App">
      <h1>{countryData.name}</h1>
      <p>Native Name: {countryData.nativeName}</p>
      <p>Population: {countryData.population}</p>
      <p>Region: {countryData.region}</p>
      <p>Sub Region: {countryData.subregion}</p>
      <p>Capital: {countryData.capital}</p>
      <p>Top Level Domain: {countryData.topLevelDomain}</p>
      <p>Currencies: {countryData.currencies}</p>
      <p>Languages: {countryData.language}</p>
      <p>Border Countries: {countryData.borders}</p>
      <img src={countryData.flag} alt={`${countryData.name} flag`} />

    </div>
  )
}

export default App


// {
//   "name": "Belgium",
//   "topLevelDomain": [
//       ".be"
//   ],
//   "alpha2Code": "BE",
//   "alpha3Code": "BEL",
//   "callingCodes": [
//       "32"
//   ],
//   "capital": "Brussels",
//   "altSpellings": [
//       "BE",
//       "België",
//       "Belgie",
//       "Belgien",
//       "Belgique",
//       "Kingdom of Belgium",
//       "Koninkrijk België",
//       "Royaume de Belgique",
//       "Königreich Belgien"
//   ],
//   "subregion": "Western Europe",
//   "region": "Europe",
//   "population": 11555997,
//   "latlng": [
//       50.83333333,
//       4
//   ],
//   "demonym": "Belgian",
//   "area": 30528,
//   "gini": 27.2,
//   "timezones": [
//       "UTC+01:00"
//   ],
//   "borders": [
//       "FRA",
//       "DEU",
//       "LUX",
//       "NLD"
//   ],
//   "nativeName": "België",
//   "numericCode": "056",
//   "flags": {
//       "svg": "https://flagcdn.com/be.svg",
//       "png": "https://flagcdn.com/w320/be.png"
//   },
//   "currencies": [
//       {
//           "code": "EUR",
//           "name": "Euro",
//           "symbol": "€"
//       }
//   ],
//   "languages": [
//       {
//           "iso639_1": "nl",
//           "iso639_2": "nld",
//           "name": "Dutch",
//           "nativeName": "Nederlands"
//       },
//       {
//           "iso639_1": "fr",
//           "iso639_2": "fra",
//           "name": "French",
//           "nativeName": "français"
//       },
//       {
//           "iso639_1": "de",
//           "iso639_2": "deu",
//           "name": "German",
//           "nativeName": "Deutsch"
//       }
//   ],
//   "translations": {
//       "br": "Belgia",
//       "pt": "Bélgica",
//       "nl": "België",
//       "hr": "Belgija",
//       "fa": "بلژیک",
//       "de": "Belgien",
//       "es": "Bélgica",
//       "fr": "Belgique",
//       "ja": "ベルギー",
//       "it": "Belgio",
//       "hu": "Belgium"
//   },
//   "flag": "https://flagcdn.com/be.svg",
//   "regionalBlocs": [
//       {
//           "acronym": "EU",
//           "name": "European Union"
//       }
//   ],
//   "cioc": "BEL",
//   "independent": true
// }