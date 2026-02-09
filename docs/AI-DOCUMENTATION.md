# UI Kit Documentation for AI Tools

## 1. REM Units Configuration

The UI kit uses REM units with custom base configuration:

- `html { font-size: 62.5%; }` — Sets base font size to 10px
- **1rem = 10px** (instead of default 16px)
- All utility classes use this 10px base for easy calculation

## 2. Fonts

**Google Fonts**: `fonts/roboto.scss` — imports Roboto font from Google Fonts
**Class**: `.font-roboto` — applies `font-family: "Roboto", sans-serif`

## 3. Reset & Base Styles

`reset.scss` provides global resets:

- `* { margin: 0; padding: 0; box-sizing: border-box; }`
- `html { font-size: 62.5%; }` (10px base)
- `body { font-size: 1.6rem; line-height: 1.6; color: var(--sss-color-text); }`
- Headings `h1`–`h6`: font-weight 700, sizes from 2.4rem to 1.4rem
- Form elements inherit `font-family: sans-serif, serif`

## 4. Utility Classes

### Spacing

**Margins**: `.m-{value}`, `.mt-{value}`, `.mb-{value}`, `.ml-{value}`, `.mr-{value}`, `.mauto`

- Values: `0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 35, 36, 38, 40`
- Example: `.m-10` = 1rem = 10px, `.mt-20` = 2rem = 20px
- `.mauto` = `margin: 0 auto`

**Paddings**: `.p-{value}`, `.pt-{value}`, `.pb-{value}`, `.pl-{value}`, `.pr-{value}`

- Same values as margins
- Example: `.p-15` = 1.5rem = 15px

**Gaps**: `.gap-{value}` (for flexbox/grid)

- Values: `0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40`
- Example: `.gap-8` = 0.8rem = 8px

### Typography

**Font Size**: `.fs-{value}`

- Values: `0, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40`
- Example: `.fs-16` = 1.6rem = 16px

**Line Height**: `.lh-{value}`

- Values: `0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40`
- Example: `.lh-24` = 2.4rem = 24px

**Text Colors**: `.text-primary`, `.text-secondary`, `.text-success`, `.text-danger`, `.text-warning`, `.text-info`, `.text-light`, `.text-dark`

**Text Alignment**: `.text-left`, `.text-center`, `.text-right`

**Font Weights**: `.normal` (400), `.semibold` (600), `.bold` (700)

**Font Style**: `.italic`

**Text Decoration**: `.underline`, `.strike`

**Text Transforms**: `.uppercase`, `.lowercase`, `.capitalize`

**Text Overflow**: `.truncate` (ellipsis), `.break-words`

### Width

**Special**: `.w-auto`, `.w-full` (100%), `.w-screen` (100vw), `.w-fit`, `.w-max`, `.w-min`
**Percentage**: `.w-25p`, `.w-50p`, `.w-75p`, `.w-100p`
**Fixed (rem)**: `.w-{value}` — values: `0, 10, 20, 30, 40, 50, 60, 80, 100, 120, 150, 200, 250, 300, 400, 500, 600, 800, 1000, 1200, 1400`

- Example: `.w-100` = 10rem = 100px, `.w-300` = 30rem = 300px

### Height

**Special**: `.h-auto`, `.h-full` (100%), `.h-screen` (100vh), `.h-fit`, `.h-max`, `.h-min`
**Percentage**: `.h-25p`, `.h-50p`, `.h-75p`, `.h-100p`
**Fixed (rem)**: `.h-{value}` — values: `0, 10, 20, 30, 40, 50, 60, 80, 100, 120, 150, 200, 250, 300, 400, 500`

- Example: `.h-100` = 10rem = 100px

### Flexbox

**Display**: `.flex`
**Direction**: `.flex-col`
**Wrap**: `.flex-wrap`
**Grow/Shrink**: `.flex-1`, `.flex-auto`, `.flex-none`

### Flex/Grid Alignment (flex-grid-common.scss)

**Justify**: `.justify-start`, `.justify-center`, `.justify-between`, `.justify-around`, `.justify-evenly`
**Align Items**: `.items-start`, `.items-center`, `.items-end`
**Align Content**: `.content-start`, `.content-center`, `.content-end`

### Grid

**Display**: `.grid`
**Columns**: `.grid-cols-1`, `.grid-cols-2`, `.grid-cols-3`, `.grid-cols-4`
**Rows**: `.grid-rows-1`, `.grid-rows-2`, `.grid-rows-3`, `.grid-rows-4`
**Placement**: `.place-items-center`, `.place-content-center`

## 5. Component Classes

