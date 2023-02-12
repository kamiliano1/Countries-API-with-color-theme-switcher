import { createContext, useState, useEffect } from "react"

const CountryContext = createContext()


function CountryContextProvider(props) {

    const [countryData, setCountryData] = useState([])
    const [allCountryData, allSetCountryData] = useState([])

    function countryDetails(id) {
        console.log(id)

    }

    useEffect(()=>{
  
      fetch("https://restcountries.com/v2/name/poland")
        .then(res => res.json())
        .then(data=> {
            fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(",")}`)
            .then(res => res.json())
            .then(borderData=> {
              const currencies = data[0].currencies.map(currency=>{
                return currency.name
              }).join("")
              const languages = data[0].languages.map(language=>{
                return language.name
              }).join(", ")
            const borderCountry = borderData.map(country=>{
              return country.name.common
            }).join(", ")
            return setCountryData({
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
      fetch("https://restcountries.com/v2/all")
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
    },[])



    return (
        <CountryContext.Provider value={{allCountryData, countryData, countryDetails}}>
            {props.children}
        </CountryContext.Provider>
    )
}

export { CountryContext, CountryContextProvider }
