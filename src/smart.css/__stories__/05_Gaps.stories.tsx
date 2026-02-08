import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "1-UI-Kit/5-Gaps",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "tablet"
    }
  }
};

export default meta;
type Story = StoryObj;

// CSS classes for demonstration
const demoStyles = `
<style>
.gap-demo-container {
  background-color: #f5f5f5;
  border: 2px solid #999;
  padding: 16px;
  margin-bottom: 16px;
  min-height: 80px;
}

.gap-demo-item {
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  padding: 12px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  min-width: 60px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gap-demo-section {
  margin-bottom: 40px;
}

.gap-demo-label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.gap-demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
`;

export const AllGapUtilities: Story = {
  render: () => (
    <div className="p-20">
      <div dangerouslySetInnerHTML={{ __html: demoStyles }} />

      <h2 className="mb-20">All Gap Utilities Demo</h2>

      {/* Small Gaps (0-10) */}
      <div className="gap-demo-section">
        <h3 className="mb-20">Small Gaps (0-1rem)</h3>

        <div className="gap-demo-label">gap-0 = 0rem (no gap)</div>
        <div className="gap-demo-container flex gap-0">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-2 = 0.2rem</div>
        <div className="gap-demo-container flex gap-2">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-4 = 0.4rem</div>
        <div className="gap-demo-container flex gap-4">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-6 = 0.6rem</div>
        <div className="gap-demo-container flex gap-6">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-8 = 0.8rem</div>
        <div className="gap-demo-container flex gap-8">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-10 = 1rem</div>
        <div className="gap-demo-container flex gap-10">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>
      </div>

      {/* Medium Gaps (12-20) */}
      <div className="gap-demo-section">
        <h3 className="mb-20">Medium Gaps (1.2-2rem)</h3>

        <div className="gap-demo-label">gap-12 = 1.2rem</div>
        <div className="gap-demo-container flex gap-12">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-16 = 1.6rem</div>
        <div className="gap-demo-container flex gap-16">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-20 = 2rem</div>
        <div className="gap-demo-container flex gap-20">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>
      </div>

      {/* Large Gaps (24-40) */}
      <div className="gap-demo-section">
        <h3 className="mb-20">Large Gaps (2.4-4rem)</h3>

        <div className="gap-demo-label">gap-24 = 2.4rem</div>
        <div className="gap-demo-container flex gap-24">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-32 = 3.2rem</div>
        <div className="gap-demo-container flex gap-32">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">gap-40 = 4rem</div>
        <div className="gap-demo-container flex gap-40">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>
      </div>

      {/* Flex Column Examples */}
      <div className="gap-demo-section">
        <h3 className="mb-20">Gaps with Flex Column</h3>

        <div className="gap-demo-label">flex flex-col gap-8</div>
        <div className="gap-demo-container flex flex-col gap-8">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>

        <div className="gap-demo-label">flex flex-col gap-16</div>
        <div className="gap-demo-container flex flex-col gap-16">
          <div className="gap-demo-item">Item 1</div>
          <div className="gap-demo-item">Item 2</div>
          <div className="gap-demo-item">Item 3</div>
        </div>
      </div>

      {/* Grid Examples */}
      <div className="gap-demo-section">
        <h3 className="mb-20">Gaps with CSS Grid</h3>

        <div className="gap-demo-label">grid gap-4</div>
        <div className="gap-demo-container gap-demo-grid gap-4">
          <div className="gap-demo-item">1</div>
          <div className="gap-demo-item">2</div>
          <div className="gap-demo-item">3</div>
          <div className="gap-demo-item">4</div>
          <div className="gap-demo-item">5</div>
          <div className="gap-demo-item">6</div>
        </div>

        <div className="gap-demo-label">grid gap-12</div>
        <div className="gap-demo-container gap-demo-grid gap-12">
          <div className="gap-demo-item">1</div>
          <div className="gap-demo-item">2</div>
          <div className="gap-demo-item">3</div>
          <div className="gap-demo-item">4</div>
          <div className="gap-demo-item">5</div>
          <div className="gap-demo-item">6</div>
        </div>

        <div className="gap-demo-label">grid gap-20</div>
        <div className="gap-demo-container gap-demo-grid gap-20">
          <div className="gap-demo-item">1</div>
          <div className="gap-demo-item">2</div>
          <div className="gap-demo-item">3</div>
          <div className="gap-demo-item">4</div>
          <div className="gap-demo-item">5</div>
          <div className="gap-demo-item">6</div>
        </div>
      </div>

      {/* Practical Examples */}
      <div className="gap-demo-section">
        <h3 className="mb-20">Practical Layout Examples</h3>

        <div className="gap-demo-label">Navigation with gap-16</div>
        <div className="gap-demo-container flex items-center gap-16">
          <div className="gap-demo-item">Home</div>
          <div className="gap-demo-item">About</div>
          <div className="gap-demo-item">Services</div>
          <div className="gap-demo-item">Contact</div>
        </div>

        <div className="gap-demo-label">Button group with gap-8</div>
        <div className="gap-demo-container flex gap-8">
          <div
            className="gap-demo-item"
            style={{ backgroundColor: "#4caf50", color: "white" }}
          >
            Save
          </div>
          <div
            className="gap-demo-item"
            style={{ backgroundColor: "#f44336", color: "white" }}
          >
            Cancel
          </div>
          <div
            className="gap-demo-item"
            style={{ backgroundColor: "#2196f3", color: "white" }}
          >
            Reset
          </div>
        </div>

        <div className="gap-demo-label">Card grid with gap-20</div>
        <div className="gap-demo-container gap-demo-grid gap-20">
          <div
            className="gap-demo-item"
            style={{ height: "80px", backgroundColor: "#fff3e0" }}
          >
            Card 1
          </div>
          <div
            className="gap-demo-item"
            style={{ height: "80px", backgroundColor: "#e8f5e8" }}
          >
            Card 2
          </div>
          <div
            className="gap-demo-item"
            style={{ height: "80px", backgroundColor: "#e3f2fd" }}
          >
            Card 3
          </div>
        </div>

        <div className="gap-demo-label">Form elements with gap-12</div>
        <div className="gap-demo-container flex flex-col gap-12">
          <div
            className="gap-demo-item"
            style={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
          >
            Name Input
          </div>
          <div
            className="gap-demo-item"
            style={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
          >
            Email Input
          </div>
          <div
            className="gap-demo-item"
            style={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
          >
            Message Textarea
          </div>
        </div>

        <div className="gap-demo-label">
          Responsive layout with gap-8 and flex-wrap
        </div>
        <div className="gap-demo-container flex flex-wrap gap-8">
          <div className="gap-demo-item" style={{ minWidth: "120px" }}>
            Feature 1
          </div>
          <div className="gap-demo-item" style={{ minWidth: "120px" }}>
            Feature 2
          </div>
          <div className="gap-demo-item" style={{ minWidth: "120px" }}>
            Feature 3
          </div>
          <div className="gap-demo-item" style={{ minWidth: "120px" }}>
            Feature 4
          </div>
          <div className="gap-demo-item" style={{ minWidth: "120px" }}>
            Feature 5
          </div>
        </div>
      </div>
    </div>
  )
};
