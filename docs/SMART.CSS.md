# Smart.CSS Framework Documentation

## Table of Contents

### Base

- [Reset Stylesheet](#reset-stylesheet)
- [Fonts](#fonts)

### Typography & Text

- [Font Size](#font-size)
- [Line Height](#line-height)
- [Text Utilities](#text-utilities)

### Spacing

- [Margins](#margins)
- [Paddings](#paddings)

### Sizing

- [Width](#width)
- [Height](#height)

### Components

- [Button Component](#button-component)
- [Link Component](#link-component)
- [Checkboxes](#checkboxes)
- [Switches](#switches)
- [Badge](#badge)

### Forms

- [Form Groups](#form-groups)
- [Form Inputs](#form-inputs)

### Blocks

- [Card](#card)
- [Info Blocks](#info-blocks)
- [Data Display](#data-display)
- [Table](#table)
- [Comments](#comments)

### Layout & Alignment

- [Flex & Grid Alignment](#flex--grid-alignment)
- [Gaps](#gaps)
- [Flex](#flex)
- [Grid](#grid)

### Content

- [Static Content](#static-content)
- [Theming](#theming)

---

## Reset Stylesheet

### 1. Global Reset

Universal selector resets all elements:

- `margin: 0`
- `padding: 0`
- `box-sizing: border-box`

### 2. Rem-Based Scale

Root font size: `html { font-size: 62.5% }` (1rem = 10px)

Body base: `1.6rem` (16px) with `line-height: 1.6`

### 3. Text Color and Rendering

- Color: `var(--sss-color-text)`
- Font weight: 400
- Font smoothing enabled
- Variable font support enabled

### 4. Paragraphs

- `margin-bottom: 1.6rem`
- Last child: `margin-bottom: 0`

### 5. Headings

All headings: `font-weight: 700`, `line-height: 1.4`

Size and margin per level:
| Level | Size | Margin |
|-------|--------|--------|
| h1 | 2.4rem | 2.4rem |
| h2 | 2.2rem | 2.2rem |
| h3 | 2.0rem | 2.0rem |
| h4 | 1.8rem | 1.8rem |
| h5 | 1.6rem | 1.6rem |
| h6 | 1.4rem | 1.4rem |

### 6. Form Elements

- `input`, `select`, `textarea`, `button`
- Font family: `sans-serif, serif`

### 7. Lists

All lists: `list-style: none`, `list-style-position: outside`

Individual markers:

- `ul li`: `list-style: circle`
- `ol li`: `list-style: decimal`

## Fonts

File: `fonts/roboto.scss`

Imports Roboto from Google Fonts and provides `.font-roboto` class.

- `.font-roboto`: `font-family: "Roboto", sans-serif`

## Link Component

### 1. Base Link

Element: `<a>`

States:

- Default: text color
- Hover: text color changes, underline added
- Visited: visited color
- Active: active color
- Focus: focus color, outline
- Disabled: `.disabled` class or `[disabled]` attribute, pointer-events disabled

### 2. Visited Links

Uses separate color for visited state, inherits hover styling.

### 3. Disabled Links

Apply `.disabled` class or `[disabled]` attribute to disable link interaction.

## Button Component

### 1. Base Button

Class: `.btn`

Base button with default padding and font size. Supports disabled state.

### 2. Variants

Nine variants:

- **primary**
- **secondary**
- **light**
- **success**
- **warning**
- **danger**
- **info**
- **ghost**

Each supports: default, hover, active, disabled states.

Ghost variant has dotted border.

Usage: `.btn--primary`, `.btn--secondary`, etc.

### 3. Sizes

- `.btn--small`
- `.btn--medium`
- `.btn--large`
- `.btn--jumbo`

### 4. Icon & Text

- `.btn--icon`: Icon-only button
- `.btn--icon-text`: Icon with text label

### 5. Link Button

Apply `.btn` class to `<a>` element for link-styled button.

## Margins

### 1. Margin Utilities

Utility classes for consistent spacing. Values: 0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 35, 36, 38, 40

Each value represents 0.1rem (10 = 1rem).

### 2. Directions

- `.m-{value}`: All sides
- `.mt-{value}`: Top
- `.mb-{value}`: Bottom
- `.ml-{value}`: Left
- `.mr-{value}`: Right

### 3. Auto Center

- `.mauto`: `margin: 0 auto`

## Paddings

### 1. Padding Utilities

Utility classes for consistent spacing. Values: 0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 35, 36, 38, 40

Each value represents 0.1rem (10 = 1rem).

### 2. Directions

- `.p-{value}`: All sides
- `.pt-{value}`: Top
- `.pb-{value}`: Bottom
- `.pl-{value}`: Left
- `.pr-{value}`: Right

## Width

### 1. Fixed Width Utilities

Fixed rem values: 0, 10, 20, 30, 40, 50, 60, 80, 100, 120, 150, 200, 250, 300, 400, 500, 600, 800, 1000, 1200, 1400

Each value represents 0.1rem (10 = 1rem).

Usage: `.w-{value}`

### 2. Percentage Width

Percentage values: 25, 50, 75, 100

Usage: `.w-{value}p` (e.g., `.w-50p` = 50%)

### 3. Special Values

- `.w-auto`: auto
- `.w-full`: 100%
- `.w-screen`: 100vw
- `.w-fit`: fit-content
- `.w-max`: max-content
- `.w-min`: min-content

## Height

### 1. Fixed Height Utilities

Fixed rem values: 0, 10, 20, 30, 40, 50, 60, 80, 100, 120, 150, 200, 250, 300, 400, 500

Each value represents 0.1rem (10 = 1rem).

Usage: `.h-{value}`

### 2. Percentage Height

Percentage values: 25, 50, 75, 100

Usage: `.h-{value}p` (e.g., `.h-50p` = 50%)

### 3. Special Values

- `.h-auto`: auto
- `.h-full`: 100%
- `.h-screen`: 100vh
- `.h-fit`: fit-content
- `.h-max`: max-content
- `.h-min`: min-content

## Checkboxes

### 1. Base Checkbox

Class: `.checkbox`

Structure:

- `.checkbox--input`: custom checkbox element
- `.checkbox--label`: label text

States: checked, focus, disabled, hover

### 2. Sizes

- `.checkbox--small`: 16px
- `.checkbox` (default): 20px
- `.checkbox--large`: 24px
- `.checkbox--jumbo`: 32px

### 3. Validation States

- `.checkbox--error`: error border and focus shadow
- `.checkbox--success`: success border and focus shadow

### 4. Disabled State

Disabled checkbox has reduced opacity, non-pointer cursor.

### 5. Usage Example

```html
<label class="checkbox">
  <input type="checkbox" class="checkbox--input" />
  <span class="checkbox--label">Accept terms</span>
</label>
```

With size and state modifiers:

```html
<label class="checkbox checkbox--large checkbox--success">
  <input type="checkbox" class="checkbox--input" checked />
  <span class="checkbox--label">Option verified</span>
</label>
```

## Switches

### 1. Base Switch

Class: `.switch`

Structure:

- `.switch--toggle`: toggle track
- `.switch--input`: hidden input
- `.switch--slider`: animated slider with thumb
- `.switch--label`: label text

States: checked, focus, disabled

Animation on toggle.

### 2. Sizes

- `.switch--small`: 32px x 18px
- `.switch` (default): 40px x 24px
- `.switch--large`: 50px x 30px

### 3. Validation States

- `.switch--error`: error focus shadow, error checked color
- `.switch--success`: success focus shadow, success checked color

### 4. Disabled State

Disabled switch has reduced opacity, non-pointer cursor, separate disabled checked color.

### 5. Usage Example

```html
<label class="switch">
  <div class="switch--toggle">
    <input type="checkbox" class="switch--input" />
    <span class="switch--slider"></span>
  </div>
  <span class="switch--label">Enable feature</span>
</label>
```

With size and state modifiers:

```html
<label class="switch switch--large switch--success">
  <div class="switch--toggle">
    <input type="checkbox" class="switch--input" checked />
    <span class="switch--slider"></span>
  </div>
  <span class="switch--label">Notifications enabled</span>
</label>
```

## Font Size

### 1. Font Size Utilities

Classes for font sizes: 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40

Each value represents pixels (8 = 0.8rem = 8px, 10 = 1rem = 10px, etc).

Usage: `.fs-{value}` (e.g., `.fs-16` = 16px)

### 2. Zero Font Size

- `.fs-0`: 0px

## Text Utilities

### 1. Text Colors

Semantic color classes:

- `.text-primary`, `.text-secondary`
- `.text-success`, `.text-danger`, `.text-warning`, `.text-info`
- `.text-light`, `.text-dark`

### 2. Text Alignment

- `.text-left`, `.text-center`, `.text-right`

### 3. Font Weights & Styles

- `.normal`: 400
- `.semibold`: 600
- `.bold`: 700
- `.italic`: italic
- `.strike`: strikethrough

### 4. Text Transformations

- `.uppercase`, `.lowercase`, `.capitalize`
- `.underline`

### 5. Text Overflow

- `.truncate`: Single line with ellipsis
- `.break-words`: Wrap long words

## Line Height

### 1. Line Height Utilities

Classes for line heights: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40

Each value represents pixels (2 = 0.2rem = 2px, 10 = 1rem = 10px, etc).

Usage: `.lh-{value}` (e.g., `.lh-16` = 16px / 1.6rem)

## Form Groups

### 1. Base Form Group

Class: `.form-group`

Container for form fields.

### 2. Form Group Variants

- `.form-group--actions`: Button container. Mobile: stacks vertically
- `.form-group--icon`: Icon container
- `.form-group__with-icon`: Wrapper for inputs with icons

## Form Inputs

### 1. Input Elements

Classes: `.form-input`, `.form-select`, `.form-textarea`

Full width inputs with focus state support.

### 2. Input Sizes

- `.input--small`: 1.4rem font
- `.input` (default): 1.6rem font
- `.input--large`: 1.8rem font
- `.input--jumbo`: 2.2rem font

### 3. Validation States

- `.form-input--error`: error border and shadow
- `.form-input--success`: success border and shadow
- `.form-input--warning`: warning border and shadow

### 4. Special Inputs

- `.form-input__search`: Search input with icon
- `.form-select`: Dropdown with custom arrow
- `.form-textarea`: Resizable textarea

### 5. Disabled State

Disabled inputs: reduced opacity, non-pointer cursor

## Flex & Grid Alignment

### 1. Justify Content

- `.justify-start`: flex-start
- `.justify-center`: center
- `.justify-between`: space-between
- `.justify-around`: space-around
- `.justify-evenly`: space-evenly

### 2. Align Items

- `.items-start`: flex-start
- `.items-center`: center
- `.items-end`: flex-end

### 3. Align Content

- `.content-start`: flex-start
- `.content-center`: center
- `.content-end`: flex-end

## Gaps

### 1. Gap Utilities

Utility classes for spacing between flex and grid items. Values: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40

Each value represents 0.1rem (10 = 1rem).

Usage: `.gap-{value}` (e.g., `.gap-16` = 16px / 1.6rem)

## Flex

### 1. Base Flex

- `.flex`: `display: flex`
- `.flex-col`: column direction
- `.flex-wrap`: wrap items

### 2. Flex Growth

- `.flex-1`: `flex: 1 1 0%` — grow and shrink
- `.flex-auto`: `flex: 1 1 auto` — grow, shrink, auto size
- `.flex-none`: `flex: none` — no grow/shrink

## Grid

### 1. Base Grid

- `.grid`: `display: grid`

### 2. Grid Columns

- `.grid-cols-1`, `.grid-cols-2`, `.grid-cols-3`, `.grid-cols-4`

### 3. Grid Rows

- `.grid-rows-1`, `.grid-rows-2`, `.grid-rows-3`, `.grid-rows-4`

### 4. Grid Placement

- `.place-items-center`: Center items in grid cells
- `.place-content-center`: Center grid content

## Static Content

### 1. Base Static Content

Class: `.static-content`

Wrapper for rendered HTML content (blog posts, articles, user-generated content).

### 2. Typography

- h1: 2rem font, 600 weight
- h2: 1.5rem font, 500 weight
- h3: 1.2rem font, 400 weight
- p: 1rem font

### 3. Lists

- ul, ol: 2rem left margin
- ul: disc bullets
- ol: decimal numbers
- li: 1rem bottom margin, 1.5 line-height

### 4. Links

Links inside static content: underlined, primary color

## Badge

Class: `.badge`

Inline label/tag element.

### Variants

- `.badge-primary`, `.badge-success`, `.badge-warning`, `.badge-danger`, `.badge-info`

Uses CSS custom properties with inline fallbacks.

## Card

Class: `.card`

Container with background, border-radius, shadow.

### Parts

- `.card--header`: top section with border-bottom
- `.card--title`: large centered title (2.4rem, 600 weight)
- `.card--subtitle`: smaller centered subtitle (1.6rem)
- `.card--footer`: bottom section with border-top

### Modifier

- `.card__centered`: max-width 600px, centered with auto margins

## Info Blocks

Class: `.info`

Alert/notification block with border and background.

### Variants

- `.info--primary`, `.info--secondary`, `.info--success`, `.info--danger`, `.info--warning`, `.info--light`, `.info--dark`

### Closable

- `.info--closable`: adds right padding for close button
- `.info__close`: positioned close button (absolute, top-right)

## Data Display

Class: `.data-display`

Read-only data presentation (key-value pairs).

### Parts

- `.data-display--field`: row with bottom border
- `.data-display--label`: field label (1.4rem, 600 weight)
- `.data-display--value`: field value (1.6rem, word-break)
- `.data-display--actions`: action buttons row (responsive, stacks on mobile)

### Modifiers

- `.data-display__with-action`: row with space-between alignment
- `.data-display__monospace`: monospace font with letter-spacing
- `.data-display__multiline`: pre-wrap with 1.5 line-height
- `.data-display__link`: styled link with hover underline

## Table

Class: `.table`

Full-width table with collapse borders and shadow.

### Parts

- `.table--header`: thead row with background and bottom border
- `.table--row`: tbody row with hover effect
- `.table--cell`: td element
- `.table--header-cell`: th element (600 weight)

### Variants

- `.table--compact`: smaller font size cells
- `.table--striped`: alternating row backgrounds

### Column Widths

- `.table--col-xs`: 60px
- `.table--col-sm`: 100px
- `.table--col-md`: 150px
- `.table--col-lg`: 200px
- `.table--col-xl`: 250px

### Cell Alignment

- `.table--cell-center`: centered text
- `.table--cell-right`: right-aligned text

## Comments

Class prefix: `.comment`

Comment/discussion thread component.

### Parts

- `.comment--avatar`: circular avatar (40px, gradient background)
- `.comment--body`: content wrapper
- `.comment--time`: timestamp (reduced opacity)
- `.comment--nested`: nested replies (left dashed border)

### Styled Variant

- `.comment--styled`: adds background, border, rounded corners, hover shadow. Avatar enlarged to 48px.

### Avatar Colors

6 gradient presets: `.comment--avatar-color-1` through `.comment--avatar-color-6`

## Theming

Components use CSS custom properties with `--sss-` prefix.

Built-in themes in `themes/` directory:

- `default/` — default light theme (loaded by `UI.scss`)
- `gold/` — gold accent theme
- `dark/` — dark theme

Each theme provides `colors.scss`, `custom.scss`, `styles.scss`, and component-specific overrides in `components/`.
