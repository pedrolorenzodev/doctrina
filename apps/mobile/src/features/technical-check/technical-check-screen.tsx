import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { defaultLocale, locales, type Locale } from "@doctrina/core/locale";
import { AppText } from "@/components/app-text";
import { Wall } from "@/components/wall";
import { CheckSection } from "@/features/technical-check/check-section";
import { checkText } from "@/features/technical-check/check-text";
import { ColorSwatches } from "@/features/technical-check/color-swatches";
import { FontProbe } from "@/features/technical-check/font-probe";
import { IconGrid } from "@/features/technical-check/icon-grid";
import { SegmentedChoice } from "@/features/technical-check/segmented-choice";
import { TypeRoles } from "@/features/technical-check/type-roles";
import type { ThemeMode } from "@/lib/theme/theme-mode";
import { useTheme } from "@/lib/theme/theme-provider";

export function TechnicalCheckScreen() {
  const { colors, mode, setMode } = useTheme();
  const insets = useSafeAreaInsets();
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const text = checkText[locale];

  const modeOptions: readonly { value: ThemeMode; label: string }[] = [
    { value: "system", label: text.modeSystem },
    { value: "light", label: text.modeLight },
    { value: "dark", label: text.modeDark },
  ];
  const localeOptions = locales.map((value) => ({ value, label: value.toUpperCase() }));

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <Wall />
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 16,
          paddingBottom: insets.bottom + 48,
          paddingHorizontal: 20,
          gap: 24,
        }}
      >
        <AppText variant="display">{text.title}</AppText>
        <View style={{ gap: 12 }}>
          <AppText variant="label" tone="ink3">
            {text.scheme}
          </AppText>
          <SegmentedChoice options={modeOptions} value={mode} onChange={setMode} />
          <AppText variant="label" tone="ink3">
            {text.language}
          </AppText>
          <SegmentedChoice options={localeOptions} value={locale} onChange={setLocale} />
        </View>
        <CheckSection title={text.colors}>
          <ColorSwatches />
        </CheckSection>
        <CheckSection title={text.typeRoles}>
          <TypeRoles locale={locale} />
        </CheckSection>
        <CheckSection title={text.opticalSizes} note={text.opticalSizesNote}>
          <FontProbe locale={locale} />
        </CheckSection>
        <CheckSection title={text.icons}>
          <IconGrid />
        </CheckSection>
        <CheckSection title={text.texture} note={text.textureNote}>
          <View
            style={{
              height: 120,
              overflow: "hidden",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: colors.rule,
              backgroundColor: colors.panel,
            }}
          >
            <Wall />
          </View>
        </CheckSection>
      </ScrollView>
    </View>
  );
}
