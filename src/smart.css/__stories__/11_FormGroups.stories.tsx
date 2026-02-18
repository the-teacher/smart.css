import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss"; // Assuming text styles are defined here
import AppIcon from "@components/AppIcon"; // Import AppIcon

const meta: Meta = {
  title: "1-UI-Kit/11-FormGroups",
  // component: "div",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export default meta;
type Story = StoryObj;

// Form group story
export const FormGroupExample: Story = {
  render: () => (
    <div className="p-20" style={{ maxWidth: "400px" }}>
      <div className="form-group mb-24">
        <label
          className="form--label flex items-center text--dark gap-4"
          htmlFor="username"
        >
          Username
          <AppIcon size={16} type="eye" alt="eye" />
        </label>
        <div className="flex gap-8 form-group__with-icon">
          <input
            className="form-input pt-8 pb-8 pl-12 pr-12"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
          <div className="form-group--icon pl-8 pr-8">
            <AppIcon size={24} type="search" alt="search" />
          </div>
        </div>
        <div className="form-group--info text--info text--small flex items-center gap-8">
          <AppIcon size={16} type="refresh" alt="refresh" />
          Please enter a unique username.
        </div>
      </div>

      <div className="form-group mb-24">
        <label
          className="form--label flex items-center text--dark gap-4"
          htmlFor="email"
        >
          <AppIcon size={16} type="search" alt="search" />
          Email
        </label>
        <div className="flex gap-8 form-group__with-icon">
          <input
            className="form-input pt-8 pb-8 pl-12 pr-12"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
          <div className="form-group--icon pl-8 pr-8">
            <AppIcon size={24} type="search" alt="search" />
          </div>
        </div>
        <div className="form-group--info text--danger text--small">
          Please enter a valid email address.
        </div>
      </div>

      <div className="form-group mb-24">
        <label
          className="form--label flex items-center text--dark gap-4"
          htmlFor="password"
        >
          <AppIcon size={16} type="eye-off" alt="eye-off" />
          Password
        </label>
        <div className="flex gap-8 form-group__with-icon">
          <input
            className="form-input pt-8 pb-8 pl-12 pr-12"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <div className="form-group--icon pl-8 pr-8">
            <AppIcon size={24} type="search" alt="search" />
          </div>
        </div>
        <div className="form-group--info text--success text--small">
          Your password is strong.
        </div>
      </div>
    </div>
  ),
};