### Links (`links.scss`)

Styles the `a` element directly with CSS variables for states: default, hover, visited, active, focus, disabled.

### Buttons (`buttons.scss`)

**Base**: `.btn`
**Variants**: `.btn--primary`, `.btn--secondary`, `.btn--light`, `.btn--success`, `.btn--warning`, `.btn--danger`, `.btn--info`, `.btn--ghost`
**Sizes**: `.btn--small`, `.btn--medium`, `.btn--large`, `.btn--jumbo`
**Icon modes**: `.btn--icon` (icon-only), `.btn--icon-text` (icon + text)
**Link button**: `a.btn` (removes text-decoration)

### Checkboxes (`checkboxes.scss`)

**Container**: `.checkbox`
**Input**: `.checkbox--input`
**Label**: `.checkbox--label`
**States**: `.checkbox--error`, `.checkbox--success`
**Sizes**: `.checkbox--small`, `.checkbox--large`, `.checkbox--jumbo`
**Highlight**: `.checkbox--error-highlight`

### Switches (`switches.scss`)

**Container**: `.switch`
**Parts**: `.switch--toggle`, `.switch--input`, `.switch--slider`, `.switch--label`
**States**: `.switch--error`, `.switch--success`
**Sizes**: `.switch--small`, `.switch--large`

### Form Inputs (`form-inputs.scss`)

**Inputs**: `.form-input`, `.form-select`, `.form-textarea`
**Label**: `.form--label`
**States**: `.form-input--error`, `.form-input--success`, `.form-input--warning`
**Sizes**: `.input--small`, `.input--large`, `.input--jumbo`
**Search**: `.form-input__search` (adds search icon)

### Form Groups (`form-groups.scss`)

**Container**: `.form-group`
**Actions row**: `.form-group--actions`
**Icon slot**: `.form-group--icon`
**With icon**: `.form-group__with-icon`

### Cards (`blocks/card.scss`)

**Container**: `.card`
**Parts**: `.card--header`, `.card--title`, `.card--subtitle`, `.card--footer`
**Modifier**: `.card__centered` (max-width 600px, centered)

### Info Blocks (`blocks/info-blocks.scss`)

**Container**: `.info`
**Variants**: `.info--primary`, `.info--secondary`, `.info--success`, `.info--danger`, `.info--warning`, `.info--light`, `.info--dark`
**Closable**: `.info--closable` + `.info__close` (close button)

### Data Display (`blocks/data-display.scss`)

**Container**: `.data-display`
**Parts**: `.data-display--field`, `.data-display--label`, `.data-display--value`, `.data-display--actions`
**Modifiers**: `.data-display__with-action`, `.data-display__monospace`, `.data-display__multiline`, `.data-display__link`

### Table (`table.scss`)

**Container**: `.table`
**Parts**: `.table--header`, `.table--row`, `.table--cell`, `.table--header-cell`
**Variants**: `.table--compact`, `.table--striped`
**Column widths**: `.table--col-xs` (60px), `.table--col-sm` (100px), `.table--col-md` (150px), `.table--col-lg` (200px), `.table--col-xl` (250px)
**Cell alignment**: `.table--cell-center`, `.table--cell-right`

### Badge (`badge.scss`)

**Base**: `.badge`
**Variants**: `.badge-primary`, `.badge-success`, `.badge-warning`, `.badge-danger`, `.badge-info`

### Comments (`comments/comments.scss`)

**Parts**: `.comment--avatar`, `.comment--body`, `.comment--time`, `.comment--nested`
**Styled**: `.comment--styled` (adds bg, border, shadow)
**Avatar colors**: `.comment--avatar-color-1` through `.comment--avatar-color-6`

### Static Content (`static-content.scss`)

**Container**: `.static-content` — scoped styles for rendered HTML content (headings, paragraphs, lists, links)

## 6. Required CSS Variables

### Global

```css
--sss-color-text
```

### Text Colors

```css
--sss-text-primary-text-color
--sss-text-secondary-text-color
--sss-text-success-text-color
--sss-text-danger-text-color
--sss-text-warning-text-color
--sss-text-info-text-color
--sss-text-light-text-color
--sss-text-dark-text-color
```

### Links

```css
--sss-link-base-text-color
--sss-link-base-text-color-hover
--sss-link-base-text-color-visited
--sss-link-base-text-color-active
--sss-link-base-text-color-focus
--sss-link-base-outline-color-focus
--sss-link-disabled-text-color
```

### Buttons

