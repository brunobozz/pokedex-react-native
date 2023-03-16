import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components/ui";
import { Divider, useTheme } from "@ui-kitten/components";

export default function CompPokemonInfo(props) {
  const theme = useTheme();

  return (
    <>
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Type</Text>
        <Layout style={styles.types}>
          {props.pokemon.pokemon_v2_pokemontypes.map((pokeType, index) => (
            <Text
              key={index}
              style={{ color: "#fff", textTransform: "uppercase" }}
            >
              {pokeType.pokemon_v2_type.name}
            </Text>
          ))}
        </Layout>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + props.type] }} />
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Weight</Text>
        <Text style={{ color: "#fff" }}>{props.pokemon.weight} lbs.</Text>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + props.type] }} />
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Height</Text>
        <Text style={{ color: "#fff" }}>{props.pokemon.height} f.</Text>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + props.type] }} />
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Base Experience</Text>
        <Text style={{ color: "#fff" }}>{props.pokemon.base_experience}</Text>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + props.type] }} />
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Abilities</Text>
        <Layout style={styles.abilities}>
          {props.pokemon.pokemon_v2_pokemonabilities.map((ability, index) => (
            <Text
              key={index}
              style={{ color: "#fff", textTransform: "capitalize" }}
            >
              {ability.pokemon_v2_ability.name}
            </Text>
          ))}
        </Layout>
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "transparent",
  },
  types: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  abilities: {
    display: "flex",
    backgroundColor: "transparent",
    alignItems: "flex-end",
  },
});
