import { useContext } from "react"
import { CountryContext } from "../Context"
export default function Navbar() {

    const { darkMode, toggleDarkMode } = useContext(CountryContext)
    function MoonIcon(props) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38C32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85c-28.42 12.38-61.8 17.23-94.77 17.23c-128.47 0-232.61-104.14-232.61-232.61Z"></path></svg>
        )
      }
    function SunIcon(props) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143l65.054-65.054l31.113 31.113l-65.054 65.054zM77.815 403.074l65.054-65.054l31.113 31.113l-65.054 65.053zM394 234h92v44h-92zm-368 0h92v44H26zm312.028 135.14l31.113-31.113l65.054 65.054l-31.113 31.112zM77.802 108.92l31.113-31.113l65.053 65.054l-31.112 31.113zM256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102Z"></path></svg>
        )
      }
    return (
        <div className="bg-white dark:bg-veryDarkBlueBg py-7 text-black dark:text-white ">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex w-[90%] mx-auto ">
                    <h1 className="font-800 mr-auto">Where in the world?</h1>
                    <div className="cursor-pointer flex items-center" onClick={toggleDarkMode}>
                        {
                            darkMode ? <MoonIcon /> :  <SunIcon />
                        }
                    <h2 className="text-sm ml-2">Dark Mode</h2>
                </div>

                </div>

            </div>
        </div>
    )
}