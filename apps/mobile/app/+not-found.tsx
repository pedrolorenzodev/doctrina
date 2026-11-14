import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { defaultAppText } from "@/lib/app-text";

export default function NotFound() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <AppText variant="h2">{defaultAppText.notFound}</AppText>
      <Link href="/">
        <AppText variant="ui2xs" tone="accent">
          {defaultAppText.firstTab}
        </AppText>
      </Link>
    </View>
  );
}
