import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";
import { spanishRewrites } from "./src/content/routes";
import { defaultLocale } from "./src/lib/locale";

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  async rewrites() {
    return spanishRewrites();
  },
  async redirects() {
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: false }];
  },
};

export default withBotId(nextConfig);
