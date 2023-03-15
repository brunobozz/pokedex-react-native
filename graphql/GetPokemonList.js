import { gql } from "@apollo/client";
import client from "./client";

export async function getPokemonList(value) {
  const whereClause = value ? `where: { name: { _iregex: ${value} } }` : "";

  const { data } = await client.query({
    query: gql`
      query samplePokeAPIquery {
        pokemon_v2_pokemon(
          order_by: { id: asc }
          limit: 905
          ${whereClause}
        ) {
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    `,
  });
  return data.pokemon_v2_pokemon;
}
