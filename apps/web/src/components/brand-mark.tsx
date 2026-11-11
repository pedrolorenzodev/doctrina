export const brandMarkPath =
  "M15.54 16.6Q15.54 16.6 15.54 16.3Q15.54 16 15.55 15.68Q15.56 15.37 15.57 15.35L22.56 8L23.62 8.85Q23.62 8.85 23.3 9.57Q22.97 10.29 22.48 11.36Q21.98 12.43 21.5 13.49Q21.01 14.55 20.68 15.26Q20.36 15.98 20.38 15.97L23.64 23.15L22.56 24ZM8.36 16.6Q8.36 16.6 8.36 16.3Q8.36 16 8.37 15.68Q8.38 15.37 8.39 15.35L15.38 8L16.44 8.85Q16.44 8.85 16.12 9.57Q15.79 10.29 15.3 11.36Q14.8 12.43 14.32 13.49Q13.83 14.55 13.5 15.26Q13.18 15.98 13.2 15.97L16.46 23.15L15.38 24Z";

export const brandMarkBox = { x: 8.36, y: 8, width: 15.28, height: 16 };

export function BrandMark() {
  const { x, y, width, height } = brandMarkBox;
  return (
    <svg
      aria-hidden="true"
      viewBox={`${x} ${y} ${width} ${height}`}
      data-brand-mark=""
      className="inline-block h-cap w-auto flex-none align-baseline"
      fill="currentColor"
    >
      <path d={brandMarkPath} />
    </svg>
  );
}
