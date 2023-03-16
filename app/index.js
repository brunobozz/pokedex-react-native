import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Image } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "react-native";

export default function Page() {
  const router = useRouter();
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png";

  return (
    <Layout
      style={{
        backgroundColor: "#b00",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#b00"
        translucent={false}
      />
      <Image source={{ uri: imgUrl }} style={{ width: 200, height: 200 }} />
      <Button
        style={{ marginTop: 20 }}
        status="danger"
        onPress={() => {
          router.push("/PokemonList");
        }}
      >
        {" "}
        Pokemon List
      </Button>
    </Layout>
  );
}
