
import { useCountries } from '../queries/countryData'
const Country = () => {

  const {error, loading, data } = useCountries()

  const path = window.location.pathname
  const pathUrl = path.split('/');

  let countryName = pathUrl[pathUrl.length - 1];
  countryName = decodeURIComponent(countryName);

  const country = data.getCountries.filter(country => country.name === countryName)
  console.log("Retrieved country", country[0].name);

  if (error) return <p>Error: {error.message}</p>
  if (loading) return <p>loading...</p>

  return (
    <div className="country">

        <div key={country[0].name}>
          <div className="country-flag">
            <img src={country[0].flags.png} alt={country[0].flags.alt} />
          </div>
          <div>
            <h2>{country[0].nativeName}</h2>
          </div>
          <p>{country[0].region}</p>
          <p>{country[0].subregion}</p>
          <p>{country[0].population}</p>
          <p>{country[0].capital}</p>
        </div>
    </div>
  )
}

export default Country
