import { useContext } from "react"
import { CountryContext } from "../Context"
import LoopIcon from "../Icons/LoopIcon"
export default function SearchBar() {
    const { handleChange, searchBarValue, handleSubmit } = useContext(CountryContext)
    return (
        <form action="" onSubmit={handleSubmit} className="text-black bg-white dark:text-white dark:bg-darkBlue 
        flex px-8 h-[50px] w-[100%] md:w-[35%] rounded-lg my-5">
            <button type="submit" className="text-2xl"><LoopIcon/></button>
            <input 
            type="text" 
            name="countryName"
            onChange={handleChange}
            value={searchBarValue} 
            placeholder="Search for a country..." 
            className="ml-4 py-1 dark:bg-darkBlue bg-white placeholder-black dark:placeholder-white text-sm rounded-lg" />
        </form>
    )
}
