import { Divider, List, ListItem, Text } from "@ui-kitten/components";
import { uppercase } from "graphql-request/build/esm/helpers";

export default function CompPokemonList(props) {
  return (
    <List
      data={props.list}
      ItemSeparatorComponent={Divider}
      renderItem={({ item }) => (
        <ListItem>
          <Text
            style={{ textTransform: "capitalize", fontSize: 16 }}
          >{`${item.id} - ${item.name}`}</Text>
        </ListItem>
      )}
    />
  );
}
