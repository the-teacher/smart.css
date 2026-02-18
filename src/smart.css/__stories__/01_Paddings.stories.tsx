import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "1-UI-Kit/1-Paddings",
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
.padding-demo-outer {
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  display: inline-block;
  margin: 10px;
}

.padding-demo-inner {
  background-color: #fff3e0;
  border: 2px solid #f57c00;
  min-width: 80px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.padding-demo-section {
  margin-bottom: 30px;
}

.padding-demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
}
</style>
`;

export const AllPaddingUtilities: Story = {
  render: () => (
    <div className="p-20">
      <div dangerouslySetInnerHTML={{ __html: demoStyles }} />

      <h2 className="mb-20">All Padding Utilities Demo</h2>

      {/* All Sides Padding */}
      <div className="padding-demo-section">
        <h3 className="mb-20">All Sides Padding (p-*)</h3>
        <div className="padding-demo-row">
          <div className="padding-demo-outer p-0">
            <div className="padding-demo-inner">p-0</div>
          </div>
          <div className="padding-demo-outer p-2">
            <div className="padding-demo-inner">p-2</div>
          </div>
          <div className="padding-demo-outer p-4">
            <div className="padding-demo-inner">p-4</div>
          </div>
          <div className="padding-demo-outer p-6">
            <div className="padding-demo-inner">p-6</div>
          </div>
          <div className="padding-demo-outer p-8">
            <div className="padding-demo-inner">p-8</div>
          </div>
          <div className="padding-demo-outer p-10">
            <div className="padding-demo-inner">p-10</div>
          </div>
          <div className="padding-demo-outer p-12">
            <div className="padding-demo-inner">p-12</div>
          </div>
          <div className="padding-demo-outer p-14">
            <div className="padding-demo-inner">p-14</div>
          </div>
          <div className="padding-demo-outer p-16">
            <div className="padding-demo-inner">p-16</div>
          </div>
          <div className="padding-demo-outer p-18">
            <div className="padding-demo-inner">p-18</div>
          </div>
          <div className="padding-demo-outer p-20">
            <div className="padding-demo-inner">p-20</div>
          </div>
          <div className="padding-demo-outer p-24">
            <div className="padding-demo-inner">p-24</div>
          </div>
          <div className="padding-demo-outer p-28">
            <div className="padding-demo-inner">p-28</div>
          </div>
          <div className="padding-demo-outer p-32">
            <div className="padding-demo-inner">p-32</div>
          </div>
          <div className="padding-demo-outer p-36">
            <div className="padding-demo-inner">p-36</div>
          </div>
          <div className="padding-demo-outer p-40">
            <div className="padding-demo-inner">p-40</div>
          </div>
        </div>
      </div>

      {/* Top Padding */}
      <div className="padding-demo-section">
        <h3 className="mb-20">Top Padding (pt-*)</h3>
        <div className="padding-demo-row">
          <div className="padding-demo-outer pt-0">
            <div className="padding-demo-inner">pt-0</div>
          </div>
          <div className="padding-demo-outer pt-2">
            <div className="padding-demo-inner">pt-2</div>
          </div>
          <div className="padding-demo-outer pt-4">
            <div className="padding-demo-inner">pt-4</div>
          </div>
          <div className="padding-demo-outer pt-6">
            <div className="padding-demo-inner">pt-6</div>
          </div>
          <div className="padding-demo-outer pt-8">
            <div className="padding-demo-inner">pt-8</div>
          </div>
          <div className="padding-demo-outer pt-10">
            <div className="padding-demo-inner">pt-10</div>
          </div>
          <div className="padding-demo-outer pt-12">
            <div className="padding-demo-inner">pt-12</div>
          </div>
          <div className="padding-demo-outer pt-14">
            <div className="padding-demo-inner">pt-14</div>
          </div>
          <div className="padding-demo-outer pt-16">
            <div className="padding-demo-inner">pt-16</div>
          </div>
          <div className="padding-demo-outer pt-18">
            <div className="padding-demo-inner">pt-18</div>
          </div>
          <div className="padding-demo-outer pt-20">
            <div className="padding-demo-inner">pt-20</div>
          </div>
          <div className="padding-demo-outer pt-24">
            <div className="padding-demo-inner">pt-24</div>
          </div>
          <div className="padding-demo-outer pt-28">
            <div className="padding-demo-inner">pt-28</div>
          </div>
          <div className="padding-demo-outer pt-32">
            <div className="padding-demo-inner">pt-32</div>
          </div>
          <div className="padding-demo-outer pt-36">
            <div className="padding-demo-inner">pt-36</div>
          </div>
          <div className="padding-demo-outer pt-40">
            <div className="padding-demo-inner">pt-40</div>
          </div>
        </div>
      </div>

      {/* Right Padding */}
      <div className="padding-demo-section">
        <h3 className="mb-20">Right Padding (pr-*)</h3>
        <div className="padding-demo-row">
          <div className="padding-demo-outer pr-0">
            <div className="padding-demo-inner">pr-0</div>
          </div>
          <div className="padding-demo-outer pr-2">
            <div className="padding-demo-inner">pr-2</div>
          </div>
          <div className="padding-demo-outer pr-4">
            <div className="padding-demo-inner">pr-4</div>
          </div>
          <div className="padding-demo-outer pr-6">
            <div className="padding-demo-inner">pr-6</div>
          </div>
          <div className="padding-demo-outer pr-8">
            <div className="padding-demo-inner">pr-8</div>
          </div>
          <div className="padding-demo-outer pr-10">
            <div className="padding-demo-inner">pr-10</div>
          </div>
          <div className="padding-demo-outer pr-12">
            <div className="padding-demo-inner">pr-12</div>
          </div>
          <div className="padding-demo-outer pr-14">
            <div className="padding-demo-inner">pr-14</div>
          </div>
          <div className="padding-demo-outer pr-16">
            <div className="padding-demo-inner">pr-16</div>
          </div>
          <div className="padding-demo-outer pr-18">
            <div className="padding-demo-inner">pr-18</div>
          </div>
          <div className="padding-demo-outer pr-20">
            <div className="padding-demo-inner">pr-20</div>
          </div>
          <div className="padding-demo-outer pr-24">
            <div className="padding-demo-inner">pr-24</div>
          </div>
          <div className="padding-demo-outer pr-28">
            <div className="padding-demo-inner">pr-28</div>
          </div>
          <div className="padding-demo-outer pr-32">
            <div className="padding-demo-inner">pr-32</div>
          </div>
          <div className="padding-demo-outer pr-36">
            <div className="padding-demo-inner">pr-36</div>
          </div>
          <div className="padding-demo-outer pr-40">
            <div className="padding-demo-inner">pr-40</div>
          </div>
        </div>
      </div>

      {/* Bottom Padding */}
      <div className="padding-demo-section">
        <h3 className="mb-20">Bottom Padding (pb-*)</h3>
        <div className="padding-demo-row">
          <div className="padding-demo-outer pb-0">
            <div className="padding-demo-inner">pb-0</div>
          </div>
          <div className="padding-demo-outer pb-2">
            <div className="padding-demo-inner">pb-2</div>
          </div>
          <div className="padding-demo-outer pb-4">
            <div className="padding-demo-inner">pb-4</div>
          </div>
          <div className="padding-demo-outer pb-6">
            <div className="padding-demo-inner">pb-6</div>
          </div>
          <div className="padding-demo-outer pb-8">
            <div className="padding-demo-inner">pb-8</div>
          </div>
          <div className="padding-demo-outer pb-10">
            <div className="padding-demo-inner">pb-10</div>
          </div>
          <div className="padding-demo-outer pb-12">
            <div className="padding-demo-inner">pb-12</div>
          </div>
          <div className="padding-demo-outer pb-14">
            <div className="padding-demo-inner">pb-14</div>
          </div>
          <div className="padding-demo-outer pb-16">
            <div className="padding-demo-inner">pb-16</div>
          </div>
          <div className="padding-demo-outer pb-18">
            <div className="padding-demo-inner">pb-18</div>
          </div>
          <div className="padding-demo-outer pb-20">
            <div className="padding-demo-inner">pb-20</div>
          </div>
          <div className="padding-demo-outer pb-24">
            <div className="padding-demo-inner">pb-24</div>
          </div>
          <div className="padding-demo-outer pb-28">
            <div className="padding-demo-inner">pb-28</div>
          </div>
          <div className="padding-demo-outer pb-32">
            <div className="padding-demo-inner">pb-32</div>
          </div>
          <div className="padding-demo-outer pb-36">
            <div className="padding-demo-inner">pb-36</div>
          </div>
          <div className="padding-demo-outer pb-40">
            <div className="padding-demo-inner">pb-40</div>
          </div>
        </div>
      </div>

      {/* Left Padding */}
      <div className="padding-demo-section">
        <h3 className="mb-20">Left Padding (pl-*)</h3>
        <div className="padding-demo-row">
          <div className="padding-demo-outer pl-0">
            <div className="padding-demo-inner">pl-0</div>
          </div>
          <div className="padding-demo-outer pl-2">
            <div className="padding-demo-inner">pl-2</div>
          </div>
          <div className="padding-demo-outer pl-4">
            <div className="padding-demo-inner">pl-4</div>
          </div>
          <div className="padding-demo-outer pl-6">
            <div className="padding-demo-inner">pl-6</div>
          </div>
          <div className="padding-demo-outer pl-8">
            <div className="padding-demo-inner">pl-8</div>
          </div>
          <div className="padding-demo-outer pl-10">
            <div className="padding-demo-inner">pl-10</div>
          </div>
          <div className="padding-demo-outer pl-12">
            <div className="padding-demo-inner">pl-12</div>
          </div>
          <div className="padding-demo-outer pl-14">
            <div className="padding-demo-inner">pl-14</div>
          </div>
          <div className="padding-demo-outer pl-16">
            <div className="padding-demo-inner">pl-16</div>
          </div>
          <div className="padding-demo-outer pl-18">
            <div className="padding-demo-inner">pl-18</div>
          </div>
          <div className="padding-demo-outer pl-20">
            <div className="padding-demo-inner">pl-20</div>
          </div>
          <div className="padding-demo-outer pl-24">
            <div className="padding-demo-inner">pl-24</div>
          </div>
          <div className="padding-demo-outer pl-28">
            <div className="padding-demo-inner">pl-28</div>
          </div>
          <div className="padding-demo-outer pl-32">
            <div className="padding-demo-inner">pl-32</div>
          </div>
          <div className="padding-demo-outer pl-36">
            <div className="padding-demo-inner">pl-36</div>
          </div>
          <div className="padding-demo-outer pl-40">
            <div className="padding-demo-inner">pl-40</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CombinedPaddings: Story = {
  render: () => (
    <div className="p-20">
      <div dangerouslySetInnerHTML={{ __html: demoStyles }} />

      <h3 className="mb-20">Combined Paddings</h3>

      <div className="padding-demo-section">
        <h4 className="mb-10">Mixed Padding Examples</h4>
        <div className="padding-demo-row">
          <div className="padding-demo-outer pt-20 pb-4">
            <div className="padding-demo-inner">pt-20 pb-4</div>
          </div>
          <div className="padding-demo-outer pl-24 pr-8">
            <div className="padding-demo-inner">pl-24 pr-8</div>
          </div>
          <div className="padding-demo-outer pt-16 pr-12 pb-8 pl-4">
            <div className="padding-demo-inner">pt-16 pr-12 pb-8 pl-4</div>
          </div>
          <div className="padding-demo-outer p-20 pt-40">
            <div className="padding-demo-inner">p-20 pt-40</div>
          </div>
        </div>
      </div>

      <div className="padding-demo-section">
        <h4 className="mb-10">Practical Examples</h4>
        <div className="padding-demo-row">
          <div className="padding-demo-outer p-16">
            <div className="padding-demo-inner">Card padding</div>
          </div>
          <div className="padding-demo-outer pt-8 pb-8 pl-16 pr-16">
            <div className="padding-demo-inner">Button padding</div>
          </div>
          <div className="padding-demo-outer p-12">
            <div className="padding-demo-inner">Input padding</div>
          </div>
          <div className="padding-demo-outer p-24">
            <div className="padding-demo-inner">Section padding</div>
          </div>
        </div>
      </div>
    </div>
  ),
};
