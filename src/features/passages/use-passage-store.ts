"use client";

import { useState } from "react";
import type { PassageCore } from "@/content/get-passages";
import type { ApologistLayer } from "@/content/model/page";

type Part = "core" | "apologists";
type Priority = "low" | "high";

export type PassageStore = {
  core: (index: number) => PassageCore | undefined;
  apologists: (index: number) => ApologistLayer | undefined;
  ensure: (index: number, withApologists: boolean) => Promise<boolean>;
  prefetch: (index: number, part: Part, priority?: Priority) => void;
};

function createPassageStore(dataBase: string, first: PassageCore, withLayer: boolean[]): PassageStore {
  const cores = new Map<number, PassageCore>([[0, first]]);
  const layers = new Map<number, ApologistLayer>();
  const inflight = new Map<string, Promise<boolean>>();

  const load = (index: number, part: Part, priority: Priority): Promise<boolean> => {
    if (part === "core" ? cores.has(index) : layers.has(index)) return Promise.resolve(true);
    if (part === "apologists" && !withLayer[index]) return Promise.resolve(false);
    const key = `${index}/${part}`;
    const pending = inflight.get(key);
    if (pending) return pending;
    const request = fetch(`${dataBase}/${index + 1}/${part}`, { priority })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error(String(response.status)))))
      .then((body) => {
        if (part === "core") cores.set(index, body as PassageCore);
        else layers.set(index, body as ApologistLayer);
        return true;
      })
      .catch(() => false)
      .finally(() => inflight.delete(key));
    inflight.set(key, request);
    return request;
  };

  return {
    core: (index) => cores.get(index),
    apologists: (index) => layers.get(index),
    prefetch: (index, part, priority = "low") => {
      if (index < 0 || index >= withLayer.length) return;
      void load(index, part, priority);
    },
    ensure: async (index, withApologists) => {
      const parts = [load(index, "core", "high")];
      if (withApologists && withLayer[index]) parts.push(load(index, "apologists", "high"));
      return (await Promise.all(parts)).every(Boolean);
    },
  };
}

export function usePassageStore(dataBase: string, first: PassageCore, withLayer: boolean[]): PassageStore {
  const [store] = useState(() => createPassageStore(dataBase, first, withLayer));
  return store;
}
