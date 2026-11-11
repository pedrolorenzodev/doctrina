export const themeStorageKey = "doctrina-theme";

export const themeInitScript = `(function(){var t;try{t=localStorage.getItem("${themeStorageKey}")}catch(e){}if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)})()`;

export type Theme = "light" | "dark";

export const themeSweepMs = 650;

export const themeSweepEasing = "cubic-bezier(0.65, 0, 0.35, 1)";

export function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    return;
  }
}
