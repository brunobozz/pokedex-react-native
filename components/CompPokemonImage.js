import { Dimensions, Image, StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components/ui";
import { useTheme } from "@ui-kitten/components";

export default function CompPokemonImage(props) {
  const win = Dimensions.get("window");

  const theme = useTheme();

  if (!Number.isInteger(props.id) || props.pokeId < 0) {
    throw new Error("ID inválido");
  }
  const strId = String(props.id);
  const paddedId = strId.padStart(3, "0");

  const imgUrl =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
    paddedId +
    ".png";

  return (
    <Layout style={{ backgroundColor: theme["type-" + props.type] }}>
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
