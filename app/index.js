import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Layout, useTheme } from "@ui-kitten/components";
import { getPokemonInfo } from "../graphql/GetPokemonInfo";
import CompPokemonHeader from "../components/CompPokemonHeader";
import CompPokemonImage from "../components/CompPokemonImage";
import CompPokemonInfo from "../components/CompPokemonInfo";
import CompMainHeader from "../components/CompMainHeader";
import { ScrollView } from "react-native";

export default function Pokemon() {
  const route = useRoute();
  const { id } = route.params ? route.params : { id: 1 };
  const [pokemon, setPokemon] = useState(null);
  const [type, setType] = useState("normal");
  const theme = useTheme();

  // get the pokemon by ID
  useEffect(() => {
    getPokemonInfo(id).then((data) => {
      setPokemon(data);
      setType(data.pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
    });
  }, [id]);

  if (pokemon && type) {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#900"
          translucent={false}
        />
        <CompMainHeader></CompMainHeader>
        <CompPokemonImage pokemon={pokemon}></CompPokemonImage>
        <ScrollView
          style={{
            height: "100%",
            backgroundColor: theme["type-" + type + "-100"],
          }}
        >
          <CompPokemonHeader pokemon={pokemon}></CompPokemonHeader>
          <CompPokemonInfo pokemon={pokemon}></CompPokemonInfo>
        </ScrollView>
      </>
    );
  }
}
