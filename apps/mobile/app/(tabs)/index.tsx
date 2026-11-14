import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { defaultAppText } from "@/lib/app-text";

export default function FirstTab() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <AppText variant="display">{defaultAppText.firstTab}</AppText>
      <Link href="/stack-screen">
        <AppText variant="ui2xs" tone="accent">
          {defaultAppText.openStack}
        </AppText>
      </Link>
      {__DEV__ ? (
        <Link href="/dev/check">
          <AppText variant="ui2xs" tone="accent">
            {defaultAppText.openCheck}
          </AppText>
        </Link>
      ) : null}
    </View>
  );
}
