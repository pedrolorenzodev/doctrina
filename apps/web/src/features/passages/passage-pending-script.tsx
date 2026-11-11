import { passagePendingScript } from "@/features/passages/passage-pending";

export function PassagePendingScript({ ids }: { ids: readonly string[] }) {
  return <script dangerouslySetInnerHTML={{ __html: passagePendingScript(ids) }} />;
}
