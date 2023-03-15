import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  //   uri: "https://graphql-pokemon2.vercel.app/",
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});
