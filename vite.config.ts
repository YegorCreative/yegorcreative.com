import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Serve the Assets/ folder as the static root so
  // images are reachable at e.g. /lionheadico.png
  publicDir: "Assets",
  plugins: [reactRouter(), tsconfigPaths()],
});
