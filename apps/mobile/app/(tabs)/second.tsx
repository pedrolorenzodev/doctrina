import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { defaultAppText } from "@/lib/app-text";

export default function SecondTab() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AppText variant="display">{defaultAppText.secondTab}</AppText>
    </View>
  );
}
