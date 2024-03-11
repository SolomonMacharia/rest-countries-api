/* eslint-disable no-mixed-spaces-and-tabs */

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
	<>
	<button className='back-btn'>Back</button>
    <div className="country">
        <div className='country__card' key={country[0].name}>
        	<div className="country__flag">
        		<img className='country__flag--img' src={country[0].flags.png} alt={country[0].flags.alt} />
        	</div>
        	<div className='country__details'>
            	<h2>{country[0].name}</h2>
				<p><span className='country__details--span'>Native Name: </span>{country[0].nativeName}</p>
				<p><span className='country__details--span'>Population: </span>{country[0].population}</p>
				<p><span className='country__details--span'>Region: </span>{country[0].region}</p>
				<p><span className='country__details--span'>Sub Region: </span>{country[0].subregion}</p>
				<p><span className='country__details--span'>Capital: </span>{country[0].capital}</p>
				<p><span className='country__details--span'>Top Level Domain: </span>{country[0].tld}</p>
				<p><span className='country__details--span'>Currencies: </span>currencies</p>
				<p><span className='country__details--span'>Languages: </span>languages</p>
			</div>
        </div>
    </div>
	</>
  )
}

export default Country
