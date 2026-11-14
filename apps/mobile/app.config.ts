import type { ExpoConfig } from "expo/config";
import { colors } from "@doctrina/core/tokens";

const universalLinksEnabled = false;
const associatedDomain = "doctrina.elpepo.dev";
const bundleIdentifier = "com.example.doctrina";

const fonts = [
  "Newsreader-Light",
  "Newsreader-LightItalic",
  "Newsreader-Regular",
  "SourceSerif4-Light",
  "SourceSerif4-Regular",
  "SourceSerif4-Medium",
  "WorkSans-Regular",
  "WorkSans-Medium",
  "GentiumBookPlus",
  "NotoSerifHebrew-Regular",
].map((name) => `./assets/fonts/${name}.ttf`);

const probeFonts = ["Newsreader16pt-Regular", "SourceSerif4Roman-Regular"].map(
  (name) => `./assets/fonts/probe/${name}.ttf`,
);

const config: ExpoConfig = {
  name: "Doctrina",
  slug: "doctrina",
  version: "0.1.0",
  scheme: "doctrina",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  platforms: ["ios", "android"],
  icon: "./assets/images/icon.png",
  runtimeVersion: { policy: "fingerprint" },
  ios: {
    bundleIdentifier,
    supportsTablet: true,
    ...(universalLinksEnabled ? { associatedDomains: [`applinks:${associatedDomain}`] } : {}),
  },
  android: {
    package: bundleIdentifier,
    adaptiveIcon: {
      backgroundColor: colors.light.bg,
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },
    predictiveBackGestureEnabled: false,
    ...(universalLinksEnabled
      ? {
          intentFilters: [
            {
              action: "VIEW",
              autoVerify: true,
              data: [{ scheme: "https", host: associatedDomain }],
              category: ["BROWSABLE", "DEFAULT"],
            },
          ],
        }
      : {}),
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      { backgroundColor: colors.light.bg, image: "./assets/images/splash-icon.png", imageWidth: 76 },
    ],
    ["expo-font", { fonts: [...fonts, ...probeFonts] }],
    "expo-sqlite",
  ],
  experiments: { typedRoutes: true, reactCompiler: true },
};

export default config;
