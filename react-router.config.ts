import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode — emits a fully static build/client/ folder
  // that can be deployed anywhere (GitHub Pages, Netlify, Vercel, etc.)
  ssr: false,
} satisfies Config;
