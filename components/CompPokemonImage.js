import { Dimensions, Image, StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components/ui";
import { useTheme } from "@ui-kitten/components";
import { useEffect, useState } from "react";

export default function CompPokemonImage(props) {
  const win = Dimensions.get("window");
  const [type, setType] = useState("normal");

  useEffect(() => {
    setType(props.pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
  }, []);

  const theme = useTheme();

  if (!Number.isInteger(props.pokemon.id) || props.pokemon.id < 0) {
    throw new Error("ID inválido");
  }
  const strId = String(props.pokemon.id);
  const paddedId = strId.padStart(3, "0");

  const imgUrl =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
    paddedId +
    ".png";

  return (
    <Layout style={{ backgroundColor: theme["type-" + type] }}>
      <Image
        source={{ uri: imgUrl }}
        style={[styles.image, { height: win.width }]}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
});
