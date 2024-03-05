type Country = {
    name: string,
    native_name: string,
    population: string,
    region: string,
    sub_region: string,
    capital: string,
    top_level_domains: string,
    currencies: string
    flags: string
}

function mapCurrencies(apiCurrencies) {
    // console.log(apiCurrencies);
    if (!apiCurrencies) {
        return []
    }

    const currenciesArray = Array.isArray(apiCurrencies) ? apiCurrencies : Object.values(apiCurrencies)
        return currenciesArray.map(apiCurrency => ({
            name: apiCurrency.name,
            symbol: apiCurrency.symbol,
        })
    );
}

const mapFlags =(apiFlags) => {
    return {
        svg: apiFlags.svg,
        png: apiFlags.png,
        alt: apiFlags.alt || null
    };
}

const mapCountry = (apiCountry) => {
    return {
        name: apiCountry.name.common,
        nativeName: apiCountry.name.official,
        population: apiCountry.population,
        region: apiCountry.region,
        subregion: apiCountry.subregion,
        capital: apiCountry.capital,
        currencies: mapCurrencies(apiCountry.currencies),
        flags: mapFlags(apiCountry.flags),
        borders: apiCountry.borders || null,
        tld: apiCountry.tld || null
    }
}

export const getCountries = async () => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await res.json() as string[]
        return data.map(mapCountry)
    } catch (err) {
        console.log("Error fetching data from the API", err.message)
        throw new Error("Unable to fetch data from the API")
    }
}
