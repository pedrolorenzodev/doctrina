import { prefersReducedMotion } from "@/lib/branch-motion";

const animationId = "menu";
const closedClip = "inset(0px -60px 100% -60px)";
const openClip = "inset(0px -60px -60px -60px)";
const easeSmooth = "cubic-bezier(0.32, 0.72, 0, 1)";
const almostOpenClip = "inset(0px -60px 0px -60px)";
const enter = { clipMs: 340, fadeMs: 260, stepMs: 24, maxSteps: 8 };
const exit = { clipMs: 220, fadeMs: 160 };

function cancelMenuAnimations(menu: HTMLElement) {
  for (const animation of menu.getAnimations({ subtree: true })) {
    if (animation.id === animationId) animation.cancel();
  }
}

export function revealMenu(menu: HTMLElement, open: boolean, done?: () => void) {
  const running = menu.getAnimations().some((animation) => animation.id === animationId);
  const from = running ? getComputedStyle(menu).clipPath : open ? closedClip : openClip;
  cancelMenuAnimations(menu);
  if (prefersReducedMotion()) {
    menu.hidden = !open;
    done?.();
    return;
  }
  const items = [...menu.querySelectorAll<HTMLElement>("[data-menu-item]")].slice(0, enter.maxSteps);
  if (open) {
    menu.hidden = false;
    menu.animate([{ clipPath: from }, { clipPath: almostOpenClip, offset: 0.9 }, { clipPath: openClip }], {
      duration: enter.clipMs,
      easing: easeSmooth,
      id: animationId,
    });
    items.forEach((item, index) => {
      item.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: enter.fadeMs,
        delay: index * enter.stepMs,
        easing: "ease-out",
        fill: "backwards",
        id: animationId,
      });
    });
    return;
  }
  for (const item of items) {
    item.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: exit.fadeMs,
      easing: "ease-in",
      fill: "forwards",
      id: animationId,
    });
  }
  menu
    .animate([{ clipPath: from }, { clipPath: closedClip }], {
      duration: exit.clipMs,
      easing: easeSmooth,
      fill: "forwards",
      id: animationId,
    })
    .finished.then(
      () => {
        menu.hidden = true;
        cancelMenuAnimations(menu);
        done?.();
      },
      () => undefined,
    );
}
