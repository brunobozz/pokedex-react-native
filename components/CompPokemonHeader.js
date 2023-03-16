import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Icon } from "@ui-kitten/components/ui";
import { useRouter } from "expo-router";
import { useTheme } from "@ui-kitten/components";

export default function CompPokemonHeader(props) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Layout
      style={[
        styles.header,
        { backgroundColor: theme["type-" + props.type + "-100"] },
      ]}
    >
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
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
