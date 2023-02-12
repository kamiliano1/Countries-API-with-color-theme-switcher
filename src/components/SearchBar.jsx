import { useContext } from "react"
import { CountryContext } from "../Context"
export default function SearchBar() {
    function MdiMagnify(props) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"></path></svg>
        )
      }
    //   const [searchBarValue, setSearchBarValue] = useState("")
    // function handleSubmit(e) {
    //     e.prevent.default()
    // }

    // function handleChange(e) {
    //     setSearchBarValue(prev=>e.target.value)
    // }
    const { darkMode, toggleDarkMode, handleChange, searchBarValue,handleSubmit } = useContext(CountryContext)
    return (
        <form action="" onSubmit={handleSubmit} className="text-white bg-darkBlue flex px-8 py-3 w-[100%] rounded-lg my-5">
            <button type="submit" className="text-2xl"><MdiMagnify/></button>
            <input 
            type="text" 
            name="countryName"
            onChange={handleChange}
            value={searchBarValue} 
            placeholder="Search for a country..." 
            className="ml-4 py-1 bg-darkBlue placeholder-white text-sm" />
        </form>
    )
}
