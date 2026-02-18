import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "1-UI-Kit/2-Margins",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export default meta;
type Story = StoryObj;

// CSS classes for demonstration
const demoStyles = `
<style>
.margin-demo-container {
  background-color: #f5f5f5;
  border: 2px dashed #999;
  padding: 5px;
  display: inline-block;
  margin: 5px;
}

.margin-demo-block {
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  min-width: 80px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.margin-demo-section {
  margin-bottom: 30px;
}

.margin-demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: flex-start;
}

.margin-auto-demo {
  width: 100%;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.margin-auto-block {
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}
</style>
`;

export const AllMarginUtilities: Story = {
  render: () => (
    <div className="p-20">
      <div dangerouslySetInnerHTML={{ __html: demoStyles }} />

      <h2 className="mb-20">All Margin Utilities Demo</h2>

      {/* Auto Margin */}
      <div className="margin-demo-section">
        <h3 className="mb-20">Auto Margin (mauto)</h3>
        <div className="margin-auto-demo">
          <div className="margin-auto-block mauto" style={{ width: "200px" }}>
            mauto - Centered with auto margins
          </div>
        </div>
      </div>

      {/* All Sides Margin */}
      <div className="margin-demo-section">
        <h3 className="mb-20">All Sides Margin (m-*)</h3>
        <div className="margin-demo-row">
          <div className="margin-demo-container">
            <div className="margin-demo-block m-0">m-0</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-2">m-2</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-4">m-4</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-6">m-6</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-8">m-8</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-10">m-10</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-12">m-12</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-14">m-14</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-16">m-16</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-18">m-18</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-20">m-20</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-24">m-24</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-28">m-28</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-32">m-32</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-36">m-36</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-40">m-40</div>
          </div>
        </div>
      </div>

      {/* Top Margin */}
      <div className="margin-demo-section">
        <h3 className="mb-20">Top Margin (mt-*)</h3>
        <div className="margin-demo-row">
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-0">mt-0</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-2">mt-2</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-4">mt-4</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-6">mt-6</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-8">mt-8</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-10">mt-10</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-12">mt-12</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-14">mt-14</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-16">mt-16</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-18">mt-18</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-20">mt-20</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-24">mt-24</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-28">mt-28</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-32">mt-32</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-36">mt-36</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-40">mt-40</div>
          </div>
        </div>
      </div>

      {/* Right Margin */}
      <div className="margin-demo-section">
        <h3 className="mb-20">Right Margin (mr-*)</h3>
        <div className="margin-demo-row">
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-0">mr-0</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-2">mr-2</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-4">mr-4</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-6">mr-6</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-8">mr-8</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-10">mr-10</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-12">mr-12</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-14">mr-14</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-16">mr-16</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-18">mr-18</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-20">mr-20</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-24">mr-24</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-28">mr-28</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-32">mr-32</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-36">mr-36</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mr-40">mr-40</div>
          </div>
        </div>
      </div>

      {/* Bottom Margin */}
      <div className="margin-demo-section">
        <h3 className="mb-20">Bottom Margin (mb-*)</h3>
        <div className="margin-demo-row">
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-0">mb-0</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-2">mb-2</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-4">mb-4</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-6">mb-6</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-8">mb-8</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-10">mb-10</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-12">mb-12</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-14">mb-14</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-16">mb-16</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-18">mb-18</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-20">mb-20</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-24">mb-24</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-28">mb-28</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-32">mb-32</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-36">mb-36</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-40">mb-40</div>
          </div>
        </div>
      </div>

      {/* Left Margin */}
      <div className="margin-demo-section">
        <h3 className="mb-20">Left Margin (ml-*)</h3>
        <div className="margin-demo-row">
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-0">ml-0</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-2">ml-2</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-4">ml-4</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-6">ml-6</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-8">ml-8</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-10">ml-10</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-12">ml-12</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-14">ml-14</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-16">ml-16</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-18">ml-18</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-20">ml-20</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-24">ml-24</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-28">ml-28</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-32">ml-32</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-36">ml-36</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-40">ml-40</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CombinedMargins: Story = {
  render: () => (
    <div className="p-20">
      <div dangerouslySetInnerHTML={{ __html: demoStyles }} />

      <h3 className="mb-20">Combined Margins</h3>

      <div className="margin-demo-section">
        <h4 className="mb-10">Mixed Margin Examples</h4>
        <div className="margin-demo-row">
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-20 mb-4">mt-20 mb-4</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block ml-24 mr-8">ml-24 mr-8</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-16 mr-12 mb-8 ml-4">
              mt-16 mr-12 mb-8 ml-4
            </div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-20 mt-40">m-20 mt-40</div>
          </div>
        </div>
      </div>

      <div className="margin-demo-section">
        <h4 className="mb-10">Practical Examples</h4>
        <div className="margin-demo-row">
          <div className="margin-demo-container">
            <div className="margin-demo-block m-16">Card margin</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mt-8 mb-8 ml-16 mr-16">
              Button margin
            </div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block mb-12">List item margin</div>
          </div>
          <div className="margin-demo-container">
            <div className="margin-demo-block m-24">Section margin</div>
          </div>
        </div>
      </div>

      <div className="margin-demo-section">
        <h4 className="mb-10">Auto Margin Examples</h4>
        <div className="margin-auto-demo">
          <div className="margin-auto-block mauto" style={{ width: "150px" }}>
            mauto - Small centered block
          </div>
        </div>
        <div className="margin-auto-demo">
          <div className="margin-auto-block mauto" style={{ width: "300px" }}>
            mauto - Large centered block
          </div>
        </div>
      </div>
    </div>
  ),
};
