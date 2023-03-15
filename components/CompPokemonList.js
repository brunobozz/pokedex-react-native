import { Divider, List, ListItem, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import { uppercase } from "graphql-request/build/esm/helpers";

export default function CompPokemonList(props) {
  const router = useRouter();

  return (
    <List
      data={props.list}
      ItemSeparatorComponent={Divider}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => {
            router.push("/Pokemon?id=" + item.id);
          }}
        >
          <Text
            style={{ textTransform: "capitalize", fontSize: 16 }}
          >{`${item.id} - ${item.name}`}</Text>
        </ListItem>
      )}
    />
  );
}
