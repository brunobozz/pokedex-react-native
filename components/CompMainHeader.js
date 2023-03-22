import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Icon } from "@ui-kitten/components/ui";
import { useRouter } from "expo-router";
import { useTheme } from "@ui-kitten/components";
import { Image } from "react-native";

export default function CompMainHeader() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Layout style={[styles.header, { backgroundColor: "#900" }]}>
      <Image
        source={{
          uri: "https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67",
        }}
        style={{ width: 160, height: 30 }}
      />
      <TouchableOpacity
        onPress={() => {
          router.push("/PokemonList");
        }}
      >
        <Icon fill="#fff" name="search" style={styles.icon}></Icon>
      </TouchableOpacity>
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
