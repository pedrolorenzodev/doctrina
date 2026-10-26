import { useEffect, useLayoutEffect, useState, type RefObject } from "react";

const estimatedGlyph = 7.3;

export function useLabelMeasure(host: RefObject<HTMLElement | null>) {
  const [measure, setMeasure] = useState<(label: string, size: number, weight: number) => number>(
    () => (label: string) => label.length * estimatedGlyph,
  );
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const canvas = document.createElement("canvas").getContext("2d");
    if (!canvas) return;
    const install = () => {
      const family = getComputedStyle(element).fontFamily;
      setMeasure(() => (label: string, size: number, weight: number) => {
        canvas.font = `${weight} ${size}px ${family}`;
        return canvas.measureText(label).width;
      });
    };
    install();
    void document.fonts.ready.then(install);
  }, [host]);
  return measure;
}

export function useBoxWidth(host: RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const element = host.current;
    if (!element) return;
    const read = () => setWidth(element.clientWidth);
    read();
    const observer = new ResizeObserver(read);
    observer.observe(element);
    return () => observer.disconnect();
  }, [host]);
  return width;
}

export function useFontsReady(): boolean {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let live = true;
    void document.fonts.ready.then(() => requestAnimationFrame(() => live && setReady(true)));
    return () => {
      live = false;
    };
  }, []);
  return ready;
}
