import { createContext } from "react"

const CountryContext = createContext()


function CountryContextProvider(props) {

    return (
        <CountryContext.Provider value="aa">
            {props.children}
        </CountryContext.Provider>
    )
}

export { CountryContext, CountryContextProvider }
