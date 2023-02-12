import { list } from "postcss"
import { createContext, useState, useEffect } from "react"

const CountryContext = createContext()


function CountryContextProvider(props) {

    const [countryData, setCountryData] = useState([])
    const [allCountryData, allSetCountryData] = useState([])
    const [darkMode, setDarkMode] = useState(false)
    const [listValue, setListValue] = useState("europe")
    const [searchBarValue, setSearchBarValue] = useState("")
    const [fetchLink, setFetchLink] = useState("https://restcountries.com/v2/region/europe")

    function countryDetails(id) {
        console.log(id)

    }

    
    function handleChange(e) {
      setSearchBarValue(prev=>e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setFetchLink(`https://restcountries.com/v2/name/${searchBarValue}`)
}

    function toggleDarkMode() {
      console.log(darkMode)
      setDarkMode(prevMode=>!prevMode)
    }

    function updateListValue(value) {
      setListValue(value)
      setFetchLink(`https://restcountries.com/v2/region/${listValue}`)
      console.log(listValue)
    }

    useEffect(()=>{
  
    //   fetch("https://restcountries.com/v2/name/poland")
    //     .then(res => res.json())
    //     .then(data=> {
    //         fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(",")}`)
    //         .then(res => res.json())
    //         .then(borderData=> {
    //           const currencies = data[0].currencies.map(currency=>{
    //             return currency.name
    //           }).join("")
    //           const languages = data[0].languages.map(language=>{
    //             return language.name
    //           }).join(", ")
    //         const borderCountry = borderData.map(country=>{
    //           return country.name.common
    //         }).join(", ")
    //         return setCountryData({
    //         name:data[0].name,
    //         nativeName: data[0].nativeName,
    //         population: data[0].population.toLocaleString('en-US'),
    //         region: data[0].region,
    //         subregion: data[0].subregion,
    //         capital: data[0].capital,
    //         topLevelDomain: data[0].topLevelDomain,
    //         currencies: currencies,
    //         language: languages,
    //         borders: borderCountry,
    //         flag: data[0].flag
    //         })
    //       })
    // })
    // https://restcountries.com/v2/name/peru
      fetch(fetchLink)
        .then(res => res.json())
        .then(data=> { 
            return allSetCountryData(
                data.map((country, id)=>{
                const borderCountry = country.borders ? country.borders.map(border=>border) : "None"
                const currencies = country.currencies? country.currencies.map(currency=>currency.name) : "None"
                const languages = country.languages.map(language=>language.name)
            return {
                    id:id,
                    name:country.name,
                    nativeName: country.nativeName,
                    population: country.population.toLocaleString('en-US'),
                    region: country.region,
                    subregion: country.subregion,
                    capital: country.capital,
                    topLevelDomain: country.topLevelDomain,
                    currencies: currencies,
                    language: languages,
                    borders: borderCountry,
                    flag: country.flag
                }})
            

            )
                
    })
    console.log(allCountryData)
    },[fetchLink])



    return (
        <CountryContext.Provider value={{allCountryData, countryData, countryDetails, darkMode, toggleDarkMode, updateListValue,searchBarValue, handleChange, handleSubmit}}>
            {props.children}
        </CountryContext.Provider>
    )
}

export { CountryContext, CountryContextProvider }
