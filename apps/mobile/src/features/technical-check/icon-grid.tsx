import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Icon } from "@/components/icon";
import { iconShapes, type IconName } from "@/components/icons/icon-shapes";
import { useTheme } from "@/lib/theme/theme-provider";

export function IconGrid() {
  const { colors } = useTheme();
  const names = Object.keys(iconShapes) as IconName[];
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
      {names.map((name) => (
        <View
          key={name}
          style={{
            width: 104,
            minHeight: 76,
            padding: 8,
            gap: 6,
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.rule,
            borderRadius: 6,
            backgroundColor: colors.card,
          }}
        >
          <View style={{ height: 28, justifyContent: "center" }}>
            <Icon name={name} color={colors.ink} size={24} />
          </View>
          <AppText variant="micro" tone="ink2">
            {name}
          </AppText>
        </View>
      ))}
    </View>
  );
}