```css
/* Base */
--sss-btn-base-bg-color-disabled
--sss-btn-base-text-color-disabled

/* For each variant: primary, secondary, light, success, warning, danger, info */
--sss-btn-{variant}-bg-color
--sss-btn-{variant}-bg-color-hover
--sss-btn-{variant}-bg-color-active
--sss-btn-{variant}-bg-color-disabled
--sss-btn-{variant}-text-color
--sss-btn-{variant}-text-color-hover
--sss-btn-{variant}-text-color-active
--sss-btn-{variant}-text-color-disabled

/* Ghost button */
--sss-btn-ghost-bg-color
--sss-btn-ghost-bg-color-disabled
--sss-btn-ghost-text-color
--sss-btn-ghost-text-color-hover
--sss-btn-ghost-text-color-disabled
--sss-btn-ghost-border-color
--sss-btn-ghost-border-color-hover
--sss-btn-ghost-border-color-disabled
```

### Checkboxes

```css
--sss-checkbox-base-bg-color
--sss-checkbox-base-bg-color-checked
--sss-checkbox-base-bg-color-disabled
--sss-checkbox-base-border-color
--sss-checkbox-base-border-color-checked
--sss-checkbox-base-border-color-focus
--sss-checkbox-base-border-color-disabled
--sss-checkbox-base-checkmark-color
--sss-checkbox-base-text-color
--sss-checkbox-base-text-color-disabled
--sss-checkbox-base-shadow-focus
--sss-checkbox-error-border-color
--sss-checkbox-error-shadow-focus
--sss-checkbox-success-border-color
--sss-checkbox-success-shadow-focus
```

### Switches

```css
--sss-switch-base-bg-color
--sss-switch-base-bg-color-checked
--sss-switch-base-bg-color-disabled
--sss-switch-base-bg-color-checked-disabled
--sss-switch-base-thumb-color
--sss-switch-base-text-color
--sss-switch-base-shadow-color-focus
--sss-switch-error-bg-color-checked
--sss-switch-error-shadow-color-focus
--sss-switch-success-bg-color-checked
--sss-switch-success-shadow-color-focus
```

### Form Inputs

```css
--sss-form-label-text-color
--sss-form-input-bg-color
--sss-form-input-bg-color-disabled
--sss-form-input-text-color
--sss-form-input-border-color
--sss-form-input-border-color-focus
--sss-form-input-border-color-disabled
--sss-form-input-shadow-color-focus
--sss-form-input-border-color-error
--sss-form-input-shadow-color-error
--sss-form-input-border-color-success
--sss-form-input-shadow-color-success
--sss-form-input-border-color-warning
--sss-form-input-shadow-color-warning
```

### Form Groups

```css
--sss-form-group-icon-bg-color
```

### Cards

```css
--card-base-bg-color
--card-header-border-color
--card-footer-border-color
--card-title-text-color
--card-subtitle-text-color
```

### Info Blocks

```css
--info-base-bg-color
--info-base-border-color
--info-{variant}-bg-color      /* primary, secondary, success, danger, warning, light, dark */
--info-{variant}-border-color
--info-{variant}-text-color
--info-close-bg-color
--info-close-bg-color-hover
```

### Data Display

```css
--sss-data-display-field-border-color
--sss-data-display-label-text-color
--sss-data-display-value-text-color
--sss-data-display-link-text-color
--sss-data-display-link-text-color-hover
```

### Comments

```css
--sss-comment-background-color
--sss-comment-border-color
--sss-comment-text-color
```

## 7. CSS Variables Naming Convention

Formula: `--sss-{component}-{variant}-{property}-{modifier}`

- **component**: `btn`, `link`, `text`, `checkbox`, `switch`, `form-input`, `form-group`, `data-display`, `comment`
- **variant**: `base`, `primary`, `secondary`, `light`, `success`, `warning`, `danger`, `info`, `ghost`, `error`, `small`, `large`, `jumbo`
- **property**: `bg-color`, `text-color`, `border-color`, `shadow-color`, `checkmark-color`, `thumb-color`, `outline-color`
- **modifier**: (empty), `hover`, `active`, `disabled`, `focus`, `checked`, `visited`

> Note: Cards and Info blocks currently do not use the `--sss-` prefix. Table and Badge use inline fallback values.

## 8. Notes for AI Tools

- All spacing values are in multiples of 2px (except special values: 5, 15, 25, 35)
- Font sizes: 8px to 40px (step 2)
- Line heights: 2px to 40px (step 2)
- Width/Height fixed values use rem (value / 10)
- CSS variables must be defined in a theme file for components to render correctly
- Themes are located in `themes/default/`, `themes/gold/`, `themes/dark/`
- The default theme is loaded via `UI.scss`
