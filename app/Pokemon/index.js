import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import CompPokemonHeader from "../../components/CompPokemonHeader";
import { StatusBar } from "react-native";
import { getPokemonInfo } from "../../graphql/GetPokemonInfo";
import { useTheme } from "@ui-kitten/components";
import CompPokemonImage from "../../components/CompPokemonImage";

export default function Pokemon() {
  const route = useRoute();
  const { id } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [type, setType] = useState("");
  const theme = useTheme();

  // get the pokemon by ID
  useEffect(() => {
    getPokemonInfo(id).then((data) => {
      setPokemon(data);
      setType(data.pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
    });
  }, [id]);

  if (pokemon) {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={theme["type-" + type + "-100"]}
          translucent={false}
        />
        <CompPokemonHeader
          id={pokemon.id}
          name={pokemon.name}
          type={type}
        ></CompPokemonHeader>
        <CompPokemonImage id={pokemon.id} type={type}></CompPokemonImage>
      </>
    );
  }
}
