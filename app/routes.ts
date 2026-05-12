import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("photography", "routes/photography.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
