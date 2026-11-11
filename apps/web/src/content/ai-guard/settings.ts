import { getAiProvider } from "@/lib/ai/provider";
import { getAiStore } from "@/content/ai-store/get-ai-store";

export type Feature = "chat" | "simplify";

export async function killSwitchIsOn(): Promise<boolean> {
  if (process.env.AI_ENABLED === "off") return true;
  return !(await getAiStore().settings()).enabled;
}

export async function featureIsOff(feature: Feature): Promise<boolean> {
  if (process.env.AI_ENABLED === "off" || getAiProvider() === null) return true;
  const settings = await getAiStore().settings();
  if (!settings.enabled) return true;
  return feature === "chat" ? !settings.chatEnabled : !settings.simplifyEnabled;
}
