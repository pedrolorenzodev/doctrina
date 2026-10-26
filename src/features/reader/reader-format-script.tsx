import { readerFormatInitScript } from "@/lib/reader-format";

export function ReaderFormatScript() {
  return <script dangerouslySetInnerHTML={{ __html: readerFormatInitScript }} />;
}
