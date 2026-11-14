import Storage from "expo-sqlite/kv-store";
import type { ThemeStorage } from "@/lib/theme/theme-mode";

export const kvThemeStorage: ThemeStorage = {
  read: (key) => Storage.getItemSync(key),
  write: (key, value) => Storage.setItemSync(key, value),
  remove: (key) => {
    Storage.removeItemSync(key);
  },
};
