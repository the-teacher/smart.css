import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        "ui-kit-gold": path.resolve(
          __dirname,
          "src/ui-kit/themes/gold/index.scss"
        ),
        "ui-kit-regular": path.resolve(
          __dirname,
          "src/ui-kit/themes/regular/index.scss"
        )
      },
      formats: ["es"]
    },
    outDir: "dist/ui-kit-themes",
    cssCodeSplit: false
  }
});
