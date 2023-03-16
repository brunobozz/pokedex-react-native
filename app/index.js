import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Image } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  const imgUrl =
    "https://i.pinimg.com/originals/05/8c/c1/058cc1913cf7d2bd93d6153ad22205f5.png";

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={{ uri: imgUrl }} style={{ width: 200, height: 200 }} />
      <Text category="h1">Pokedex</Text>
      <Button
        style={{ marginTop: 20 }}
        onPress={() => {
          router.push("/PokemonList");
        }}
      >
        {" "}
        Pokemon List
      </Button>
      <Button
        style={{ marginTop: 20 }}
        onPress={() => {
          router.push("/Pokemon?id=1");
        }}
      >
        {" "}
        Pokemon Page
      </Button>
    </Layout>
  );
}
