import { useContext } from "react"
import { CountryContext } from "../Context"
import MoonIcon from "../Icons/MoonIcon"
import SunIcon from "../Icons/SunIcon"
export default function Navbar() {

    const { darkMode, toggleDarkMode } = useContext(CountryContext)

    return (
        <div className="bg-white dark:bg-darkBlue py-7 text-black dark:text-white text-xs md:text-xl ">
            <div className="max-w-[1440px] mx-auto">
                <header className="flex w-[90%] mx-auto ">
                    <h1 className="font-800 mr-auto">Where in the world?</h1>
                    <div className="cursor-pointer flex items-center" onClick={toggleDarkMode}>
                        {
                            darkMode ? <MoonIcon /> :  <SunIcon />
                        }
                        <h2 className=" ml-2">Dark Mode</h2>
                    </div>
                </header>
            </div>
        </div>
    )
}