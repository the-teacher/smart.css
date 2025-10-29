# UI Kit Documentation for AI Tools

## 1. REM Units Configuration

The UI kit uses REM units with custom base configuration:

- `html { font-size: 62.5%; }` - Sets base font size to 10px
- **1rem = 10px** (instead of default 16px)
- All utility classes use this 10px base for easy calculation

## 2. Utility Classes Structure

### Spacing Utilities

**Margins**: `.m-{value}`, `.mt-{value}`, `.mb-{value}`, `.ml-{value}`, `.mr-{value}`

- Available values: `0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 35, 36, 38, 40`
- Example: `.m-10` = 1rem = 10px, `.mt-20` = 2rem = 20px

**Paddings**: `.p-{value}`, `.pt-{value}`, `.pb-{value}`, `.pl-{value}`, `.pr-{value}`

- Same values as margins
- Example: `.p-15` = 1.5rem = 15px

**Gaps**: `.gap-{value}` (for flexbox/grid)

- Values: `0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40`
- Example: `.gap-8` = 0.8rem = 8px

### Typography Utilities

**Font Size**: `.fs-{value}`

- Values: `0, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40`
- Example: `.fs-16` = 1.6rem = 16px

**Line Height**: `.lh-{value}`

- Values: `0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40`
- Example: `.lh-24` = 2.4rem = 24px

**Text Colors**: `.text-{semantic}`

- Available: `primary, secondary, success, danger, warning, info, light, dark`

**Text Alignment**: `.text-{align}`

- Available: `left, center, right`

**Font Weights**: `.normal`, `.semibold`, `.bold`

**Text Transforms**: `.uppercase`, `.lowercase`, `.capitalize`, `.underline`

### Flexbox Utilities

**Display**: `.flex`
**Direction**: `.flex-col`
**Justify**: `.justify-center`, `.justify-between`, `.justify-end`
**Align**: `.items-center`, `.items-start`, `.items-end`
**Wrap**: `.flex-wrap`
**Grow/Shrink**: `.flex-1`, `.flex-auto`, `.flex-none`

## 3. Required CSS Variables

### Text Colors

```css
--text-primary-text-color
--text-secondary-text-color
--text-success-text-color
--text-danger-text-color
--text-warning-text-color
--text-info-text-color
--text-light-text-color
--text-dark-text-color
```

### Button Variables (for each variant: primary, secondary, light, success, warning, danger, info, ghost, base)

```css
/* Base button */
--button-base-bg-color-disabled
--button-base-text-color-disabled

/* For each variant (primary, secondary, etc.) */
--button-{variant}-bg-color
--button-{variant}-bg-color-hover
--button-{variant}-bg-color-active
--button-{variant}-bg-color-disabled
--button-{variant}-text-color
--button-{variant}-text-color-disabled

/* Ghost button specific */
--button-ghost-border-color
--button-ghost-border-color-hover
--button-ghost-border-color-disabled
```

### Additional Global Variables

```css
--sss-color-text /* Used in reset.scss for body text color */
```

## 4. Component Classes

### Buttons

**Base**: `.btn`
**Variants**: `.btn--primary`, `.btn--secondary`, `.btn--light`, `.btn--success`, `.btn--warning`, `.btn--danger`, `.btn--info`, `.btn--ghost`

### Note for AI Tools

- All spacing values are in multiples of 2px (except some special values like 5, 15, 25, 35)
- Font sizes start from 8px and go up to 40px
- The system prioritizes consistency and mathematical relationships
- CSS variables must be defined in a theme file or global CSS to make components work properly
