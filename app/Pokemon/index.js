import * as eva from "@eva-design/eva";
import { ApplicationProvider, Text } from "@ui-kitten/components";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { StatusBar } from "react-native";

export default function Pokemon() {
  const route = useRoute();
  const { id } = route.params;

  if (id) {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#900"
          translucent={false}
        />
        <ApplicationProvider {...eva} theme={eva.light}>
          <Text category="h1">Pokemon Page ID: {id}</Text>
        </ApplicationProvider>
      </>
    );
  }
}
