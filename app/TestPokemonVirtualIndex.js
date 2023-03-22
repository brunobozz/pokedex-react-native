import { useRoute } from "@react-navigation/native";
import { useState, useEffect, useMemo } from "react";
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
  const [virtualIndexMap, setVirtualIndexMap] = useState(new Map());

  useEffect(() => {
    loadPokemons(id);
  }, [id]);

  async function loadPokemons(currentId) {
    let intId = parseInt(currentId);
    let pokemons = [];

    // Atualize o virtualIndexMap ao adicionar novos Pokémons
    let newVirtualIndexMap = new Map();
    if (intId > 1) {
      await getPokemonInfo(intId - 1).then((data) => {
        pokemons.push(data);
        newVirtualIndexMap.set(-1, 0);
      });
    }
    await getPokemonInfo(intId).then((data) => {
      pokemons.push(data);
      newVirtualIndexMap.set(0, intId > 1 ? 1 : 0);
    });
    await getPokemonInfo(intId + 1).then((data) => {
      pokemons.push(data);
      newVirtualIndexMap.set(1, intId > 1 ? 2 : 1);
    });
    setPokemonList(pokemons);
    setFirstPokemonId(pokemons[0]?.id);
    setVirtualIndexMap(newVirtualIndexMap);
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

        // Atualizar o virtualIndexMap ao adicionar o novo Pokémon no início do array
        const newVirtualIndexMap = new Map();
        for (const [key, value] of virtualIndexMap) {
          newVirtualIndexMap.set(key - 1, value);
        }
        newVirtualIndexMap.set(-1, 0);
        setVirtualIndexMap(newVirtualIndexMap);

        setPokemonList([newPokemon, ...pokemonList]);
        setFirstPokemonId(newPokemon.id);
      } else {
        setSelectedIndex(changedIndex);
      }
    } else if (changedIndex === pokemonList.length - 1) {
      const nextPokemonId = parseInt(pokemonList[changedIndex]?.id) + 1;
      const newPokemon = await getPokemonInfo(nextPokemonId);
      setPokemonList([...pokemonList, newPokemon]);

      // Atualizar o virtualIndexMap ao adicionar o novo Pokémon no final do array
      const lastIndex = Array.from(virtualIndexMap.keys()).reduce((a, b) =>
        Math.max(a, b)
      );
      setVirtualIndexMap(
        new Map([...virtualIndexMap, [lastIndex + 1, changedIndex + 1]])
      );

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
      virtualIndexMap={virtualIndexMap} // Passe o virtualIndexMap para o ViewPager
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
