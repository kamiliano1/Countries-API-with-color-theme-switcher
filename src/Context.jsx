import { list } from "postcss"
import { createContext, useState, useEffect } from "react"

const CountryContext = createContext()


function CountryContextProvider(props) {

    // const [countryData, setCountryData] = useState([])
    const [allCountryData, allSetCountryData] = useState([])
    const [darkMode, setDarkMode] = useState(false)
    const [searchBarValue, setSearchBarValue] = useState("")
    const [fetchLink, setFetchLink] = useState("https://restcountries.com/v2/all")
    const [allCountry, setAllCountry] = useState([])

    function handleChange(e) {
      setSearchBarValue(prev=>e.target.value)
      setFetchLink(`https://restcountries.com/v2/name/${e.target.value}`)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setFetchLink(`https://restcountries.com/v2/name/${searchBarValue}`)
    setSearchBarValue("")
}

    function toggleDarkMode() {
      setDarkMode(prevMode=>!prevMode)
    }

    function updateListValue(value) {
      allSetCountryData(value==="all" ? allCountry : allCountry.filter(country=>country.region===value))
    }

    useEffect(()=>{
      fetch(fetchLink)
        .then(res => res.json())
        .then(data=> allSetCountryData(
                data.map((country, id)=>{
                const borderCountry = country.borders ? country.borders.map(border=>border).join(",") : "None"
                const currencies = country.currencies ? country.currencies.map(currency=>currency.name) : "None"
                const languages = country.languages.map(language=>language.name).join(", ")
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
                    flag: country.flag,
                }})
            

            )
                
    )
    // setCurrentSearch(allCountryData)
    // setCurrentSearch(allCountry)
    },[fetchLink])

    useEffect(()=>{
      fetch("https://restcountries.com/v2/all")
      .then(res =>res.json())
      .then(data=> setAllCountry(data.map((country, id)=>{
            const borderCountry = country.borders ? country.borders.map(border=>border) : "None"
            const currencies = country.currencies? country.currencies.map(currency=>currency.name) : "None"
            const languages = country.languages.map(language=>language.name).join(", ")
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
        )
        
        // console.log(allCountry)
    },[])






    return (
        <CountryContext.Provider value={{
        allCountryData, allCountry, darkMode, toggleDarkMode, 
        updateListValue,searchBarValue, handleChange, 
        handleSubmit,
        }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export { CountryContext, CountryContextProvider }
