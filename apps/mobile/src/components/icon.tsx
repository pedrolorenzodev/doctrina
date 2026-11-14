import Svg, { Circle, Path, Rect } from "react-native-svg";
import type { IconName } from "@/components/icons/icon-shapes";
import { iconShapes } from "@/components/icons/icon-shapes";
import type { IconShape, IconSpec } from "@/components/icons/icon-spec";

type IconProps = {
  name: IconName;
  color: string;
  size?: number;
  strokeWidth?: number;
};

function Shape({
  shape,
  spec,
  color,
  strokeWidth,
}: {
  shape: IconShape;
  spec: IconSpec;
  color: string;
  strokeWidth: number;
}) {
  const paint =
    spec.mode === "fill"
      ? { fill: color }
      : { fill: "none", stroke: color, strokeWidth, strokeLinecap: spec.linecap, strokeLinejoin: spec.linejoin };
  if (shape.tag === "circle") return <Circle cx={shape.cx} cy={shape.cy} r={shape.r} {...paint} />;
  if (shape.tag === "rect") {
    return <Rect x={shape.x} y={shape.y} width={shape.width} height={shape.height} rx={shape.rx} {...paint} />;
  }
  return <Path d={shape.d} {...paint} strokeLinecap={shape.linecap ?? spec.linecap} />;
}

export function Icon({ name, color, size, strokeWidth }: IconProps) {
  const spec: IconSpec = iconShapes[name];
  const [, , width = 0, height = 0] = spec.viewBox.split(" ").map(Number);
  const scale = size ? size / Math.max(width, height) : 1;
  return (
    <Svg width={width * scale} height={height * scale} viewBox={spec.viewBox}>
      {spec.shapes.map((shape, index) => (
        <Shape key={index} shape={shape} spec={spec} color={color} strokeWidth={strokeWidth ?? spec.strokeWidth ?? 0} />
      ))}
    </Svg>
  );
}
