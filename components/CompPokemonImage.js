import { Dimensions, Image, StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components/ui";
import { ViewPager, useTheme } from "@ui-kitten/components";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function CompPokemonImage(props) {
  const router = useRouter();
  const win = Dimensions.get("window");
  const [type, setType] = useState("normal");
  const theme = useTheme();
  const [strId, setStrId] = useState(String(props.pokemon.id));
  const [selectedIndex, setSelectedIndex] = useState(1);
  const paddedId = strId.padStart(3, "0");
  const [loading, setLoading] = useState(true);
  const blankUri =
    "https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png";
  const imgUrl =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
    paddedId +
    ".png";

  useEffect(() => {
    setType(props.pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
    setStrId(String(props.pokemon.id));
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [props.pokemon]);

  useEffect(() => {
    setSelectedIndex(1);
  }, [strId]);

  if (!Number.isInteger(props.pokemon.id) || props.pokemon.id < 0) {
    throw new Error("ID inválido");
  }

  const handleSelect = (index) => {
    if (index != 1) {
      setLoading(true);
      setSelectedIndex(index);
      if (index === 2) {
        setSelectedIndex(1);
        const nextId = props.pokemon.id + 1;
        router.push({
          pathname: "/?id=" + nextId,
          key: Math.random() * 10000,
        });
      } else if (index === 0) {
        setSelectedIndex(1);
        if (props.pokemon.id > 1) {
          const nextId = props.pokemon.id - 1;
          router.push({
            pathname: "/?id=" + nextId,
            key: Math.random() * 10000,
          });
        }
      }
    }
  };

  return (
    <Layout style={{ backgroundColor: theme["type-" + type] }}>
      {loading && (
        <Layout
          pointerEvents="none"
          style={[styles.loading, { backgroundColor: theme["type-" + type] }]}
        ></Layout>
      )}

      <ViewPager onSelect={handleSelect} selectedIndex={selectedIndex}>
        <Image source={{ uri: blankUri }} style={styles.image} />
        <Image
          source={{ uri: imgUrl }}
          style={[styles.image, { height: win.width }]}
        />
        <Image source={{ uri: blankUri }} style={styles.image} />
      </ViewPager>
    </Layout>
  );
}

const styles = StyleSheet.create({
  loading: {
    width: "100%",
    height: Dimensions.get("window").width,
    position: "absolute",
    zIndex: 10,
  },
  pager: {
    width: "100%",
    height: Dimensions.get("window").width,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").width,
    resizeMode: "contain",
  },
});
