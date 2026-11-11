import type { Locale } from "@/lib/locale";

type ErrorText = {
  title: string;
  body: string;
  retry: string;
  home: string;
};

export const errorText: Record<Locale, ErrorText> = {
  es: {
    title: "Algo salió mal",
    body: "No se pudo mostrar esta página. Si el problema continúa, vuelva al inicio.",
    retry: "Intentar de nuevo",
    home: "Ir al inicio",
  },
  en: {
    title: "Something went wrong",
    body: "This page couldn't be shown. If the problem continues, go back to the home page.",
    retry: "Try again",
    home: "Go to the home page",
  },
};
