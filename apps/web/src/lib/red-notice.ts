export const redNoticeStorageKey = "doctrina-red-notice";

export const redNoticeInitScript = `(function(){var c;try{c=localStorage.getItem("${redNoticeStorageKey}")}catch(e){}if(c==="closed")document.documentElement.dataset.redNotice="closed"})();`;

export function closeRedNotice(): void {
  document.documentElement.dataset.redNotice = "closed";
  try {
    localStorage.setItem(redNoticeStorageKey, "closed");
  } catch {
    return;
  }
}
