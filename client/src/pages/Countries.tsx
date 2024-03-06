import { Link } from 'react-router-dom'

import { useCountries } from '../queries/countryData'

const Countries = () => {
    const {error, loading, data } = useCountries()

    if (loading) return <p>loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className='countries'>
            {data.getCountries.map(country => (
                <Link to={`/${country.name}`}  key={country.name}>
                    <div>
                        <div>
                            <img src={country.flags.png} alt={country.flags.alt} />
                        </div>
                        <div>
                            <h2>{country.name}</h2>
                            <p><span>Population:</span> {country.population}</p>
                            <p><span>Capital:</span> {country.capital}</p>
                            <p><span>Region:</span> {country.region}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )

}

export default Countries
