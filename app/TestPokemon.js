import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getPokemonInfo } from "../graphql/GetPokemonInfo";
import { Layout, ViewPager } from "@ui-kitten/components";
import CompPokemonImage from "../components/CompPokemonImage";
import CompPokemonHeader from "../components/CompPokemonHeader";
import CompPokemonInfo from "../components/CompPokemonInfo";

export default function Pokemon() {
  const route = useRoute();
  const { id } = route.params ? route.params : { id: 5 };
  const [pokemonList, setPokemonList] = useState([]);
  const [changedIndex, setChangedIndex] = useState(id > 1 ? 1 : 0);
  const [selectedIndex, setSelectedIndex] = useState(id > 1 ? 1 : 0);
  const [newPoke, setNewPoke] = useState(false);
  const [firstPokemonId, setFirstPokemonId] = useState(null);

  useEffect(() => {
    loadPokemons(id);
  }, [id]);

  async function loadPokemons(currentId) {
    let intId = parseInt(currentId);
    let pokemons = [];
    if (intId > 1) {
      await getPokemonInfo(intId - 1).then((data) => {
        pokemons.push(data);
      });
    }
    await getPokemonInfo(intId).then((data) => {
      pokemons.push(data);
    });
    await getPokemonInfo(intId + 1).then((data) => {
      pokemons.push(data);
    });
    setPokemonList(pokemons);
    setFirstPokemonId(pokemons[0]?.id);
  }

  useEffect(() => {
    handleSlideChange();
  }, [changedIndex]);

  async function handleSlideChange() {
    if (changedIndex === 0) {
      const nextPokemonId = parseInt(firstPokemonId) - 1;
      if (nextPokemonId > 0) {
        const newPokemon = await getPokemonInfo(nextPokemonId);
        setNewPoke(true);
        setPokemonList([newPokemon, ...pokemonList]);
        setFirstPokemonId(newPokemon.id);
      } else {
        setSelectedIndex(changedIndex);
      }
    } else if (changedIndex === pokemonList.length - 1) {
      const nextPokemonId = parseInt(pokemonList[changedIndex]?.id) + 1;
      const newPokemon = await getPokemonInfo(nextPokemonId);
      setPokemonList([...pokemonList, newPokemon]);
      setSelectedIndex(changedIndex);
    } else {
      setSelectedIndex(changedIndex);
    }
  }

  useEffect(() => {
    if (newPoke) {
      setSelectedIndex(changedIndex + 1);
    }
  }, [pokemonList]);

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setChangedIndex(index)}
    >
      {pokemonList.map((pokemon) => (
        <Layout key={pokemon.id}>
          <CompPokemonHeader pokemon={pokemon}></CompPokemonHeader>
          <CompPokemonImage pokemon={pokemon} />
          <CompPokemonInfo pokemon={pokemon}></CompPokemonInfo>
        </Layout>
      ))}
    </ViewPager>
  );
}
