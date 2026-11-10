// guard: the passage-pending variant in globals.css and the e2e spec read data-passage-pending
const pendingKey = "passagePending";

const safetyMs = 6000;

export function passagePendingScript(ids: readonly string[]): string {
  const list = JSON.stringify(ids).replace(/</g, "\\u003c");
  return `(function(){var i=-1;try{i=${list}.indexOf(decodeURIComponent(location.hash.slice(1)))}catch(e){}if(i<1)return;var d=document.documentElement;d.dataset.${pendingKey}="";setTimeout(function(){delete d.dataset.${pendingKey}},${safetyMs})})();`;
}

export function settlePassagePending(): void {
  delete document.documentElement.dataset[pendingKey];
}
