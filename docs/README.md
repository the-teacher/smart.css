# Smart.CSS — UI Kit Documentation

A lightweight CSS utility kit built with SCSS. Uses REM units with a 10px base (`html { font-size: 62.5% }`), so **1rem = 10px**.

## Table of Contents

- [Fonts](#fonts)
- [Buttons](#buttons)
- [Checkboxes](#checkboxes)
- [Switches](#switches)
- [Form Inputs](#form-inputs)
- [Form Groups](#form-groups)
- [Cards](#cards)
- [Info Blocks](#info-blocks)
- [Data Display](#data-display)
- [Table](#table)
- [Badge](#badge)
- [Comments](#comments)
- [Text Utilities](#text-utilities)
- [Spacing Utilities](#spacing-utilities)
- [Sizing Utilities](#sizing-utilities)
- [Layout Utilities](#layout-utilities)
- [Static Content](#static-content)
- [Theming](#theming)

## Fonts

Import Roboto from Google Fonts:

```scss
@use "fonts/roboto.scss";
```

Apply the font:

```html
<body class="font-roboto">
  ...
</body>
```

## Buttons

Base class `.btn` with variant and size modifiers:

```html
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--light">Light</button>
<button class="btn btn--success">Success</button>
<button class="btn btn--warning">Warning</button>
<button class="btn btn--danger">Danger</button>
<button class="btn btn--info">Info</button>
<button class="btn btn--ghost">Ghost</button>
```

### Sizes

```html
<button class="btn btn--primary btn--small">Small</button>
<button class="btn btn--primary btn--medium">Medium (default)</button>
<button class="btn btn--primary btn--large">Large</button>
<button class="btn btn--primary btn--jumbo">Jumbo</button>
```

### Icon Buttons

```html
<button class="btn btn--primary btn--icon">
  <img src="/icons/eye.svg" alt="View" />
</button>

<button class="btn btn--primary btn--icon-text">
  <img src="/icons/clipboard-check.svg" alt="" />
  <span>Copy</span>
</button>
```

### Disabled & Link Button

```html
<button class="btn btn--primary" disabled>Disabled</button>
<a class="btn btn--primary" href="/path">Link Button</a>
```

## Checkboxes

```html
<label class="checkbox">
  <input type="checkbox" class="checkbox--input" />
  <span class="checkbox--label">Accept terms</span>
</label>
```

### Sizes & States

```html
<label class="checkbox checkbox--small">...</label>
<label class="checkbox checkbox--large">...</label>
<label class="checkbox checkbox--jumbo">...</label>

<label class="checkbox checkbox--error">...</label>
<label class="checkbox checkbox--success">...</label>
```

## Switches

```html
<label class="switch">
  <div class="switch--toggle">
    <input type="checkbox" class="switch--input" />
    <span class="switch--slider"></span>
  </div>
  <span class="switch--label">Enable feature</span>
</label>
```

### Sizes & States

```html
<label class="switch switch--small">...</label>
<label class="switch switch--large">...</label>

<label class="switch switch--error">...</label>
<label class="switch switch--success">...</label>
```

## Form Inputs

```html
<input class="form-input" placeholder="Text input" />
<select class="form-select">
  <option>Option</option>
</select>
<textarea class="form-textarea" placeholder="Text area"></textarea>
```

### Label

```html
<label class="form--label">Username</label>
```

### Sizes

```html
<input class="form-input input--small" placeholder="Small" />
<input class="form-input input--large" placeholder="Large" />
<input class="form-input input--jumbo" placeholder="Jumbo" />
```

### Validation States

```html
<input class="form-input form-input--error" placeholder="Error" />
<input class="form-input form-input--success" placeholder="Success" />
<input class="form-input form-input--warning" placeholder="Warning" />
```

### Search Input

```html
<input class="form-input form-input__search" placeholder="Search..." />
```

## Form Groups

```html
<div class="form-group">
  <label class="form--label">Email</label>
  <input class="form-input" type="email" placeholder="Enter email" />
</div>
```

### With Icon

```html
<div class="form-group">
  <label class="form--label">Search</label>
  <div class="form-group__with-icon">
    <input class="form-input" placeholder="Search..." />
    <div class="form-group--icon">
      <img src="/icons/search.svg" alt="search" />
    </div>
  </div>
</div>
```

### Actions Row

```html
<div class="form-group--actions">
  <button class="btn btn--secondary">Cancel</button>
  <button class="btn btn--primary">Submit</button>
</div>
```

## Cards

```html
<div class="card">
  <div class="card--header p-16">
    <h2 class="card--title">Card Title</h2>
    <p class="card--subtitle">Subtitle text</p>
  </div>
  <div class="p-16">Card content</div>
  <div class="card--footer p-16">Footer</div>
</div>

<div class="card card__centered">Centered card (max 600px)</div>
```

## Info Blocks

```html
<div class="info info--primary p-10">Primary message</div>
<div class="info info--success p-10">Success message</div>
<div class="info info--danger p-10">Error message</div>
<div class="info info--warning p-10">Warning message</div>
```

Variants: `primary`, `secondary`, `success`, `danger`, `warning`, `light`, `dark`

### Closable

```html
<div class="info info--primary info--closable p-10">
  Dismissible message
  <button class="info__close" aria-label="Close">&times;</button>
</div>
```

## Data Display

```html
<div class="data-display">
  <div class="data-display--field p-10">
    <div class="data-display--label">Username</div>
    <div class="data-display--value">john_doe</div>
  </div>
  <div class="data-display--field p-10">
    <div class="data-display--label">Password</div>
    <div class="data-display--value data-display__monospace">••••••••</div>
  </div>
  <div class="data-display--actions p-10">
    <button class="btn btn--primary btn--small">Edit</button>
    <button class="btn btn--danger btn--small">Delete</button>
  </div>
</div>
```

Modifiers: `data-display__with-action`, `data-display__monospace`, `data-display__multiline`, `data-display__link`

## Table

```html
<table class="table">
  <thead>
    <tr class="table--header">
      <th class="table--header-cell p-10">Name</th>
      <th class="table--header-cell p-10">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table--row">
      <td class="table--cell p-10">Alice</td>
      <td class="table--cell p-10">Admin</td>
    </tr>
  </tbody>
</table>
```

Variants: `.table--compact`, `.table--striped`
Column widths: `.table--col-xs` (60px), `.table--col-sm` (100px), `.table--col-md` (150px), `.table--col-lg` (200px), `.table--col-xl` (250px)
Cell align: `.table--cell-center`, `.table--cell-right`

## Badge

```html
<span class="badge">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-info">Info</span>
```

## Comments

```html
<div class="comment--styled flex gap-10 p-10">
  <div class="comment--avatar comment--avatar-color-1"></div>
  <div class="comment--body">
    <div class="bold">Author Name</div>
    <div class="comment--time fs-12">2 hours ago</div>
    <p class="mt-6">Comment text here.</p>
  </div>
</div>
```

Nested comments use `.comment--nested` with left border.
Avatar colors: `.comment--avatar-color-{1..6}`

## Text Utilities

### Colors

```html
<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
```

### Font Size & Line Height

```html
<p class="fs-14 lh-20">14px font, 20px line-height</p>
<p class="fs-20 lh-28 bold">20px bold text</p>
```

### Weight, Style, Transform

```html
<span class="bold">Bold</span>
<span class="semibold">Semibold</span>
<span class="italic">Italic</span>
<span class="uppercase">Uppercase</span>
<span class="truncate">Long text that gets cut off...</span>
```

## Spacing Utilities

All values represent pixels: value ÷ 10 = rem. Example: `.m-20` = 2rem = 20px.

### Margins

```html
<div class="m-16">16px all sides</div>
<div class="mt-8">8px top</div>
<div class="mb-16">16px bottom</div>
<div class="ml-24">24px left</div>
<div class="mr-10">10px right</div>
<div class="mauto">margin: 0 auto</div>
```

### Paddings

```html
<div class="p-16">16px all sides</div>
<div class="pt-8 pb-8">8px top and bottom</div>
```

### Gaps

```html
<div class="flex gap-10">10px gap between flex items</div>
```

Available spacing values: `0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 35, 36, 38, 40`

## Sizing Utilities

### Width

```html
<div class="w-200">200px (20rem)</div>
<div class="w-50p">50%</div>
<div class="w-full">100%</div>
```

### Height

```html
<div class="h-100">100px (10rem)</div>
<div class="h-screen">100vh</div>
```

## Layout Utilities

### Flexbox

```html
<div class="flex gap-10 items-center justify-between">
  <div class="flex-1">Grows</div>
  <div class="flex-none">Fixed</div>
</div>

<div class="flex flex-col gap-8">
  <div>Row 1</div>
  <div>Row 2</div>
</div>
```

### Grid

```html
<div class="grid grid-cols-3 gap-16">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>
```

## Static Content

Wrapper for rendered HTML (articles, user-generated content):

```html
<div class="static-content">
  <h1>Article Title</h1>
  <p>Paragraph text with <a href="#">links</a>.</p>
  <ul>
    <li>List item</li>
  </ul>
</div>
```

## Theming

Components use CSS custom properties (`--sss-*` prefix). Define them in a theme file.
Built-in themes: `themes/default/`, `themes/gold/`, `themes/dark/`.

The default theme is loaded automatically via `UI.scss`.

For the full list of required CSS variables, see [AI-DOCUMENTATION.md](./AI-DOCUMENTATION.md#6-required-css-variables).
