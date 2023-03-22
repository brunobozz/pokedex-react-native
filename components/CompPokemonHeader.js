import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, Text, Icon } from "@ui-kitten/components/ui";
import { useRouter } from "expo-router";
import { useTheme } from "@ui-kitten/components";

export default function CompPokemonHeader(props) {
  const router = useRouter();
  const theme = useTheme();
  const [type, setType] = useState("normal");

  useEffect(() => {
    setType(props.pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
  }, []);

  return (
    <>
      <Layout
        style={[
          styles.header,
          { backgroundColor: theme["type-" + type + "-100"] },
        ]}
      >
        <Text style={styles.text} category="h5">
          {props.pokemon.name}
        </Text>
      </Layout>
      <Divider style={{ backgroundColor: theme["type-" + type] }} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  text: {
    color: "#fff",
    textTransform: "capitalize",
  },
  icon: {
    width: 24,
    height: 24,
    margin: 10,
  },
});
