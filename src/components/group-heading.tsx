export function GroupHeading({ children }: { children: string }) {
  return (
    <h3 className="mt-7.5 mb-1 leading-group text-ui-xs font-medium text-ink-3 opsz-24 first-of-type:mt-0">
      {children}
    </h3>
  );
}
