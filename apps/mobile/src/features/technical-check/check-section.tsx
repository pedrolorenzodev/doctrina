import type { ReactNode } from "react";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { useTheme } from "@/lib/theme/theme-provider";

type CheckSectionProps = {
  title: string;
  note?: string;
  children: ReactNode;
};

export function CheckSection({ title, note, children }: CheckSectionProps) {
  const { colors } = useTheme();
  return (
    <View style={{ gap: 12, paddingTop: 24, borderTopWidth: 1, borderTopColor: colors.rule }}>
      <View style={{ gap: 4 }}>
        <AppText variant="h3">{title}</AppText>
        {note ? (
          <AppText variant="meta" tone="ink3">
            {note}
          </AppText>
        ) : null}
      </View>
      {children}
    </View>
  );
}
