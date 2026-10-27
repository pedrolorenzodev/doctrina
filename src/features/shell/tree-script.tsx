import { treeInitScript } from "@/lib/tree-visibility";

export function TreeScript() {
  return <script dangerouslySetInnerHTML={{ __html: treeInitScript }} />;
}
