import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Layout, useTheme, ViewPager } from "@ui-kitten/components";
import { getPokemonInfo } from "../graphql/GetPokemonInfo";
import CompPokemonHeader from "../components/CompPokemonHeader";
import CompPokemonImage from "../components/CompPokemonImage";
import CompPokemonInfo from "../components/CompPokemonInfo";

export default function Pokemon() {
  const route = useRoute();
  const { id } = route.params ? route.params : { id: 5 };
  const [pokemonList, setPokemon] = useState([]);
  const [type, setType] = useState("normal");
  const theme = useTheme();
  var indexId = 0;

  const [selectedIndex, setSelectedIndex] = useState(1);

  // get the pokemon by ID
  useEffect(() => {
    refreshPokemons();
  }, [id]);

  async function refreshPokemons() {
    let pokemons = [];
    if (id > 1) {
      await getPokemonInfo(id - 1).then((data) => {
        pokemons.push(data);
      });
    }
    await getPokemonInfo(id).then((data) => {
      pokemons.push(data);
    });
    await getPokemonInfo(id + 1).then((data) => {
      pokemons.push(data);
    });
    setPokemon(pokemons);
  }

  if (pokemonList && type) {
    return (
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {pokemonList.map((pokemon) => (
          <Layout
            key={pokemon.id}
            style={{
              height: "100%",
              backgroundColor: theme["type-" + type + "-100"],
            }}
          >
            <StatusBar
              barStyle="light-content"
              hidden={false}
              backgroundColor={theme["type-" + type + "-100"]}
              translucent={false}
            />
            <CompPokemonHeader pokemon={pokemon}></CompPokemonHeader>
            <CompPokemonImage pokemon={pokemon}></CompPokemonImage>
            <CompPokemonInfo pokemon={pokemon}></CompPokemonInfo>
          </Layout>
        ))}
      </ViewPager>
    );
  }
}
