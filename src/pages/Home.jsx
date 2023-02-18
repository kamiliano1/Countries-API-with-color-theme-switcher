import { useContext } from 'react'
import { CountryContext } from '../Context'
import { Link } from "react-router-dom"
import SearchBar from '../components/SearchBar'
import List from '../components/List'
import Country from '../components/Country'

export default function Home() {
    const { allCountryData, countryDetails } = useContext(CountryContext);
    const allcountries = allCountryData.map((country) => {
      return (
        <Link to={`/${country.name}`} key={country.id}>
          <Country
            id={country.id}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            onClick={() => countryDetails(country.id)}
          />
        </Link>
      );
    });
    return (
      <div className="w-[90%] mx-auto">
        <section className="md:flex items-center justify-between mb-5 ">
          <SearchBar />
          <List />
        </section>
        <main className="grid gap-8 md:gap-16 md:grid-cols-auto-fill md:pb-10 max-[570px]:w-[90%] max-[570px]:mx-auto">
          {allcountries}
        </main>
      </div>
    );
}