import React from "react";
import { Input } from "@ui-kitten/components";
import { View } from "react-native";

export default function CompSearchForm(props) {
  const handleChange = (value) => {
    props.onSearch(value);
  };

  return (
    <View style={{ padding: 10, backgroundColor: "#900" }}>
      <Input
        size="large"
        style={{ borderRadius: 50, borderColor: "#900" }}
        placeholder="Search a Pokémon by Name"
        onChangeText={handleChange}
      ></Input>
    </View>
  );
}
