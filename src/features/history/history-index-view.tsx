import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getHistoryIndex, type HistoryIndexKind } from "@/content/get-history-indexes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { HistoryIndexList } from "@/features/history/history-index-list";
import { currentLocale } from "@/lib/current-locale";

const treeKey = {
  fathers: "fathers",
  councils: "councils",
  currents: "heresies",
  divisions: "divisions",
  reformation: "reformation",
} as const;

export async function HistoryIndexView({ kind }: { kind: HistoryIndexKind }) {
  const locale = await currentLocale();
  const text = getUiText(locale);
  const title = text.shell.tree[treeKey[kind]];
  const index = getHistoryIndex(kind, locale);
  return (
    <PageMain>
      <Breadcrumbs label={text.shell.breadcrumb} trail={[{ label: text.shell.tree.history }]} current={title} />
      <PageHeader id="top" className="mt-10" title={title} lede={index.intro} />
      <HistoryIndexList
        groups={index.groups}
        filter={index.filterable ? { label: text.historyIndex.filter, none: text.historyIndex.none } : null}
      />
    </PageMain>
  );
}
