import { list } from "postcss"
import { createContext, useState, useEffect } from "react"

const CountryContext = createContext()


function CountryContextProvider(props) {

    const [countryData, setCountryData] = useState([])
    const [allCountryData, allSetCountryData] = useState([])
    const [darkMode, setDarkMode] = useState(false)
    const [listValue, setListValue] = useState("")
    const [searchBarValue, setSearchBarValue] = useState("")
    const [fetchLink, setFetchLink] = useState("https://restcountries.com/v2/all")
    const [allCountry, setAllCountry] = useState([])
    const [currentSearch, setCurrentSearch] = useState("")
    const [currentRegion, setCurrentRegion] = useState("")
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
      setDarkMode(prevMode=>!prevMode)
    }

    function updateListValue(value) {
      value==="all" ? setFetchLink(`https://restcountries.com/v2/all`) 
      : setFetchLink(`https://restcountries.com/v2/region/${value}`)

    }

    useEffect(()=>{
      fetch(fetchLink)
        .then(res => res.json())
        .then(data=> { 
            return allSetCountryData(
                data.map((country, id)=>{
                  // console.log(country.borders)
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
                    // borders: country.borders,
                    flag: country.flag
                }})
            

            )
                
    })
    // setCurrentSearch(allCountryData)
    // setCurrentSearch(allCountry)
    },[fetchLink])

    useEffect(()=>{
      fetch("https://restcountries.com/v2/all")
      .then(res =>res.json())
      .then(data=> setAllCountry(data.map((country, id)=>{
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
        )
        
        
    },[])

    useEffect(()=>{
      setCurrentSearch(allCountry)
      setCurrentRegion(allCountry)
    },[allCountry])

    // console.log(allCountry, " all")

    // function findCountry() {
    //   const panstwo= "POLAND"
    //   allCountry.length>0 ?setCurrentSearch(allCountry.find(country=>country.name.toLowerCase()===panstwo.toLowerCase())) : ""
    //   console.log(currentSearch)
    // }



    return (
        <CountryContext.Provider value={{
        allCountryData, 
        countryData, countryDetails, darkMode, toggleDarkMode, 
        updateListValue,searchBarValue, handleChange, 
        handleSubmit, currentSearch,
        }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export { CountryContext, CountryContextProvider }
