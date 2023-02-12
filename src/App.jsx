import { useState, useContext, useEffect } from 'react'
import { CountryContext } from './Context'
import SingleCountry from './components/SingleCountry'
import { Routes, Route, Link } from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)
  const { allCountryData, countryData, countryDetails } = useContext(CountryContext)

  function Country(props) {
    return (
      <div className='w-[250px] text-white bg-darkBlue rounded-lg h-[350px] cursor-pointer'>
        <img src={props.flag} alt={`${props.name} flag`} className="rounded-t-[0.5rem] h-[166px] w-[100%] " />
        <div className='py-6 px-5 space-y-1'>
          <h1 className='font-800 text-lg my-3'>{props.name}</h1>
          <p><span className='font-800 '>Population: </span>{props.population}</p>
          <p><span className='font-800 '>Region: </span>{props.region}</p>
          <p><span className='font-800 '>Capital: </span>{props.capital}</p>

        </div>

      </div>
    )
  }
  const allcountries = allCountryData.map((country,number)=>{
    if (number<25) {

      return (
        <Link to={`/country/${country.name}`} key={country.id}>
          <Country
            id={country.id}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            onClick={()=>countryDetails(country.id)}
  
          />
        </Link>
      )
    }
  })
  // console.log(allCountryData)
  // Flaga, nazwa, populacja, region stolica
  return (
    <div className="App max-w-[1440px] mx-auto  ">
      <Routes>
        <Route path="/country/:countryName" element={<SingleCountry />} />
      </Routes>
      <div className='grid gap-16 grid-cols-auto-fit place-items-center px-16'>
        {allcountries}
      </div>

      {/* <SingleCountry /> */}
    </div>
  )
}

export default App

