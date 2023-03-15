import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { getPokemonList } from "../../graphql/GetPokemonList";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemonList(data);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList>
    </View>
  );
}
