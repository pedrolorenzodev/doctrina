import { Pressable, View } from "react-native";
import { AppText } from "@/components/app-text";
import { useTheme } from "@/lib/theme/theme-provider";

type Option<Value extends string> = { value: Value; label: string };

type SegmentedChoiceProps<Value extends string> = {
  options: readonly Option<Value>[];
  value: Value;
  onChange: (value: Value) => void;
};

export function SegmentedChoice<Value extends string>({ options, value, onChange }: SegmentedChoiceProps<Value>) {
  const { colors } = useTheme();
  return (
    <View style={{ flexDirection: "row", gap: 6 }}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="button"
            accessibilityState={{ selected }}
            onPress={() => onChange(option.value)}
            style={{
              minHeight: 44,
              paddingHorizontal: 14,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: selected ? colors.ink : colors.rule2,
              backgroundColor: selected ? colors.ink : "transparent",
            }}
          >
            <AppText variant="btn" tone={selected ? "bg" : "ink"}>
              {option.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}
