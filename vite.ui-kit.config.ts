import { defineConfig } from "vite";
import path from "path";

// CSS file name mapping
const cssFileNames = [
  { match: "theme-gold", output: "theme-gold.css" },
  { match: "blocks", output: "blocks.css" },
  { match: "controls", output: "controls.css" },
  { match: "forms", output: "forms.css" },
  { match: "static-content", output: "static-content.css" },
  { match: "ui-kit", output: "ui-kit.css" },
  { match: "index", output: "ui-kit.css" }
];

// Function to determine CSS file name based on entry point
const getCSSFileName = (assetName: string): string => {
  const foundMapping = cssFileNames.find((mapping) =>
    assetName.includes(mapping.match)
  );
  return foundMapping ? foundMapping.output : "ui-kit.css";
};

export default defineConfig({
  build: {
    lib: {
      entry: {
        "ui-kit": path.resolve(__dirname, "src/ui-kit/css-build/index.scss"),
        "theme-gold": path.resolve(
          __dirname,
          "src/ui-kit/css-build/theme-gold.scss"
        ),
        blocks: path.resolve(__dirname, "src/ui-kit/css-build/blocks.scss"),
        controls: path.resolve(__dirname, "src/ui-kit/css-build/controls.scss"),
        forms: path.resolve(__dirname, "src/ui-kit/css-build/forms.scss"),
        "static-content": path.resolve(
          __dirname,
          "src/ui-kit/css-build/static-content.scss"
        )
      },
      name: "UIKit",
      formats: ["es"]
    },
    outDir: "dist/ui-kit",
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            const name = assetInfo.name || "";
            return getCSSFileName(name);
          }
          return assetInfo.name || "asset";
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: "@ui-kit",
        replacement: path.resolve(__dirname, "src/ui-kit")
      }
    ]
  }
});
