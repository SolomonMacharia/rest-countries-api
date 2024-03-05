export const typeDefs = `#graphql
    type Country {
        name: String
        nativeName: String
        population: Int
        region: String
        subregion: String
        capital: [String]
        tld: [String]
        currencies: [Currency]
        flags: Flags
        borders: [String]
    }

    type Flags {
        svg: String,
        png: String,
        alt: String
    }

    type Currency {
        name: String
        symbol: String
    }

    type Query {
        getCountries: [Country]
    }
`