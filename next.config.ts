import type { NextConfig } from "next";
import { defaultLocale } from "./src/lib/locale";

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  async redirects() {
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: false }];
  },
};

export default nextConfig;
