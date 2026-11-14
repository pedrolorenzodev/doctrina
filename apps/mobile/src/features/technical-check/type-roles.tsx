import { View } from "react-native";
import type { TypeRole } from "@doctrina/core/tokens";
import { AppText } from "@/components/app-text";
import { checkText, type CheckText } from "@/features/technical-check/check-text";
import type { Locale } from "@doctrina/core/locale";

const sampleRoles: readonly TypeRole[] = [
  "display",
  "h2",
  "lede",
  "prose",
  "quote",
  "verse",
  "uiBase",
  "label",
  "wordOriginal",
];

function sampleFor(role: TypeRole, text: CheckText) {
  if (role === "wordOriginal") return text.greek;
  return role === "prose" || role === "lede" ? text.sampleLong : text.sample;
}

export function TypeRoles({ locale }: { locale: Locale }) {
  const text = checkText[locale];
  return (
    <View style={{ gap: 16 }}>
      {sampleRoles.map((role) => (
        <View key={role} style={{ gap: 4 }}>
          <AppText variant="micro" tone="ink3">
            {role}
          </AppText>
          <AppText variant={role}>{sampleFor(role, text)}</AppText>
        </View>
      ))}
    </View>
  );
}
