# Smart.CSS Quick Reference

## Reset

Global box model, typography baseline, list normalization

## Typography

**Font Size:** `.fs-{8|10|12..40 by 2px}`  
**Line Height:** `.lh-{0|2|4..40 by 2px}`  
**Text Colors:** `.text-{primary|secondary|success|danger|warning|info|light|dark}`  
**Text Align:** `.text-left`, `.text-center`, `.text-right`  
**Font Weight:** `.normal`, `.semibold`, `.bold`  
**Decoration:** `.italic`, `.strike`, `.underline`  
**Transform:** `.uppercase`, `.lowercase`, `.capitalize`  
**Overflow:** `.truncate`, `.break-words`

## Spacing

**Margin:** `.m-{0|2|4|5|6|8|10|12|14|15|16|18|20|22|24|25|26|28|30|32|34|35|36|38|40}`, `.m{t|b|l|r}-*`, `.mauto`  
**Padding:** `.p-{0|2|4|5|6|8|10|12|14|15|16|18|20|22|24|25|26|28|30|32|34|35|36|38|40}`, `.p{t|b|l|r}-*`  
**Gap:** `.gap-{0|2|4|5|6|8|10|12|14|15|16|18|20|22|24|25|26|28|30|32|34|35|36|38|40}`

## Sizing

**Width:** `.w-{0|10|20|30|40|50|60|80|100|120|150|200|250|300|400|500|600|800|1000|1200|1400}`, `.w-{25|50|75|100}p`, `.w-{auto|full|screen|fit|max|min}`  
**Height:** `.h-{0|10|20|30|40|50|60|80|100|120|150|200|250|300|400|500}`, `.h-{25|50|75|100}p`, `.h-{auto|full|screen|fit|max|min}`

## Components

**Button:** `.btn` + `.btn--{primary|secondary|light|success|warning|danger|info|ghost}`  
 Sizes: `.btn--{small|medium|large|jumbo}`  
 Layout: `.btn--icon`, `.btn--icon-text`

**Link:** `<a>` — States: default, hover, visited, active, focus, disabled (`.disabled` or `[disabled]`)

**Checkbox:** `.checkbox` + `.checkbox--{small|large|jumbo}` + `.checkbox--{error|success}`  
 Structure: `.checkbox--input` + `.checkbox--label`

**Switch:** `.switch` + `.switch--{small|large}` + `.switch--{error|success}`  
 Structure: `.switch--toggle` > `.switch--input` + `.switch--slider`, `.switch--label`

## Forms

**Form Label:** `.form--label`

**Form Group:** `.form-group` — Container  
 Variants: `.form-group--actions`, `.form-group--icon`, `.form-group__with-icon`

**Input:** `.form-input`, `.form-select`, `.form-textarea`  
 Sizes: `.input--{small|large|jumbo}`  
 States: `.form-input--{error|success|warning}`  
 Special: `.form-input__search`

## Layout

**Flex & Grid Alignment:**  
 Justify: `.justify-{start|center|between|around|evenly}`  
 Align items: `.items-{start|center|end}`  
 Align content: `.content-{start|center|end}`

**Flex:** `.flex`, `.flex-col`, `.flex-wrap`  
 Growth: `.flex-1`, `.flex-auto`, `.flex-none`

**Grid:** `.grid`  
 Columns: `.grid-cols-{1|2|3|4}`  
 Rows: `.grid-rows-{1|2|3|4}`  
 Place: `.place-items-center`, `.place-content-center`

## Content

**Static Content:** `.static-content` — Wrapper for rendered HTML (articles, posts)
