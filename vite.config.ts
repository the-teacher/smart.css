import { defineConfig } from 'vite';
import path from 'path';

// Entry point configuration
interface EntryConfig {
  name: string;
  path: string;
  outputPath: string; // Custom output path for CSS
}

// Function to build entry points from array
const buildEntryPoints = (entries: EntryConfig[]): Record<string, string> => {
  return entries.reduce(
    (acc, entry) => {
      acc[entry.name] = path.resolve(__dirname, entry.path);
      return acc;
    },
    {} as Record<string, string>
  );
};

// Helper function to create theme component entries
const createThemeComponentEntries = (): EntryConfig[] => {
  const themes = ['default', 'dark', 'gold'];
  const components = [
    'button',
    'card',
    'checkboxes',
    'color',
    'data-display',
    'form-groups',
    'form-inputs',
    'info-blocks',
    'links',
    'switches',
    'text-styles',
  ];

  const entries: EntryConfig[] = [];

  themes.forEach((theme) => {
    components.forEach((component) => {
      entries.push({
        name: `${theme}-${component}`,
        path: `src/smart.css/themes/${theme}/components/${component}.vars.scss`,
        outputPath: `components/${theme}/${component}.css`,
      });
    });
  });

  return entries;
};

// Entry points configuration
const entryConfigs: EntryConfig[] = [
  // Main UI Kit
  {
    name: 'ui-kit',
    path: 'src/css-build/index.scss',
    outputPath: 'ui-kit.css',
  },

  // Themes
  {
    name: 'theme-default',
    path: 'src/css-build/theme-default.scss',
    outputPath: 'themes/default.css',
  },
  {
    name: 'theme-dark',
    path: 'src/css-build/theme-dark.scss',
    outputPath: 'themes/dark.css',
  },
  {
    name: 'theme-gold',
    path: 'src/css-build/theme-gold.scss',
    outputPath: 'themes/gold.css',
  },

  // Main components
  {
    name: 'blocks',
    path: 'src/css-build/blocks.scss',
    outputPath: 'blocks.css',
  },
  {
    name: 'controls',
    path: 'src/css-build/controls.scss',
    outputPath: 'controls.css',
  },
  { name: 'forms', path: 'src/css-build/forms.scss', outputPath: 'forms.css' },
  {
    name: 'static-content',
    path: 'src/css-build/static-content.scss',
    outputPath: 'static-content.css',
  },
  {
    name: 'buttons',
    path: 'src/css-build/buttons.scss',
    outputPath: 'buttons.css',
  },

  // Layout components
  {
    name: 'holy-grail-layout',
    path: 'src/components/HolyGrailLayout/layout.scss',
    outputPath: 'holy-grail-layout.css',
  },

  ...createThemeComponentEntries(),
];

// Function to determine CSS file name based on entry point
const getCSSFileName = (assetName: string): string => {
  const foundEntry = entryConfigs.find((entry) =>
    assetName.includes(entry.name)
  );
  return foundEntry?.outputPath || 'ui-kit.css';
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
