import React from "react";
import { Image } from "react-native";

export default function CompCircleType(props) {
  const getImage = () => {
    switch (props.type) {
      case "bug":
        return require("../assets/icons/type/bug.png");
      case "dark":
        return require("../assets/icons/type/dark.png");
      case "dragon":
        return require("../assets/icons/type/dragon.png");
      case "electric":
        return require("../assets/icons/type/electric.png");
      case "fairy":
        return require("../assets/icons/type/fairy.png");
      case "fighting":
        return require("../assets/icons/type/fighting.png");
      case "fire":
        return require("../assets/icons/type/fire.png");
      case "flying":
        return require("../assets/icons/type/flying.png");
      case "ghost":
        return require("../assets/icons/type/ghost.png");
      case "grass":
        return require("../assets/icons/type/grass.png");
      case "ground":
        return require("../assets/icons/type/ground.png");
      case "ice":
        return require("../assets/icons/type/ice.png");
      case "normal":
        return require("../assets/icons/type/normal.png");
      case "poison":
        return require("../assets/icons/type/poison.png");
      case "psychic":
        return require("../assets/icons/type/psychic.png");
      case "rock":
        return require("../assets/icons/type/rock.png");
      case "shadow":
        return require("../assets/icons/type/shadow.png");
      case "steel":
        return require("../assets/icons/type/steel.png");
      case "water":
        return require("../assets/icons/type/water.png");
      default:
        return require("../assets/icons/type/default.png");
    }
  };

  return <Image source={getImage()} style={{ width: 20, height: 20 }}></Image>;
}
