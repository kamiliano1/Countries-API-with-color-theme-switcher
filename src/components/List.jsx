import { useContext } from "react"
import { CountryContext } from "../Context"
export default function List() {

    function optionChangeHandler(e) {
        updateListValue(e.target.value)
    }

    const { updateListValue } = useContext(CountryContext)
    return (
      <div className="dark:bg-darkBlue bg-white h-[50px] flex px-3 rounded-lg w-min mb-10 md:m-0">
        <select
          className="text-black dark:text-white dark:bg-darkBlue bg-white pr-10"
          onChange={optionChangeHandler}
          defaultValue={"default"}
        >
          <option value="default" disabled hidden>
            Filter by Region
          </option>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    );
}