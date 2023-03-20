import { Divider, Layout, List, ListItem, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import CompCircleType from "./CompCircleType";

export default function CompPokemonList(props) {
  const router = useRouter();

  return (
    <List
      data={props.list}
      ItemSeparatorComponent={Divider}
      renderItem={({ item }) => (
        <ListItem
          key={item.id}
          style={styles.listItem}
          onPress={() => {
            router.push("/Pokemon?id=" + item.id);
          }}
        >
          <Text
            style={{ textTransform: "capitalize", fontSize: 16 }}
          >{`${item.id} - ${item.name}`}</Text>

          <Layout style={styles.types}>
            {item.pokemon_v2_pokemontypes.map((type) => (
              <Layout style={styles.circle}>
                <CompCircleType
                  type={type.pokemon_v2_type.name}
                ></CompCircleType>
              </Layout>
            ))}
          </Layout>
        </ListItem>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  types: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "transparent",
    marginLeft: 5,
  },
});
