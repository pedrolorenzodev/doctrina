export function GroupHeading({ children, as: Level = "h3" }: { children: string; as?: "h2" | "h3" }) {
  return (
    <Level className="mt-7.5 mb-1 leading-group text-ui-xs font-medium text-ink-3 opsz-24 first-of-type:mt-0">
      {children}
    </Level>
  );
}
