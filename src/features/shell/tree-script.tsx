import { treeCarryApplyScript } from "@/lib/tree-carry";
import { treeInitScript } from "@/lib/tree-visibility";

export function TreeScript() {
  return <script dangerouslySetInnerHTML={{ __html: treeInitScript }} />;
}

export function TreeCarryScript() {
  return <script dangerouslySetInnerHTML={{ __html: treeCarryApplyScript }} />;
}
