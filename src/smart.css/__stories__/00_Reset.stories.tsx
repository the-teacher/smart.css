import type { Meta, StoryObj } from '@storybook/react';
import '@smart.css/UI.scss';

const meta: Meta = {
  title: '1-UI-Kit/0-Reset',
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Typography: Story = {
  render: () => (
    <div className="p-20">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <p className="mb-20">
        This is a paragraph with default body font size (1.6rem). The base font
        size is set to 62.5% (10px) for easy rem calculations.
      </p>

      <p className="mb-20">
        Font with antialiasing enabled for smooth rendering.
      </p>
    </div>
  ),
};

export const Lists: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">List Styles</h3>

      <div className="mb-20">
        <h4 className="mb-20">Unordered List (circle bullets)</h4>
        <ul className="ml-20">
          <li className="mb-10">First item</li>
          <li className="mb-10">Second item</li>
          <li className="mb-10">
            Third item with longer text to show wrapping
          </li>
        </ul>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">Ordered List (decimal numbers)</h4>
        <ol className="ml-20">
          <li className="mb-10">First numbered item</li>
          <li className="mb-10">Second numbered item</li>
          <li className="mb-10">Third numbered item with longer text</li>
        </ol>
      </div>
    </div>
  ),
};

export const FormElements: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Form Elements Font Inheritance</h3>

      <div className="mb-20">
        <label className="form--label mb-20">Input Field</label>
        <input
          className="form-input p-20 pl-20 pr-20"
          placeholder="Inherits Roboto font family"
        />
      </div>

      <div className="mb-20">
        <label className="form--label mb-20">Select Field</label>
        <select className="form-select p-20 pl-20 pr-20">
          <option>Inherits Roboto font family</option>
          <option>Option 2</option>
        </select>
      </div>

      <div className="mb-20">
        <label className="form--label mb-20">Textarea</label>
        <textarea
          className="form-textarea p-20 pl-20 pr-20"
          rows={3}
          placeholder="Inherits Roboto font family"
        />
      </div>

      <div className="mb-20">
        <button className="btn btn--primary p-20">
          Button with Roboto font
        </button>
      </div>
    </div>
  ),
};

export const BoxModel: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Box Model Reset</h3>

      <div className="mb-20">
        <h4 className="mb-20">All elements have box-sizing: border-box</h4>
        <div
          className="p-20 mb-20"
          style={{
            width: '200px',
            border: '10px solid #ccc',
            backgroundColor: '#f0f0f0',
          }}
        >
          This div is 200px wide including padding and border
        </div>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">
          All elements have margin: 0, padding: 0 by default
        </h4>
        <div
          className="mb-20"
          style={{ backgroundColor: '#e0e0e0', border: '1px solid #999' }}
        >
          No default margins or padding
        </div>
        <div style={{ backgroundColor: '#e0e0e0', border: '1px solid #999' }}>
          Elements touch each other
        </div>
      </div>
    </div>
  ),
};
