import type { es } from "@/content/ui-text/es";

type Widen<T> = { [K in keyof T]: T[K] extends string ? string : Widen<T[K]> };

export type UiText = Widen<typeof es>;
