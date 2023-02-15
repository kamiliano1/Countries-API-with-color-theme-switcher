import { useState, useContext, useEffect } from 'react'
import { CountryContext } from './Context'
import SingleCountry from './components/SingleCountry'
import { Routes, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import List from './components/List'
import Home from './pages/Home'
function App() {
  const { currentSearch, allCountryData, countryDetails, darkMode } = useContext(CountryContext)

  function Country(props) {
    return (
      <div className='dark:bg-darkBlue bg-white rounded-lg text-black dark:text-white cursor-pointer'>
        <div className='h-[250px]'>
          <img src={props.flag} alt={`${props.name} flag`} className="rounded-t-[0.5rem] h-[100%] w-[100%] " />
        </div>
        <div className='py-6 px-5 space-y-1'>
          <h1 className='font-800 text-lg my-3'>{props.name}</h1>
          <p><span className='font-800 '>Population: </span>{props.population}</p>
          <p><span className='font-800 '>Region: </span>{props.region}</p>
          <p><span className='font-800 '>Capital: </span>{props.capital}</p>

        </div>

      </div>
    )
  }

  const colorScheme = darkMode ? "dark" : ""
  // const allcountries = allCountryData.map((country,number)=>{
  //   if (number<25) {

  //     return (
  //       <Link to={`/country/${country.name}`} key={country.id}>
  //         <Country
  //           id={country.id}
  //           flag={country.flag}
  //           name={country.name}
  //           population={country.population}
  //           region={country.region}
  //           capital={country.capital}
  //           onClick={()=>countryDetails(country.id)}
  
  //         />
  //       </Link>
  //     )
  //   }
  // })
  
  const allcountries = allCountryData.map((country,number)=>{
    // console.log(currentSearch)
    if (number<500) {

      return (
        <Link to={`/${country.name}`} key={country.id}>
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

  return (
    <div className={` ${colorScheme}`}>
      <div className='bg-white dark:bg-veryDarkBlueBg min-h-[100vh]'>
      {/* <Home /> */}
      <Navbar />
      <div className='max-w-[1440px] mx-auto'>

      <Routes>
        <Route path="/:countryName" element={<SingleCountry />} />
        <Route path="/" element={
                <div className='w-[90%] mx-auto'>
                  <div className="md:flex items-center justify-between ">
                  <SearchBar/>
                  <List />

                  </div>
                <div className='grid gap-8 md:gap-16 grid-cols-auto-fit md:pb-10'>
                {allcountries}
              </div>
                </div>
          } />
      </Routes>
      </div>

      </div>


      {/* <SingleCountry /> */}
    </div>
  )
}

export default App

