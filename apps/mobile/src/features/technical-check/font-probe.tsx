import { Text, View } from "react-native";
import type { Locale } from "@doctrina/core/locale";
import { AppText } from "@/components/app-text";
import { checkText } from "@/features/technical-check/check-text";
import { fontFaceName } from "@/lib/theme/font-face";
import { useTheme } from "@/lib/theme/theme-provider";

const probeSize = 34;

export function FontProbe({ locale }: { locale: Locale }) {
  const { colors } = useTheme();
  const text = checkText[locale];
  const base = { color: colors.ink, fontSize: probeSize, lineHeight: probeSize * 1.2 };
  const rows = [
    { label: text.staticFace, style: { ...base, fontFamily: fontFaceName("head", 400, false) } },
    {
      label: text.variableLow,
      style: { ...base, fontFamily: "Newsreader16pt-Regular", fontVariationSettings: { opsz: 6 } },
    },
    {
      label: text.variableHigh,
      style: { ...base, fontFamily: "Newsreader16pt-Regular", fontVariationSettings: { opsz: 72 } },
    },
    {
      label: "Source Serif 4, opsz 8",
      style: { ...base, fontFamily: "SourceSerif4Roman-Regular", fontVariationSettings: { opsz: 8 } },
    },
    {
      label: "Source Serif 4, opsz 60",
      style: { ...base, fontFamily: "SourceSerif4Roman-Regular", fontVariationSettings: { opsz: 60 } },
    },
    {
      label: "Noto Serif Hebrew",
      text: text.hebrew,
      style: { ...base, fontFamily: fontFaceName("hebrew", 400, false), writingDirection: "rtl" },
    },
  ] as const;
  return (
    <View style={{ gap: 12 }}>
      {rows.map((row) => (
        <View key={row.label} style={{ gap: 2 }}>
          <AppText variant="micro" tone="ink3">
            {row.label}
          </AppText>
          <Text style={row.style}>{"text" in row ? row.text : text.sample}</Text>
        </View>
      ))}
    </View>
  );
}
