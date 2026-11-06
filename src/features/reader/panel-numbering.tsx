import { ActionButton } from "@/components/ui/action";

type PanelNumberingProps = {
  message: string;
  action: string;
  onShowDefault: () => void;
};

export function PanelNumbering({ message, action, onShowDefault }: PanelNumberingProps) {
  return (
    <div data-numbering-note="" className="flex flex-col items-start gap-3">
      <p className="m-0 text-ui-sm leading-snug text-ink-2">{message}</p>
      <ActionButton onClick={onShowDefault}>{action}</ActionButton>
    </div>
  );
}
