import { Pressable, Text } from "react-native";
import { render, screen, userEvent } from "@testing-library/react-native";
import { colors } from "@doctrina/core/tokens";
import { ThemeProvider, useTheme } from "@/lib/theme/theme-provider";
import { themeStorageKey, type ThemeStorage } from "@/lib/theme/theme-mode";

function memoryStorage(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial));
  const storage: ThemeStorage = {
    read: (key) => data.get(key) ?? null,
    write: (key, value) => void data.set(key, value),
    remove: (key) => void data.delete(key),
  };
  return { data, storage };
}

function Probe() {
  const { mode, scheme, colors: active, setMode } = useTheme();
  return (
    <>
      <Text testID="state">{`${mode}:${scheme}:${active.bg}`}</Text>
      <Pressable testID="dark" onPress={() => setMode("dark")} />
      <Pressable testID="system" onPress={() => setMode("system")} />
    </>
  );
}

describe("ThemeProvider", () => {
  it("starts from the stored choice", async () => {
    const { storage } = memoryStorage({ [themeStorageKey]: "dark" });
    await render(
      <ThemeProvider storage={storage}>
        <Probe />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("state").props.children).toBe(`dark:dark:${colors.dark.bg}`);
  });

  it("stores a forced scheme and clears the key for system", async () => {
    const { storage, data } = memoryStorage();
    await render(
      <ThemeProvider storage={storage}>
        <Probe />
      </ThemeProvider>,
    );
    const user = userEvent.setup();
    await user.press(screen.getByTestId("dark"));
    expect(data.get(themeStorageKey)).toBe("dark");
    expect(screen.getByTestId("state").props.children).toBe(`dark:dark:${colors.dark.bg}`);
    await user.press(screen.getByTestId("system"));
    expect(data.has(themeStorageKey)).toBe(false);
    expect(screen.getByTestId("state").props.children.startsWith("system:")).toBe(true);
  });

  it("refuses to be used outside the provider", async () => {
    jest.spyOn(console, "error").mockImplementation(() => undefined);
    await expect(render(<Probe />)).rejects.toThrow(/ThemeProvider/);
  });
});
