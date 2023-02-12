import { useContext } from "react"
import { CountryContext } from "../Context"
export default function List() {

    function optionChangeHandler(e) {
        updateListValue(e.target.value)
    }

    const { darkMode, updateListValue } = useContext(CountryContext)
    return (
        <div className="bg-darkBlue py-3 px-3 rounded-lg text-white w-min">
            <select className="text-white bg-darkBlue pr-10" onChange={optionChangeHandler}>
                <option value="" defaultValue disabled hidden>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option> 
                <option value="asia">Asia</option> 
                <option value="europe">Europe</option> 
                <option value="oceania">Oceania</option> 
            </select> 
        </div>
    )
}