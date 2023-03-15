import { GraphQLClient } from "graphql-request";

const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

const graphQLClient = new GraphQLClient(endpoint);

export async function getPokemonInfo(id) {
  const query = `
  query samplePokeAPIquery {
    pokemon_v2_pokemon(where: { id:  { _eq: ${id} } }) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      base_experience
      pokemon_species_id
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_encounters {
        max_level
        min_level
      }
      pokemon_v2_pokemonitems {
        pokemon_v2_item {
          name
          cost
          fling_power
          id
        }
      }
    }
  }
  `;

  const data = await graphQLClient.request(query);

  return data.pokemon_v2_pokemon[0];
}
