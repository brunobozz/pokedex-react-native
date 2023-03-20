import { useEffect, useState } from "react";
import { getPokemonList } from "../graphql/GetPokemonList";
import CompPokemonList from "../components/CompPokemonList";
import CompSearchForm from "../components/CompSearchForm";
import { StatusBar } from "react-native";
import { Spinner } from "native-base";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  // get the list
  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemonList(data);
    });
  }, []);

  // set a new search value
  const pokeSearch = (value) => {
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      setSearchValue(value);
    }, 500);
    setTimeoutId(newTimeoutId);
  };

  // filter the list
  const filteredPokemonList = pokemonList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#900"
        translucent={false}
      />
      <CompSearchForm onSearch={pokeSearch}></CompSearchForm>
      {pokemonList ? (
        <CompPokemonList
          list={filteredPokemonList?.filter((pokemon) => pokemon.id)}
        />
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
}
