import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components/ui";
import { Divider, useTheme } from "@ui-kitten/components";
import CompCircleType from "./CompCircleType";
import { useEffect, useState } from "react";

export default function CompPokemonInfo(props) {
  const theme = useTheme();
  const [type, setType] = useState("normal");

  useEffect(() => {
    setType(props.pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
  }, [props.pokemon]);

  return (
    <Layout style={{ backgroundColor: theme["type-" + type + "-100"] }}>
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Type</Text>
        <Layout style={styles.types}>
          {props.pokemon.pokemon_v2_pokemontypes.map((pokeType, index) => (
            <Layout
              key={index}
              style={[
                styles.typesItem,
                {
                  backgroundColor:
                    theme["type-" + pokeType.pokemon_v2_type.name],
                },
              ]}
            >
              <CompCircleType
                type={pokeType.pokemon_v2_type.name}
              ></CompCircleType>
              <Text
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {pokeType.pokemon_v2_type.name}
              </Text>
            </Layout>
          ))}
        </Layout>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + type] }} />
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Number</Text>
        <Text style={{ color: "#fff" }}>{props.pokemon.id}</Text>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + type] }} />
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Weight</Text>
        <Text style={{ color: "#fff" }}>{props.pokemon.weight} lbs.</Text>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + type] }} />
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Height</Text>
        <Text style={{ color: "#fff" }}>{props.pokemon.height} f.</Text>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + type] }} />
      <Layout style={styles.item}>
        <Text style={{ color: "#fff" }}>Base Experience</Text>
        <Text style={{ color: "#fff" }}>
          {props.pokemon.base_experience} xp
        </Text>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + type] }} />
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
    </Layout>
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
  typesItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    paddingRight: 7,
    borderRadius: 5,
    marginLeft: 5,
  },
  abilities: {
    display: "flex",
    backgroundColor: "transparent",
    alignItems: "flex-end",
  },
});
