import type { ComponentProps } from "react";

type IconButtonProps = Omit<ComponentProps<"button">, "className" | "type"> & {
  size?: "sm" | "md";
  tone?: "secondary" | "primary";
};

const sizeClassName = { sm: "size-9", md: "size-10" };
const toneClassName = { secondary: "text-ink-2", primary: "text-ink" };

export function IconButton({ size = "sm", tone = "secondary", ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`${sizeClassName[size]} ${toneClassName[tone]} grid cursor-pointer place-items-center rounded-6 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:size-11`}
      {...rest}
    />
  );
}
