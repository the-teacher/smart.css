# HolyGrailLayout Component

This component implements the Holy Grail Layout using React. It provides two different ways to compose the layout.

```html
<body class="layout__body">
  <div id="root">
    <header class="layout__header">
      <div class="layout__content-container">Header Content</div>
    </header>

    <div class="layout__main">
      <div class="layout__content-container layout__main-columns">
        <aside class="layout__aside">Sidebar</aside>
        <main class="layout__main-content">Main Content</main>
        <aside class="layout__aside">Sidebar</aside>
      </div>
    </div>

    <footer class="layout__footer">
      <div class="layout__content-container">Footer Content</div>
    </footer>
  </div>
</body>
```

```sh
body.layout__body
└── div#root
    ├── header.layout__header
    │   └── div.layout__content-container
    │       └── "Header Content"
    │
    ├── div.layout__main
    │   └── div.layout__content-container.layout__main-columns
    │       ├── aside.layout__aside
    │       │   └── "Sidebar"
    │       ├── main.layout__main-content
    │       │   └── "Main Content"
    │       └── aside.layout__aside
    │           └── "Sidebar"
    │
    └── footer.layout__footer
        └── div.layout__content-container
            └── "Footer Content"
```

## Usage Option 1: Component Composition

Using nested components for explicit layout structure:

```jsx
import HolyGrailLayout, {
  Header,
  Footer,
  AsideLeft,
  AsideRight,
  MainContent,
  MainColumns,
} from "./components/HolyGrailLayout";

const App = () => (
  <HolyGrailLayout>
    <Header>
      <h1>Header Content</h1>
    </Header>

    <MainColumns>
      <AsideLeft>
        <h2>Left Sidebar</h2>
      </AsideLeft>
      <MainContent>
        <h2>Main Content</h2>
      </MainContent>
      <AsideRight>
        <h2>Right Sidebar</h2>
      </AsideRight>
    </MainColumns>

    <Footer>
      <p>Footer Content</p>
    </Footer>
  </HolyGrailLayout>
);
```

## Usage Option 2: Props-based Layout

Using props to define each section, with optional sections:

```jsx
import { HolyGrailLayoutWithParams } from "./components/HolyGrailLayout";

const App = () => (
  <HolyGrailLayoutWithParams
    header={<h1>Header Content</h1>}
    leftSidebar={<h2>Left Sidebar</h2>}
    content={<h2>Main Content</h2>}
    rightSidebar={<h2>Right Sidebar</h2>}
    footer={<p>Footer Content</p>}
  />
);
```

## Components

### Base Components

- `HolyGrailLayout`: The main layout component for composition approach
- `HolyGrailLayoutWithParams`: Alternative props-based layout component

### Layout Sections

- `Header`: The header component
- `Footer`: The footer component
- `AsideLeft`: The left sidebar component
- `AsideRight`: The right sidebar component
- `MainContent`: The main content component
- `MainColumns`: The main columns container component

## Props

### HolyGrailLayout

- `children`: ReactNode - Layout sections as child components

### HolyGrailLayoutWithParams

- `header?`: ReactNode - Optional header content
- `leftSidebar?`: ReactNode - Optional left sidebar content
- `content`: ReactNode - Required main content
- `rightSidebar?`: ReactNode - Optional right sidebar content
- `footer?`: ReactNode - Optional footer content

## Features

- Responsive layout
- Flexible composition
- Optional sections (when using HolyGrailLayoutWithParams)
- Maintains semantic HTML structure
- Consistent styling across both usage patterns
