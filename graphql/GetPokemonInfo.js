import { gql } from "@apollo/client";
import client from "./client";

export async function getPokemonInfo(id) {
  const { data } = await client.query({
    query: gql`
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
    `,
  });
  return data.pokemon_v2_pokemon[0];
}
