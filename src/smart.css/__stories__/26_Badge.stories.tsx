import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "2-UI-Kit-Blocks/4-Badge",
  parameters: {
    docs: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const BadgeVariants: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Badge Variants</h2>
        </div>
        <div className="card--content p-20">
          <div className="flex gap-12 flex-wrap items-center">
            <span className="badge">Default</span>
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-danger">Danger</span>
            <span className="badge badge-info">Info</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BadgesInContext: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Badges in Context</h2>
        </div>
        <div className="card--content p-20">
          <div className="mb-20">
            <h3 className="fs-16 bold mb-8">Status Indicators</h3>
            <div className="flex gap-16 flex-wrap">
              <div>
                <p className="mb-8 text-secondary">Granted:</p>
                <span className="badge badge-success">granted</span>
              </div>
              <div>
                <p className="mb-8 text-secondary">Pending:</p>
                <span className="badge badge-warning">pending</span>
              </div>
              <div>
                <p className="mb-8 text-secondary">Denied:</p>
                <span className="badge badge-danger">denied</span>
              </div>
            </div>
          </div>

          <div
            className="mb-20"
            style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}
          >
            <h3 className="fs-16 bold mb-8">Tags and Labels</h3>
            <div className="flex gap-8 flex-wrap">
              <span className="badge badge-primary">feature</span>
              <span className="badge badge-primary">ui</span>
              <span className="badge badge-primary">javascript</span>
              <span className="badge badge-success">completed</span>
              <span className="badge badge-warning">in-progress</span>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}>
            <h3 className="fs-16 bold mb-8">Counts and Notifications</h3>
            <div className="flex gap-12 flex-wrap items-center">
              <div className="flex gap-8 items-center">
                <span>Messages:</span>
                <span className="badge badge-danger">5</span>
              </div>
              <div className="flex gap-8 items-center">
                <span>Notifications:</span>
                <span className="badge badge-warning">3</span>
              </div>
              <div className="flex gap-8 items-center">
                <span>Updates:</span>
                <span className="badge badge-info">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BadgeSizesWithText: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Badges with Text</h2>
        </div>
        <div className="card--content p-20">
          <div className="mb-20">
            <h3 className="fs-16 bold mb-12">Permission Levels</h3>
            <div className="flex gap-8 flex-wrap">
              <span className="badge badge-success">Admin</span>
              <span className="badge badge-primary">Editor</span>
              <span className="badge badge-info">Viewer</span>
              <span className="badge">Guest</span>
            </div>
          </div>

          <div
            className="mb-20"
            style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}
          >
            <h3 className="fs-16 bold mb-12">Environment Tags</h3>
            <div className="flex gap-8 flex-wrap">
              <span className="badge badge-success">production</span>
              <span className="badge badge-warning">staging</span>
              <span className="badge badge-primary">development</span>
              <span className="badge badge-info">testing</span>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}>
            <h3 className="fs-16 bold mb-12">Status Badges</h3>
            <div className="flex gap-8 flex-wrap">
              <span className="badge badge-success">active</span>
              <span className="badge badge-warning">inactive</span>
              <span className="badge badge-danger">blocked</span>
              <span className="badge badge-info">pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BadgeFontSizes: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Badge Font Sizes</h2>
        </div>
        <div className="card--content p-20">
          <div className="mb-20">
            <h3 className="fs-16 bold mb-12">Extra Small (10px) - fs-10 p-2</h3>
            <div className="flex gap-8 flex-wrap items-center">
              <span className="badge fs-10 p-2">Label</span>
              <span className="badge badge-primary fs-10 p-2">Primary</span>
              <span className="badge badge-success fs-10 p-2">Success</span>
              <span className="badge badge-warning fs-10 p-2">Warning</span>
              <span className="badge badge-danger fs-10 p-2">Danger</span>
            </div>
          </div>

          <div
            className="mb-20"
            style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}
          >
            <h3 className="fs-16 bold mb-12">
              Small (12px) - fs-12 p-4 (Default)
            </h3>
            <div className="flex gap-8 flex-wrap items-center">
              <span className="badge">Label</span>
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-success">Success</span>
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-danger">Danger</span>
            </div>
          </div>

          <div
            className="mb-20"
            style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}
          >
            <h3 className="fs-16 bold mb-12">Medium (14px) - fs-14 p-6</h3>
            <div className="flex gap-8 flex-wrap items-center">
              <span className="badge fs-14 p-6">Label</span>
              <span className="badge badge-primary fs-14 p-6">Primary</span>
              <span className="badge badge-success fs-14 p-6">Success</span>
              <span className="badge badge-warning fs-14 p-6">Warning</span>
              <span className="badge badge-danger fs-14 p-6">Danger</span>
            </div>
          </div>

          <div
            className="mb-20"
            style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}
          >
            <h3 className="fs-16 bold mb-12">Large (16px) - fs-16 p-8</h3>
            <div className="flex gap-8 flex-wrap items-center">
              <span className="badge fs-16 p-8">Label</span>
              <span className="badge badge-primary fs-16 p-8">Primary</span>
              <span className="badge badge-success fs-16 p-8">Success</span>
              <span className="badge badge-warning fs-16 p-8">Warning</span>
              <span className="badge badge-danger fs-16 p-8">Danger</span>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}>
            <h3 className="fs-16 bold mb-12">
              Extra Large (18px) - fs-18 p-10
            </h3>
            <div className="flex gap-8 flex-wrap items-center">
              <span className="badge fs-18 p-10">Label</span>
              <span className="badge badge-primary fs-18 p-10">Primary</span>
              <span className="badge badge-success fs-18 p-10">Success</span>
              <span className="badge badge-warning fs-18 p-10">Warning</span>
              <span className="badge badge-danger fs-18 p-10">Danger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
