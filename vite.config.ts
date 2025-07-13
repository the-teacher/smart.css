import { defineConfig } from 'vite';
import path from 'path';

// CSS file name mapping
const cssFileNames = [
  { match: 'theme-gold', output: 'theme-gold.css' },
  { match: 'theme-default', output: 'theme-default.css' },
  { match: 'theme-dark', output: 'theme-dark.css' },
  { match: 'blocks', output: 'blocks.css' },
  { match: 'controls', output: 'controls.css' },
  { match: 'forms', output: 'forms.css' },
  { match: 'static-content', output: 'static-content.css' },
  { match: 'holy-grail-layout', output: 'holy-grail-layout.css' },
  { match: 'ui-kit', output: 'ui-kit.css' },
  { match: 'index', output: 'ui-kit.css' },
];

// Function to determine CSS file name based on entry point
const getCSSFileName = (assetName: string): string => {
  const foundMapping = cssFileNames.find((mapping) =>
    assetName.includes(mapping.match)
  );
  return foundMapping ? foundMapping.output : 'ui-kit.css';
};

export default defineConfig({
  build: {
    lib: {
      entry: {
        'ui-kit': path.resolve(__dirname, 'src/css-build/index.scss'),
        'theme-gold': path.resolve(__dirname, 'src/css-build/theme-gold.scss'),
        'theme-default': path.resolve(
          __dirname,
          'src/css-build/theme-default.scss'
        ),
        'theme-dark': path.resolve(__dirname, 'src/css-build/theme-dark.scss'),
        blocks: path.resolve(__dirname, 'src/css-build/blocks.scss'),
        controls: path.resolve(__dirname, 'src/css-build/controls.scss'),
        forms: path.resolve(__dirname, 'src/css-build/forms.scss'),
        'static-content': path.resolve(
          __dirname,
          'src/css-build/static-content.scss'
        ),
        'holy-grail-layout': path.resolve(
          __dirname,
          'src/components/HolyGrailLayout/layout.scss'
        ),
      },
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
