import { treeCarryInitScript } from "@/lib/tree-carry";
import { treeInitScript } from "@/lib/tree-visibility";

export function TreeScript() {
  return <script dangerouslySetInnerHTML={{ __html: treeInitScript + treeCarryInitScript }} />;
}
