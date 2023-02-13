import { useContext } from "react"
import { CountryContext } from "../Context"
import Navbar from "../components/Navbar"
import SearchBar from '../components/SearchBar'
import List from '../components/List'
export default function Home() {
    return (
    <div>
    <Navbar />
      <div className='w-[90%] mx-auto'>
        <SearchBar />
        <List />
      </div></div>
    )
}