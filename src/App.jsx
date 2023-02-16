import { useContext } from 'react'
import { CountryContext } from './Context'
import SingleCountryDetail from './components/SingleCountryDetail'
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'

import Navbar from './components/Navbar'

function App() {
  const { darkMode } = useContext(CountryContext)

  const colorScheme = darkMode ? "dark" : ""

  return (
    <div className={` ${colorScheme}`}>
      <div className='bg-white dark:bg-veryDarkBlueBg min-h-[100vh]'>
        <Navbar />
        <div className='max-w-[1440px] mx-auto'>
          <Routes>
            <Route path="/:countryName" element={<SingleCountryDetail />} />
            <Route path="/" element={ <Home />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

