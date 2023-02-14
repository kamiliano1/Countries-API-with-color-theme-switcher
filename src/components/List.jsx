import { useContext } from "react"
import { CountryContext } from "../Context"
export default function List() {

    function optionChangeHandler(e) {
        updateListValue(e.target.value)
    }

    const { darkMode, updateListValue } = useContext(CountryContext)
    return (
        <div className="bg-darkBlue py-3 px-3 rounded-lg w-min mb-6">
            <select className="text-white bg-darkBlue pr-10" onChange={optionChangeHandler}
            defaultValue={"default"}>
                <option value="default" disabled hidden>Filter by Region</option>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option> 
                <option value="Asia">Asia</option> 
                <option value="Europe">Europe</option> 
                <option value="Oceania">Oceania</option> 
            </select> 
        </div>
    )
}