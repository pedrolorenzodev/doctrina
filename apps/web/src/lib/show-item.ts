export const showItemEvent = "doctrina:show-item";

export function showItem(id: string) {
  window.dispatchEvent(new CustomEvent(showItemEvent, { detail: id }));
}
