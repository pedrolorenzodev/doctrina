import { fontFaces, type, typeCompact } from "@doctrina/core/tokens";
import { fontFaceName } from "@/lib/theme/font-face";

describe("embedded fonts", () => {
  it("covers every type role of both scales", () => {
    for (const scale of [type, typeCompact]) {
      for (const [role, spec] of Object.entries(scale)) {
        const style = "fontStyle" in spec && spec.fontStyle === "italic";
        expect(() => fontFaceName(spec.fontFamily, spec.fontWeight, style)).not.toThrow();
        expect(role).toBeTruthy();
      }
    }
  });

  it("names every face the roles use", () => {
    expect(Object.keys(fontFaces)).toHaveLength(10);
  });

  it("fails loudly for a face that is not embedded", () => {
    expect(() => fontFaceName("ui", 700, false)).toThrow(/ui-700/);
  });
});
