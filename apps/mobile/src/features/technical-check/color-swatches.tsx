import { View } from "react-native";
import type { ColorName } from "@doctrina/core/tokens";
import { AppText } from "@/components/app-text";
import { useTheme } from "@/lib/theme/theme-provider";

export function ColorSwatches() {
  const { colors } = useTheme();
  const names = Object.keys(colors) as ColorName[];
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
      {names.map((name) => (
        <View key={name} style={{ width: 104, gap: 4 }}>
          <View
            style={{
              height: 44,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: colors.rule,
              backgroundColor: colors[name],
            }}
          />
          <AppText variant="micro" tone="ink2">
            {name}
          </AppText>
        </View>
      ))}
    </View>
  );
}
