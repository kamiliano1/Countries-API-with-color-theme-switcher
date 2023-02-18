import { createContext, useState, useEffect } from "react"

const CountryContext = createContext()

function CountryContextProvider(props) {
  const [allCountryData, allSetCountryData] = useState([]);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkActive")) || false
  );

  const [searchBarValue, setSearchBarValue] = useState("");
  const [fetchLink, setFetchLink] = useState(
    "https://restcountries.com/v2/all"
  );

  const [allCountry, setAllCountry] = useState([]);

  function handleChange(e) {
    setSearchBarValue((prev) => e.target.value);
    setFetchLink(`https://restcountries.com/v2/name/${e.target.value}`);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFetchLink(`https://restcountries.com/v2/name/${searchBarValue}`);
    setSearchBarValue("");
  }

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function updateListValue(value) {
    allSetCountryData(
      value === "all"
        ? allCountry
        : allCountry.filter((country) => country.region === value)
    );
    setSearchBarValue("");
  }


  function fetchIpAddress(address) {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_9EuNfN5MKmLWFLAw25PFyR3RiFCNA&ipAddress=${address}`)
    .then(res=>{
      if (res.ok) {
        setTypedAddress("")
        return res.json()
      }
      else {
        return Promise.reject(res)
      }
    })
    .then(data=>{
      setIpAdress({
        ip:data.ip,
        isp:data.isp,
        location:data.location.city,
        region:data.location.region,
        postalCode:data.location.postalCode,
        timeZone:data.location.timezone,
        latitude:data.location.lat,
        longitude:data.location.lng,
    })
  }
      )
      .catch((res) => {
        setIpPlaceHolder(res.statusText)
        setTypedAddress("")
      })
  }


  function fetchData(fetchLink, fetchData) {
    fetch(fetchLink)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(res)
        }
      })
      .then((data) =>
        fetchData(
          data.map((country, id) => {
            const borderCountry = country.borders
              ? country.borders.map((border) => border).join(",")
              : "None";
            const currencies = country.currencies
              ? country.currencies.map((currency) => currency.name)
              : "None";
            const languages = country.languages
              .map((language) => language.name)
              .join(", ");
            return {
              id: id,
              name: country.name,
              nativeName: country.nativeName,
              population: country.population.toLocaleString("en-US"),
              region: country.region,
              subregion: country.subregion,
              capital: country.capital,
              topLevelDomain: country.topLevelDomain,
              currencies: currencies,
              language: languages,
              borders: borderCountry,
              flag: country.flag,
            };
          })
        )
      )
      .catch((res) =>{
        console.log("Wrong country Name")
      })
  }
  useEffect(() => {
    localStorage.setItem("isDarkActive", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    fetchData("https://restcountries.com/v2/all", setAllCountry);
  }, []);

  useEffect(() => {
    fetchData(fetchLink, allSetCountryData);
  }, [fetchLink]);

  return (
    <CountryContext.Provider
      value={{
        allCountryData,
        darkMode,
        allCountry,
        handleChange,
        searchBarValue,
        handleSubmit,
        toggleDarkMode,
        updateListValue,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountryContextProvider }
