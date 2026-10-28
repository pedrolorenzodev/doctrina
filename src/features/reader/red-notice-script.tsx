import { redNoticeInitScript } from "@/lib/red-notice";

export function RedNoticeScript() {
  return <script dangerouslySetInnerHTML={{ __html: redNoticeInitScript }} />;
}
