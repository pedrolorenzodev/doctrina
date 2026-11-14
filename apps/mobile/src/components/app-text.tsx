import { Text, type TextProps } from "react-native";
import type { ColorName, TypeRole } from "@doctrina/core/tokens";
import { fontFaceName } from "@/lib/theme/font-face";
import { useTheme } from "@/lib/theme/theme-provider";

type AppTextProps = TextProps & {
  variant: TypeRole;
  tone?: ColorName;
};

export function AppText({ variant, tone = "ink", style, ...rest }: AppTextProps) {
  const { colors, type } = useTheme();
  const spec = type[variant];
  return (
    <Text
      {...rest}
      style={[
        {
          color: colors[tone],
          fontFamily: fontFaceName(spec.fontFamily, spec.fontWeight, spec.fontStyle === "italic"),
          fontSize: spec.fontSize,
          lineHeight: spec.lineHeight,
          letterSpacing: spec.letterSpacing,
        },
        style,
      ]}
    />
  );
}
