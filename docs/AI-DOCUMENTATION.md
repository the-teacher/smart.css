# Smart.CSS — AI Quick Reference

> **1rem = 10px** (`html { font-size: 62.5% }`). All values below represent pixels.

## Utilities

**Font**: `.font-roboto`
**Font Size**: `.fs-{0|8|10|12|14|16|18|20|22|24|26|28|30|32|34|36|38|40}`
**Line Height**: `.lh-{0|2|4|6|8|10|12|14|16|18|20|22|24|26|28|30|32|34|36|38|40}`
**Text Color**: `.text-{primary|secondary|success|danger|warning|info|light|dark}`
**Text Align**: `.text-left`, `.text-center`, `.text-right`
**Font Weight**: `.normal` (400), `.semibold` (600), `.bold` (700)
**Style**: `.italic`, `.strike`, `.underline`
**Transform**: `.uppercase`, `.lowercase`, `.capitalize`
**Overflow**: `.truncate`, `.break-words`

**Margin**: `.m-{val}`, `.mt-{val}`, `.mb-{val}`, `.ml-{val}`, `.mr-{val}`, `.mauto`
**Padding**: `.p-{val}`, `.pt-{val}`, `.pb-{val}`, `.pl-{val}`, `.pr-{val}`
**Gap**: `.gap-{val}`
Spacing values: `0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 35, 36, 38, 40`

**Width**: `.w-{0|10|20|30|40|50|60|80|100|120|150|200|250|300|400|500|600|800|1000|1200|1400}`, `.w-{25|50|75|100}p`, `.w-{auto|full|screen|fit|max|min}`
**Height**: `.h-{0|10|20|30|40|50|60|80|100|120|150|200|250|300|400|500}`, `.h-{25|50|75|100}p`, `.h-{auto|full|screen|fit|max|min}`

**Flex**: `.flex`, `.flex-col`, `.flex-wrap`, `.flex-1`, `.flex-auto`, `.flex-none`
**Grid**: `.grid`, `.grid-cols-{1|2|3|4}`, `.grid-rows-{1|2|3|4}`, `.place-items-center`, `.place-content-center`
**Justify**: `.justify-{start|center|between|around|evenly}`
**Align**: `.items-{start|center|end}`, `.content-{start|center|end}`

## Components

**Button**: `.btn` + `.btn--{primary|secondary|light|success|warning|danger|info|ghost}` · Sizes: `.btn--{small|medium|large|jumbo}` · `.btn--icon`, `.btn--icon-text`
**Link**: `<a>` styled globally. Disabled: `.disabled` or `[disabled]`
**Checkbox**: `.checkbox` > `.checkbox--input` + `.checkbox--label` · Sizes: `.checkbox--{small|large|jumbo}` · States: `.checkbox--{error|success}`
**Switch**: `.switch` > `.switch--toggle` > `.switch--input` + `.switch--slider`, `.switch--label` · Sizes: `.switch--{small|large}` · States: `.switch--{error|success}`
**Badge**: `.badge` + `.badge-{primary|success|warning|danger|info}`

**Form Input**: `.form-input`, `.form-select`, `.form-textarea` · Sizes: `.input--{small|large|jumbo}` · States: `.form-input--{error|success|warning}` · `.form-input__search`
**Form Label**: `.form--label`
**Form Group**: `.form-group`, `.form-group--actions`, `.form-group--icon`, `.form-group__with-icon`

**Card**: `.card` > `.card--header`, `.card--title`, `.card--subtitle`, `.card--footer` · `.card__centered`
**Info Block**: `.info` + `.info--{primary|secondary|success|danger|warning|light|dark}` · `.info--closable` + `.info__close`
**Data Display**: `.data-display` > `.data-display--field`, `.data-display--label`, `.data-display--value`, `.data-display--actions` · `.data-display__{with-action|monospace|multiline|link}`
**Table**: `.table` > `.table--header`, `.table--row`, `.table--cell`, `.table--header-cell` · `.table--{compact|striped}` · `.table--col-{xs|sm|md|lg|xl}` · `.table--cell-{center|right}`
**Comment**: `.comment--{avatar|body|time|nested}`, `.comment--styled`, `.comment--avatar-color-{1..6}`
**Static Content**: `.static-content` — wrapper for rendered HTML

## Theming

CSS variables use `--sss-{component}-{variant}-{property}-{modifier}` pattern.
Themes: `themes/default/`, `themes/gold/`, `themes/dark/`. Default loaded via `UI.scss`.
Variable definitions are in each SCSS source file's header comments.
