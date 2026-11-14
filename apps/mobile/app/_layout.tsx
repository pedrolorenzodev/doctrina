import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { defaultAppText } from "@/lib/app-text";
import { loadEnv } from "@/lib/env";
import { kvThemeStorage } from "@/lib/theme/kv-theme-storage";
import { ThemeProvider, useTheme } from "@/lib/theme/theme-provider";

loadEnv();

function ThemedStack() {
  const { scheme, colors } = useTheme();
  return (
    <>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      <Stack screenOptions={{ contentStyle: { backgroundColor: colors.bg } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="stack-screen" options={{ title: defaultAppText.stackScreen }} />
        <Stack.Protected guard={__DEV__}>
          <Stack.Screen name="dev/check" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider storage={kvThemeStorage}>
          <ThemedStack />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
