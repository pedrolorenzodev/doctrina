export const easeReveal = "cubic-bezier(0.22, 1, 0.36, 1)";
const easeMove = "cubic-bezier(0.4, 0, 0.2, 1)";
const animationId = "tree";

const enter = { fadeMs: 200, stepMs: 20, heightMs: 220, maxSteps: 8 };
const exit = { fadeMs: 120, heightMs: 160 };

export function prefersReducedMotion(): boolean {
  return matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function cancelTreeAnimations(list: HTMLElement) {
  for (const animation of list.getAnimations({ subtree: true })) {
    if (animation.id === animationId) animation.cancel();
  }
}

function settleDescendants(list: HTMLElement) {
  for (const branch of list.querySelectorAll<HTMLElement>("ul[data-branch]")) {
    branch.hidden = branch.dataset.open !== "true";
    branch.style.overflow = "";
  }
}

export function setBranch(list: HTMLElement, open: boolean, animate: boolean) {
  const wasHidden = list.hidden;
  const fromHeight = wasHidden ? 0 : list.getBoundingClientRect().height;
  cancelTreeAnimations(list);
  settleDescendants(list);
  list.dataset.open = String(open);
  if (!animate || prefersReducedMotion()) {
    list.hidden = !open;
    list.style.overflow = "";
    return;
  }
  if (open) {
    list.hidden = false;
    list.style.overflow = "hidden";
    if (wasHidden) {
      [...list.children].forEach((item, index) => {
        item.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: enter.fadeMs,
          delay: Math.min(index, enter.maxSteps) * enter.stepMs,
          easing: "ease-out",
          fill: "backwards",
          id: animationId,
        });
      });
    }
    list
      .animate([{ height: `${fromHeight}px` }, { height: `${list.scrollHeight}px` }], {
        duration: enter.heightMs,
        easing: easeReveal,
        id: animationId,
      })
      .finished.then(
        () => {
          list.style.overflow = "";
        },
        () => undefined,
      );
    return;
  }
  if (wasHidden) return;
  list.style.overflow = "hidden";
  for (const item of list.children) {
    item.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: exit.fadeMs,
      easing: "ease-in",
      fill: "forwards",
      id: animationId,
    });
  }
  list
    .animate([{ height: `${fromHeight}px` }, { height: "0px" }], {
      duration: exit.heightMs,
      easing: easeMove,
      fill: "forwards",
      id: animationId,
    })
    .finished.then(
      () => {
        if (list.dataset.open !== "false") return;
        list.hidden = true;
        list.style.overflow = "";
        cancelTreeAnimations(list);
      },
      () => undefined,
    );
}
