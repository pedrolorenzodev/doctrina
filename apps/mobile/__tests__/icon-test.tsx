import { render } from "@testing-library/react-native";
import { Icon } from "@/components/icon";
import { iconShapes, type IconName } from "@/components/icons/icon-shapes";

describe("Icon", () => {
  it("renders every catalogue icon", async () => {
    const names = Object.keys(iconShapes) as IconName[];
    expect(names).toHaveLength(27);
    for (const name of names) {
      await expect(render(<Icon name={name} color="currentColor" size={24} />)).resolves.toBeDefined();
    }
  });
});
