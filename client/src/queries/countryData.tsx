import { gql, useQuery } from "@apollo/client";

const COUNTRIES_DATA = gql`
query {
  getCountries {
    name
    nativeName
    population 
    region
    subregion
    capital
    tld
    currencies {
        name
        symbol
    }
    flags {
      alt
      png
    }
  }
}
`

export const useCountries = () => {
    const {loading, error, data} = useQuery(COUNTRIES_DATA)
    return {loading, error, data}
  }