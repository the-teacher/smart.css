# Smart.CSS Quick Reference

> 1rem = 10px (`html { font-size: 62.5% }`)

## Fonts

`.font-roboto` — Roboto from Google Fonts (`fonts/roboto.scss`)

## Reset

Global box model, 10px rem base, heading sizes h1–h6, list normalization, font smoothing
Body: `font-size: 1.6rem`, `line-height: 1.6`, `color: var(--sss-color-text)`

## Typography

**Font Size:** `.fs-{0|8|10|12..40 step 2}`
**Line Height:** `.lh-{0|2|4..40 step 2}`
**Text Colors:** `.text-{primary|secondary|success|danger|warning|info|light|dark}`
**Text Align:** `.text-left`, `.text-center`, `.text-right`
**Font Weight:** `.normal` (400), `.semibold` (600), `.bold` (700)
**Style/Decoration:** `.italic`, `.strike`, `.underline`
**Transform:** `.uppercase`, `.lowercase`, `.capitalize`
**Overflow:** `.truncate`, `.break-words`

## Spacing

**Margin:** `.m-{val}`, `.mt-{val}`, `.mb-{val}`, `.ml-{val}`, `.mr-{val}`, `.mauto`
**Padding:** `.p-{val}`, `.pt-{val}`, `.pb-{val}`, `.pl-{val}`, `.pr-{val}`
**Gap:** `.gap-{val}`
Values: `0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 35, 36, 38, 40`

## Sizing

**Width:** `.w-{0|10|20|30|40|50|60|80|100|120|150|200|250|300|400|500|600|800|1000|1200|1400}`, `.w-{25|50|75|100}p`, `.w-{auto|full|screen|fit|max|min}`
**Height:** `.h-{0|10|20|30|40|50|60|80|100|120|150|200|250|300|400|500}`, `.h-{25|50|75|100}p`, `.h-{auto|full|screen|fit|max|min}`

## Layout

**Flex:** `.flex`, `.flex-col`, `.flex-wrap`, `.flex-1`, `.flex-auto`, `.flex-none`
**Grid:** `.grid`, `.grid-cols-{1|2|3|4}`, `.grid-rows-{1|2|3|4}`, `.place-items-center`, `.place-content-center`
**Justify:** `.justify-{start|center|between|around|evenly}`
**Align Items:** `.items-{start|center|end}`
**Align Content:** `.content-{start|center|end}`

## Components

**Button:** `.btn` + `.btn--{primary|secondary|light|success|warning|danger|info|ghost}`
Sizes: `.btn--{small|medium|large|jumbo}` · Layout: `.btn--icon`, `.btn--icon-text`

**Link:** `<a>` — states via CSS vars. Disabled: `.disabled` or `[disabled]`

**Checkbox:** `.checkbox` + `.checkbox--{small|large|jumbo}` + `.checkbox--{error|success}`
Parts: `.checkbox--input`, `.checkbox--label`

**Switch:** `.switch` + `.switch--{small|large}` + `.switch--{error|success}`
Parts: `.switch--toggle` > `.switch--input` + `.switch--slider`, `.switch--label`

**Badge:** `.badge` + `.badge-{primary|success|warning|danger|info}`

## Forms

**Label:** `.form--label`
**Group:** `.form-group`, `.form-group--actions`, `.form-group--icon`, `.form-group__with-icon`
**Input:** `.form-input`, `.form-select`, `.form-textarea`
Sizes: `.input--{small|large|jumbo}` · States: `.form-input--{error|success|warning}` · Search: `.form-input__search`

## Blocks

**Card:** `.card`, `.card--header`, `.card--title`, `.card--subtitle`, `.card--footer`, `.card__centered`

**Info Block:** `.info` + `.info--{primary|secondary|success|danger|warning|light|dark}`
Closable: `.info--closable` + `.info__close`

**Data Display:** `.data-display`, `.data-display--field`, `.data-display--label`, `.data-display--value`, `.data-display--actions`
Modifiers: `.data-display__with-action`, `.data-display__monospace`, `.data-display__multiline`, `.data-display__link`

**Table:** `.table`, `.table--header`, `.table--row`, `.table--cell`, `.table--header-cell`
Variants: `.table--compact`, `.table--striped`
Columns: `.table--col-{xs|sm|md|lg|xl}` · Align: `.table--cell-center`, `.table--cell-right`

**Comment:** `.comment--avatar`, `.comment--body`, `.comment--time`, `.comment--nested`
Styled: `.comment--styled` · Colors: `.comment--avatar-color-{1..6}`

## Content

**Static Content:** `.static-content` — scoped styles for rendered HTML (articles, posts)
