import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "1-UI-Kit/4-Flex",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export default meta;
type Story = StoryObj;

// CSS classes for demonstration
const demoStyles = `
<style>
.flex-demo-container {
  background-color: #f5f5f5;
  border: 2px solid #999;
  padding: 16px;
  margin-bottom: 16px;
  min-height: 120px;
}

.flex-demo-item {
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  padding: 12px;
  margin: 4px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  min-width: 60px;
}

.flex-demo-item--tall {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-demo-item--wide {
  min-width: 120px;
}

.flex-demo-section {
  margin-bottom: 40px;
}

.flex-demo-label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}
</style>
`;

export const AllFlexUtilities: Story = {
  render: () => (
    <div className="p-20">
      <div dangerouslySetInnerHTML={{ __html: demoStyles }} />

      <h2 className="mb-20">All Flex Utilities Demo</h2>

      {/* Basic Flex */}
      <div className="flex-demo-section">
        <h3 className="mb-20">Basic Flex Display</h3>

        <div className="flex-demo-label">Default block layout (no flex)</div>
        <div className="flex-demo-container">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>

        <div className="flex-demo-label">flex - Flexbox layout</div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>
      </div>

      {/* Flex Direction */}
      <div className="flex-demo-section">
        <h3 className="mb-20">Flex Direction</h3>

        <div className="flex-demo-label">flex (default row direction)</div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>

        <div className="flex-demo-label">flex flex-col - Column direction</div>
        <div className="flex-demo-container flex flex-col">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>
      </div>

      {/* Justify Content */}
      <div className="flex-demo-section">
        <h3 className="mb-20">Justify Content (Main Axis)</h3>

        <div className="flex-demo-label">flex (default - flex-start)</div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>

        <div className="flex-demo-label">flex justify-center</div>
        <div className="flex-demo-container flex justify-center">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>

        <div className="flex-demo-label">flex justify-end</div>
        <div className="flex-demo-container flex justify-end">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>

        <div className="flex-demo-label">flex justify-between</div>
        <div className="flex-demo-container flex justify-between">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>
      </div>

      {/* Align Items */}
      <div className="flex-demo-section">
        <h3 className="mb-20">Align Items (Cross Axis)</h3>

        <div className="flex-demo-label">flex (default - stretch)</div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item">Short</div>
          <div className="flex-demo-item flex-demo-item--tall">Tall Item</div>
          <div className="flex-demo-item">Short</div>
        </div>

        <div className="flex-demo-label">flex items-start</div>
        <div className="flex-demo-container flex items-start">
          <div className="flex-demo-item">Short</div>
          <div className="flex-demo-item flex-demo-item--tall">Tall Item</div>
          <div className="flex-demo-item">Short</div>
        </div>

        <div className="flex-demo-label">flex items-center</div>
        <div className="flex-demo-container flex items-center">
          <div className="flex-demo-item">Short</div>
          <div className="flex-demo-item flex-demo-item--tall">Tall Item</div>
          <div className="flex-demo-item">Short</div>
        </div>

        <div className="flex-demo-label">flex items-end</div>
        <div className="flex-demo-container flex items-end">
          <div className="flex-demo-item">Short</div>
          <div className="flex-demo-item flex-demo-item--tall">Tall Item</div>
          <div className="flex-demo-item">Short</div>
        </div>
      </div>

      {/* Flex Wrap */}
      <div className="flex-demo-section">
        <h3 className="mb-20">Flex Wrap</h3>

        <div className="flex-demo-label">flex (default - nowrap)</div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 1</div>
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 2</div>
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 3</div>
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 4</div>
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 5</div>
        </div>

        <div className="flex-demo-label">flex flex-wrap</div>
        <div className="flex-demo-container flex flex-wrap">
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 1</div>
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 2</div>
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 3</div>
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 4</div>
          <div className="flex-demo-item flex-demo-item--wide">Wide Item 5</div>
        </div>
      </div>

      {/* Flex Grow/Shrink */}
      <div className="flex-demo-section">
        <h3 className="mb-20">Flex Grow/Shrink</h3>

        <div className="flex-demo-label">flex (default sizing)</div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
        </div>

        <div className="flex-demo-label">
          flex with flex-1 (equal distribution)
        </div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item flex-1">flex-1</div>
          <div className="flex-demo-item flex-1">flex-1</div>
          <div className="flex-demo-item flex-1">flex-1</div>
        </div>

        <div className="flex-demo-label">
          flex with mixed flex-1 and flex-none
        </div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item flex-none">flex-none</div>
          <div className="flex-demo-item flex-1">flex-1 (grows)</div>
          <div className="flex-demo-item flex-none">flex-none</div>
        </div>

        <div className="flex-demo-label">flex with flex-auto</div>
        <div className="flex-demo-container flex">
          <div className="flex-demo-item flex-auto">flex-auto</div>
          <div className="flex-demo-item flex-auto">
            flex-auto (longer content)
          </div>
          <div className="flex-demo-item flex-auto">flex-auto</div>
        </div>
      </div>

      {/* Combined Examples */}
      <div className="flex-demo-section">
        <h3 className="mb-20">Combined Flex Utilities</h3>

        <div className="flex-demo-label">
          flex justify-center items-center (perfect centering)
        </div>
        <div className="flex-demo-container flex justify-center items-center">
          <div className="flex-demo-item">Perfectly Centered</div>
        </div>

        <div className="flex-demo-label">
          flex flex-col items-center justify-between
        </div>
        <div
          className="flex-demo-container flex flex-col items-center justify-between"
          style={{ height: "160px" }}
        >
          <div className="flex-demo-item">Top Item</div>
          <div className="flex-demo-item">Middle Item</div>
          <div className="flex-demo-item">Bottom Item</div>
        </div>

        <div className="flex-demo-label">
          flex flex-wrap justify-center items-center
        </div>
        <div className="flex-demo-container flex flex-wrap justify-center items-center">
          <div className="flex-demo-item">Item 1</div>
          <div className="flex-demo-item">Item 2</div>
          <div className="flex-demo-item">Item 3</div>
          <div className="flex-demo-item">Item 4</div>
          <div className="flex-demo-item">Item 5</div>
          <div className="flex-demo-item">Item 6</div>
        </div>

        <div className="flex-demo-label">
          flex justify-between items-center (navigation layout)
        </div>
        <div className="flex-demo-container flex justify-between items-center">
          <div className="flex-demo-item">Logo</div>
          <div className="flex justify-center items-center">
            <div className="flex-demo-item">Nav 1</div>
            <div className="flex-demo-item">Nav 2</div>
            <div className="flex-demo-item">Nav 3</div>
          </div>
          <div className="flex-demo-item">Profile</div>
        </div>
      </div>

      {/* Practical Examples */}
      <div className="flex-demo-section">
        <h3 className="mb-20">Practical Layout Examples</h3>

        <div className="flex-demo-label">Card with flex layout</div>
        <div
          className="flex-demo-container flex items-center justify-between"
          style={{ backgroundColor: "#fff", border: "1px solid #ddd" }}
        >
          <div className="flex items-center">
            <div
              className="flex-demo-item"
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                margin: "0 12px 0 0",
              }}
            >
              👤
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                John Doe
              </div>
              <div style={{ fontSize: "12px", color: "#666" }}>
                Software Developer
              </div>
            </div>
          </div>
          <div
            className="flex-demo-item"
            style={{ backgroundColor: "#4caf50", color: "white" }}
          >
            Follow
          </div>
        </div>

        <div className="flex-demo-label">Form layout with flex</div>
        <div className="flex-demo-container flex flex-wrap">
          <div className="flex-demo-item flex-1" style={{ minWidth: "200px" }}>
            Name Input
          </div>
          <div className="flex-demo-item flex-1" style={{ minWidth: "200px" }}>
            Email Input
          </div>
          <div className="flex-demo-item flex-none">Submit</div>
        </div>

        <div className="flex-demo-label">Sidebar layout</div>
        <div className="flex-demo-container flex" style={{ height: "200px" }}>
          <div
            className="flex-demo-item flex-none"
            style={{ width: "200px", height: "100%" }}
          >
            Sidebar
          </div>
          <div className="flex-demo-item flex-1" style={{ height: "100%" }}>
            Main Content Area
          </div>
        </div>
      </div>
    </div>
  ),
};
