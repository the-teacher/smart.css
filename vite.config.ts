import { defineConfig } from 'vite';
import path from 'path';

// Entry point configuration: [name, path, outputPath]
type EntryConfig = [string, string, string];

// Function to build entry points from array
const buildEntryPoints = (entries: EntryConfig[]): Record<string, string> => {
  return entries.reduce(
    (acc, [entryName, entryPath]) => {
      acc[entryName] = path.resolve(__dirname, entryPath);
      return acc;
    },
    {} as Record<string, string>
  );
};

// Helper function to create theme component entries
const createThemeComponentEntries = (): EntryConfig[] => {
  const themes = ['default', 'dark', 'gold'];
  // Exclude components that are already built in blocks.scss
  // to avoid conflicts: card, info-blocks, data-display
  const components = [
    'button',
    'checkboxes',
    'color',
    'form-groups',
    'form-inputs',
    'links',
    'switches',
    'text-styles',
  ];

  const entries: EntryConfig[] = [];

  themes.forEach((theme) => {
    components.forEach((component) => {
      const entryName = `${theme}-${component}`;
      const entryPath = `src/smart.css/themes/${theme}/components/${component}.vars.scss`;
      const outputPath = `themes/${theme}/vars/${component}.css`;

      entries.push([entryName, entryPath, outputPath]);
    });
  });

  return entries;
};

// Entry points configuration: [name, path, outputPath]
const entryConfigs: EntryConfig[] = [
  // Main UI Kit
  ['ui-kit', 'src/css-build/index.scss', 'ui-kit.css'],

  // Themes
  ['theme-default', 'src/css-build/theme-default.scss', 'themes/default.css'],
  ['theme-dark', 'src/css-build/theme-dark.scss', 'themes/dark.css'],
  ['theme-gold', 'src/css-build/theme-gold.scss', 'themes/gold.css'],

  // Main components
  ['blocks', 'src/css-build/blocks.scss', 'blocks.css'],
  ['controls', 'src/css-build/controls.scss', 'controls.css'],
  ['forms', 'src/css-build/forms.scss', 'forms.css'],
  ['static-content', 'src/css-build/static-content.scss', 'static-content.css'],
  ['buttons', 'src/css-build/buttons.scss', 'buttons.css'],
  ['width', 'src/css-build/width.scss', 'width.css'],
  ['height', 'src/css-build/height.scss', 'height.css'],

  // Layout components
  [
    'holy-grail-layout',
    'src/components/HolyGrailLayout/layout.scss',
    'holy-grail-layout.css',
  ],

  // Theme components (auto-generated)
  ...createThemeComponentEntries(),
];

// Function to determine CSS file name based on entry point
const getCSSFileName = (assetName: string): string => {
  const foundEntry = entryConfigs.find(([entryName]) =>
    assetName.includes(entryName)
  );
  if (foundEntry) {
    const [, , outputPath] = foundEntry;
    return outputPath;
  }
  return 'ui-kit.css';
};

export default defineConfig({
  build: {
    lib: {
      entry: buildEntryPoints(entryConfigs),
      name: 'UIKit',
      formats: ['es'],
    },
    outDir: 'dist/ui-kit',
    emptyOutDir: true,
    cssCodeSplit: true,
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            const name = assetInfo.name || '';
            return getCSSFileName(name);
          }
          return assetInfo.name || 'asset';
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@smart.css',
        replacement: path.resolve(__dirname, 'src/smart.css'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
});
