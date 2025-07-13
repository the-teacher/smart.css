import type { Preview } from "@storybook/react";
import "../src/globalStyles.scss";

const customViewports = {
  bp_389: {
    name: "389px (Mobile -1px)",
    styles: {
      width: "389px",
      height: "844px"
    }
  },
  bp_390: {
    name: "390px (Mobile)",
    styles: {
      width: "390px",
      height: "844px"
    }
  },
  bp_767: {
    name: "767px (Tablet -1px)",
    styles: {
      width: "767px",
      height: "1024px"
    }
  },
  bp_768: {
    name: "768px (Tablet)",
    styles: {
      width: "768px",
      height: "1024px"
    }
  },
  bp_1023: {
    name: "1023px (Desktop -1px)",
    styles: {
      width: "1023px",
      height: "1366px"
    }
  },
  bp_1024: {
    name: "1024px (Desktop)",
    styles: {
      width: "1024px",
      height: "1366px"
    }
  },
  bp_1399: {
    name: "1399px (Large Desktop -1px)",
    styles: {
      width: "1399px",
      height: "900px"
    }
  },
  bp_1400: {
    name: "1400px (Large Desktop)",
    styles: {
      width: "1400px",
      height: "900px"
    }
  },
  bp_1919: {
    name: "1919px (Ultra Wide -1px)",
    styles: {
      width: "1919px",
      height: "1080px"
    }
  },
  bp_1920: {
    name: "1920px (Ultra Wide)",
    styles: {
      width: "1920px",
      height: "1080px"
    }
  }
};

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "ru", title: "Russian" }
        ]
      }
    }
  },
  parameters: {
    docs: { disable: true },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: "mobile"
    },
    options: {
      storySort: {
        order: ["1-Layout", "2-Components"],
        method: "alphabetical"
      }
    }
  }
};

export default preview;
