import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { defaultAppText } from "@/lib/app-text";

export default function StackScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AppText variant="display">{defaultAppText.stackScreen}</AppText>
    </View>
  );
}
