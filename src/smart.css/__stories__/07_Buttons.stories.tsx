import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "1-UI-Kit/7-Buttons",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "tablet"
    }
  }
};

export default meta;
type Story = StoryObj;

// Organized buttons by type and state
export const ButtonsShowcase: Story = {
  render: () => (
    <div className="p-4">
      {/* Primary Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Primary Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--primary">Primary</button>
          <button className="btn btn--primary" disabled>
            Primary Disabled
          </button>
          <button className="btn btn--primary btn--small">Small</button>
          <button className="btn btn--primary btn--medium">Medium</button>
          <button className="btn btn--primary btn--large">Large</button>
          <button className="btn btn--primary btn--jumbo">Jumbo</button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Secondary Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--secondary">Secondary</button>
          <button className="btn btn--secondary" disabled>
            Secondary Disabled
          </button>
          <button className="btn btn--secondary btn--small">Small</button>
          <button className="btn btn--secondary btn--medium">Medium</button>
          <button className="btn btn--secondary btn--large">Large</button>
          <button className="btn btn--secondary btn--jumbo">Jumbo</button>
        </div>
      </section>

      {/* Light Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Light Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--light">Light</button>
          <button className="btn btn--light" disabled>
            Light Disabled
          </button>
          <button className="btn btn--light btn--small">Small</button>
          <button className="btn btn--light btn--medium">Medium</button>
          <button className="btn btn--light btn--large">Large</button>
          <button className="btn btn--light btn--jumbo">Jumbo</button>
        </div>
      </section>

      {/* Success Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Success Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--success">Success</button>
          <button className="btn btn--success" disabled>
            Success Disabled
          </button>
          <button className="btn btn--success btn--small">Small</button>
          <button className="btn btn--success btn--medium">Medium</button>
          <button className="btn btn--success btn--large">Large</button>
          <button className="btn btn--success btn--jumbo">Jumbo</button>
        </div>
      </section>

      {/* Warning Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Warning Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--warning">Warning</button>
          <button className="btn btn--warning" disabled>
            Warning Disabled
          </button>
          <button className="btn btn--warning btn--small">Small</button>
          <button className="btn btn--warning btn--medium">Medium</button>
          <button className="btn btn--warning btn--large">Large</button>
          <button className="btn btn--warning btn--jumbo">Jumbo</button>
        </div>
      </section>

      {/* Danger Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Danger Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--danger">Danger</button>
          <button className="btn btn--danger" disabled>
            Danger Disabled
          </button>
          <button className="btn btn--danger btn--small">Small</button>
          <button className="btn btn--danger btn--medium">Medium</button>
          <button className="btn btn--danger btn--large">Large</button>
          <button className="btn btn--danger btn--jumbo">Jumbo</button>
        </div>
      </section>

      {/* Info Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Info Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--info">Info</button>
          <button className="btn btn--info" disabled>
            Info Disabled
          </button>
          <button className="btn btn--info btn--small">Small</button>
          <button className="btn btn--info btn--medium">Medium</button>
          <button className="btn btn--info btn--large">Large</button>
          <button className="btn btn--info btn--jumbo">Jumbo</button>
        </div>
      </section>

      {/* Ghost Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Ghost Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--ghost">
            <span>Ghost Button</span>
          </button>
          <button className="btn btn--ghost" disabled>
            <span>Ghost Disabled</span>
          </button>
          <button className="btn btn--ghost btn--small">
            <span>Small</span>
          </button>
          <button className="btn btn--ghost btn--medium">
            <span>Medium</span>
          </button>
          <button className="btn btn--ghost btn--large">
            <span>Large</span>
          </button>
          <button className="btn btn--ghost btn--jumbo">
            <span>Jumbo</span>
          </button>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Icon Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--icon">
            <img src="/icons/eye.svg" alt="Icon" />
          </button>
          <button className="btn btn--primary btn--icon">
            <img src="/icons/eye.svg" alt="Icon" />
          </button>
          <button className="btn btn--secondary btn--icon">
            <img src="/icons/eye.svg" alt="Icon" />
          </button>
          <button className="btn btn--icon" disabled>
            <img src="/icons/eye.svg" alt="Icon" />
          </button>
        </div>
      </section>

      {/* Icon with Text Buttons */}
      <section className="mb-8">
        <h2 className="mb-4">Icon with Text Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className="btn btn--icon-text">
            <img src="/icons/clipboard-check.svg" alt="Icon" />
            <span>Default</span>
          </button>
          <button className="btn btn--primary btn--icon-text">
            <img src="/icons/clipboard-check.svg" alt="Icon" />
            <span>Primary</span>
          </button>
          <button className="btn btn--secondary btn--icon-text">
            <img src="/icons/clipboard-check.svg" alt="Icon" />
            <span>Secondary</span>
          </button>
          <button className="btn btn--icon-text" disabled>
            <img src="/icons/clipboard-check.svg" alt="Icon" />
            <span>Disabled</span>
          </button>
        </div>
      </section>
    </div>
  )
};
