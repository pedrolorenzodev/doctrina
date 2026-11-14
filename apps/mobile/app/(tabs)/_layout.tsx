import { Tabs } from "expo-router";
import { defaultAppText } from "@/lib/app-text";
import { useTheme } from "@/lib/theme/theme-provider";

export default function TabsLayout() {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.ink3,
        tabBarStyle: { backgroundColor: colors.panel, borderTopColor: colors.rule },
        sceneStyle: { backgroundColor: colors.bg },
      }}
    >
      <Tabs.Screen name="index" options={{ title: defaultAppText.firstTab }} />
      <Tabs.Screen name="second" options={{ title: defaultAppText.secondTab }} />
    </Tabs>
  );
}
