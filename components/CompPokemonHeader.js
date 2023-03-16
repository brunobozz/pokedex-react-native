import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components/ui";
import { useRouter } from "expo-router";

export default function CompPokemonHeader(props) {
  const router = useRouter();

  return (
    <Layout style={styles.header}>
      <Text style={styles.text} category="h6">
        {props.id} - {props.name}
      </Text>
      <Icon
        fill="#fff"
        name="search"
        style={styles.icon}
        onPress={() => {
          router.push("/PokemonList");
        }}
      ></Icon>
    </Layout>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: "#900",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
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
