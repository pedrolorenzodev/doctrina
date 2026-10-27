export type PanelTranslation = {
  id: string;
  name: string;
  language: string;
  lang: string;
  text: string;
};

export function PanelTranslations({ items }: { items: PanelTranslation[] }) {
  return (
    <ul className="m-0 list-none border-b border-rule p-0">
      {items.map((item) => (
        <li key={item.id} className="border-t border-rule pt-4 pb-4.5">
          <p className="m-0 mb-1.5 text-ui-sm font-medium text-ink">
            {item.name}
            <span className="ml-2.5 font-normal text-ink-3">{item.language}</span>
          </p>
          <p lang={item.lang} className="m-0 font-body text-panel-translation font-light text-ink-2">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
