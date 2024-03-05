import * as Api from "./Api.js";
export const resolvers = {
    Query: {
        getCountries: async () => Api.getCountries()
    }
};
