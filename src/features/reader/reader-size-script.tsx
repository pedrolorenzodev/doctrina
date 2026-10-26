import { readerSizeInitScript } from "@/lib/reader-size";

export function ReaderSizeScript() {
  return <script dangerouslySetInnerHTML={{ __html: readerSizeInitScript }} />;
}
