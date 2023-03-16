import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import CompPokemonHeader from "../../components/CompPokemonHeader";
import { StatusBar } from "react-native";
import { getPokemonInfo } from "../../graphql/GetPokemonInfo";

export default function Pokemon() {
  const route = useRoute();
  const { id } = route.params;
  const [pokemon, setPokemon] = useState(null);

  // get the list
  useEffect(() => {
    getPokemonInfo(id).then((data) => {
      setPokemon(data);
    });
  }, [id]);

  if (pokemon) {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#900"
          translucent={false}
        />
        <CompPokemonHeader
          id={pokemon.id}
          name={pokemon.name}
        ></CompPokemonHeader>
      </>
    );
  }
}
