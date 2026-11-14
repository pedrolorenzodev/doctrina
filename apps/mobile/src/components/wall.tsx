import { useState } from "react";
import { Image, View, type LayoutChangeEvent } from "react-native";
import { texture } from "@doctrina/core/tokens";
import { useTheme } from "@/lib/theme/theme-provider";

const tiles = {
  light: require("@/assets/wall/wall-light.png"),
  dark: require("@/assets/wall/wall-dark.png"),
};

export function Wall() {
  const { scheme } = useTheme();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const tile = texture[scheme].tilePx;
  const columns = Math.ceil(size.width / tile);
  const rows = Math.ceil(size.height / tile);

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { width, height } = nativeEvent.layout;
    setSize((current) => (current.width === width && current.height === height ? current : { width, height }));
  };

  return (
    <View
      pointerEvents="none"
      onLayout={onLayout}
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: "hidden" }}
    >
      {Array.from({ length: columns * rows }, (_, index) => (
        <Image
          key={index}
          source={tiles[scheme]}
          style={{
            position: "absolute",
            width: tile,
            height: tile,
            left: (index % columns) * tile,
            top: Math.floor(index / columns) * tile,
          }}
        />
      ))}
    </View>
  );
}
