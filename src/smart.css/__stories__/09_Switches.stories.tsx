import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";
import { useState } from "react";

const meta: Meta = {
  title: "1-UI-Kit/9-Switches",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "tablet"
    }
  }
};

export default meta;
type Story = StoryObj;

// Controlled switch component for the story
const ControlledSwitch = ({
  label,
  className = "",
  disabled = false,
  initialChecked = false
}: {
  label: string;
  className?: string;
  disabled?: boolean;
  initialChecked?: boolean;
}) => {
  const [checked, setChecked] = useState(initialChecked);

  return (
    <label className={`switch ${className}`}>
      <div className="switch--toggle">
        <input
          type="checkbox"
          className="switch--input"
          checked={checked}
          disabled={disabled}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="switch--slider"></span>
      </div>
      <span className="switch--label">{label}</span>
    </label>
  );
};

export const SwitchesShowcase: Story = {
  render: () => (
    <div style={{ padding: "16px" }}>
      {/* Default Switches */}
      <section style={{ marginBottom: "32px" }}>
        <h2>Default Switches</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px"
          }}
        >
          <ControlledSwitch label="Off switch" />
          <ControlledSwitch label="On switch" initialChecked={true} />
          <ControlledSwitch label="Disabled switch" disabled={true} />
          <ControlledSwitch
            label="Disabled on switch"
            disabled={true}
            initialChecked={true}
          />
        </div>
      </section>

      {/* Switch Sizes */}
      <section style={{ marginBottom: "32px" }}>
        <h2>Switch Sizes</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px"
          }}
        >
          <ControlledSwitch label="Small switch" className="switch--small" />
          <ControlledSwitch label="Default size switch" />
          <ControlledSwitch label="Large switch" className="switch--large" />
        </div>
      </section>

      {/* Switch States */}
      <section style={{ marginBottom: "32px" }}>
        <h2>Switch States</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px"
          }}
        >
          <ControlledSwitch
            label="Error state switch"
            className="switch--error"
          />
          <ControlledSwitch
            label="Success state switch"
            className="switch--success"
          />
          <ControlledSwitch
            label="Error state on"
            className="switch--error"
            initialChecked={true}
          />
          <ControlledSwitch
            label="Success state on"
            className="switch--success"
            initialChecked={true}
          />
        </div>
      </section>

      {/* Switch in Form Group */}
      <section style={{ marginBottom: "32px" }}>
        <h2>Switch in Form Group</h2>
        <div className="form-group">
          <div className="form--label text--dark">Settings</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "8px"
            }}
          >
            <ControlledSwitch label="Enable dark mode" />
            <ControlledSwitch
              label="Enable notifications"
              initialChecked={true}
            />
            <ControlledSwitch label="Auto-save" initialChecked={true} />
          </div>
          <div className="form-group--info text--info text--small">
            These settings will be saved to your profile.
          </div>
        </div>
      </section>

      {/* Switch with Long Text */}
      <section style={{ marginBottom: "32px" }}>
        <h2>Switch with Long Text</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
            maxWidth: "500px"
          }}
        >
          <ControlledSwitch label="Enable advanced features including automatic data synchronization, background processing, and enhanced security protocols. These features may use additional system resources." />
        </div>
      </section>
    </div>
  )
};

// Simple usage example
export const SimpleSwitch: Story = {
  render: () => (
    <div style={{ padding: "16px" }}>
      <label className="switch">
        <div className="switch--toggle">
          <input type="checkbox" className="switch--input" />
          <span className="switch--slider"></span>
        </div>
        <span className="switch--label">Enable feature</span>
      </label>
    </div>
  )
};
