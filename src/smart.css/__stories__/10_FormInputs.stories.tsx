import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";
import AppIcon from "@components/AppIcon";

const meta: Meta = {
  title: "1-UI-Kit/10-FormInputs",
  // component: "input",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "tablet"
    }
  }
};

export default meta;
type Story = StoryObj;

// All form inputs story
export const AllFormInputs: Story = {
  render: () => (
    <div className="p-20">
      <div className="mb-32">
        <h3 className="mb-16">Text Input</h3>
        <div className="mb-16">
          <h4 className="mb-8">Default</h4>
          <input
            className="form-input pt-8 pb-8 pl-12 pr-12"
            placeholder="Default Input"
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Error</h4>
          <input
            className="form-input form-input--error pt-8 pb-8 pl-12 pr-12"
            placeholder="Error Input"
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Success</h4>
          <input
            className="form-input form-input--success pt-8 pb-8 pl-12 pr-12"
            placeholder="Success Input"
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Disabled</h4>
          <input
            className="form-input pt-8 pb-8 pl-12 pr-12"
            placeholder="Disabled Input"
            disabled
          />
        </div>
      </div>

      <div className="mb-32">
        <h3 className="mb-16">Select Input</h3>
        <div className="mb-16">
          <h4 className="mb-8">Default</h4>
          <select className="form-select pt-8 pb-8 pl-12 pr-12">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Error</h4>
          <select className="form-select form-input--error pt-8 pb-8 pl-12 pr-12">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Success</h4>
          <select className="form-select form-input--success pt-8 pb-8 pl-12 pr-12">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Disabled</h4>
          <select className="form-select pt-8 pb-8 pl-12 pr-12" disabled>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="mb-32">
        <h3 className="mb-16">Textarea Input</h3>
        <div className="mb-16">
          <h4 className="mb-8">Default</h4>
          <textarea
            className="form-textarea pt-8 pb-8 pl-12 pr-12"
            placeholder="Enter text here"
            rows={4}
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Error</h4>
          <textarea
            className="form-textarea form-input--error pt-8 pb-8 pl-12 pr-12"
            placeholder="Error Textarea"
            rows={4}
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Success</h4>
          <textarea
            className="form-textarea form-input--success pt-8 pb-8 pl-12 pr-12"
            placeholder="Success Textarea"
            rows={4}
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Disabled</h4>
          <textarea
            className="form-textarea pt-8 pb-8 pl-12 pr-12"
            placeholder="Disabled Textarea"
            rows={4}
            disabled
          />
        </div>
      </div>

      <div className="mb-32">
        <h3 className="mb-16">Search Input</h3>
        <div className="mb-16">
          <h4 className="mb-8">Default Search</h4>
          <input
            className="form-input form-input__search pt-8 pb-8 pl-40 pr-12"
            placeholder="Search..."
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Error Search</h4>
          <input
            className="form-input form-input__search form-input--error pt-8 pb-8 pl-40 pr-12"
            placeholder="Error Search Input"
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Success Search</h4>
          <input
            className="form-input form-input__search form-input--success pt-8 pb-8 pl-40 pr-12"
            placeholder="Success Search Input"
          />
        </div>
        <div className="mb-16">
          <h4 className="mb-8">Disabled Search</h4>
          <input
            className="form-input form-input__search pt-8 pb-8 pl-40 pr-12"
            placeholder="Disabled Search Input"
            disabled
          />
        </div>
      </div>
    </div>
  )
};

// Form input with icon story
export const FormInputWithIcon: Story = {
  render: () => (
    <div className="p-20">
      <div className="form-group mb-24 flex flex-col gap-8">
        <label
          className="form--label flex items-center text--dark"
          htmlFor="icon-input-1"
        >
          Input with Icon
        </label>
        <div className="flex flex--row gap-8 form-group__with-icon">
          <input
            className="form-input pt-8 pb-8 pl-12 pr-12"
            id="icon-input-1"
            type="text"
            placeholder="Enter text"
          />
          <div className="form-group--icon pl-8 pr-8">
            <AppIcon size={24} type="search" alt="search" />
          </div>
        </div>
      </div>

      <div className="form-group mb-24 flex flex-col gap-8">
        <label
          className="form--label flex items-center text--dark"
          htmlFor="icon-input-2"
        >
          Input with Icon
        </label>
        <div className="flex flex--row gap-8 form-group__with-icon">
          <div className="form-group--icon pl-8 pr-8">
            <AppIcon size={24} type="search" alt="search" />
          </div>
          <input
            className="form-input pt-8 pb-8 pl-12 pr-12"
            id="icon-input-2"
            type="text"
            placeholder="Enter text"
          />
        </div>
      </div>

      <div className="form-group mb-24 flex flex-col gap-8">
        <label
          className="form--label flex items-center text--dark"
          htmlFor="icon-input-3"
        >
          Input with Icon
        </label>
        <div className="flex flex--row gap-8 form-group__with-icon">
          <div className="form-group--icon pl-8 pr-8">
            <AppIcon size={24} type="search" alt="search" />
          </div>
          <div className="form-group--icon pl-8 pr-8">
            <AppIcon size={24} type="search" alt="search" />
          </div>
          <input
            className="form-input pt-8 pb-8 pl-12 pr-12"
            id="icon-input-3"
            type="text"
            placeholder="Enter text"
          />
          <div className="form-group--icon pl-8 pr-8">
            <AppIcon size={24} type="search" alt="search" />
          </div>
        </div>
      </div>
    </div>
  )
};
