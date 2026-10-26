import { useCallback, useState } from "react";

type UndoState = { message: string; restore: () => void; token: number; open: boolean };

export function useUndo() {
  const [undo, setUndo] = useState<UndoState | null>(null);
  const show = useCallback(
    (message: string, restore: () => void) =>
      setUndo((previous) => ({ message, restore, token: (previous?.token ?? 0) + 1, open: true })),
    [],
  );
  const expire = useCallback(() => setUndo((previous) => (previous ? { ...previous, open: false } : previous)), []);
  return { undo, show, expire };
}
