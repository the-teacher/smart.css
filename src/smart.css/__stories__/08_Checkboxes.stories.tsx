import type { Meta, StoryObj } from '@storybook/react';
import '@smart.css/UI.scss';
import { useState } from 'react';

const meta: Meta = {
  title: '1-UI-Kit/8-Checkboxes',
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export default meta;
type Story = StoryObj;

// Controlled checkbox component for the story
const ControlledCheckbox = ({
  label,
  className = '',
  disabled = false,
  initialChecked = false,
}: {
  label: string;
  className?: string;
  disabled?: boolean;
  initialChecked?: boolean;
}) => {
  const [checked, setChecked] = useState(initialChecked);

  return (
    <label className={`checkbox ${className}`}>
      <input
        type="checkbox"
        className="checkbox--input"
        checked={checked}
        disabled={disabled}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span
        className={`checkbox--label ${disabled ? 'checkbox--label:disabled' : ''}`}
      >
        {label}
      </span>
    </label>
  );
};

export const CheckboxesShowcase: Story = {
  render: () => (
    <div style={{ padding: '16px' }}>
      {/* Default Checkboxes */}
      <section style={{ marginBottom: '32px' }}>
        <h2>Default Checkboxes</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16px',
          }}
        >
          <ControlledCheckbox label="Unchecked checkbox" />
          <ControlledCheckbox label="Checked checkbox" initialChecked={true} />
          <ControlledCheckbox label="Disabled checkbox" disabled={true} />
          <ControlledCheckbox
            label="Disabled checked checkbox"
            disabled={true}
            initialChecked={true}
          />
        </div>
      </section>

      {/* Checkbox Sizes */}
      <section style={{ marginBottom: '32px' }}>
        <h2>Checkbox Sizes</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16px',
          }}
        >
          <ControlledCheckbox
            label="Small checkbox"
            className="checkbox--small"
          />
          <ControlledCheckbox label="Default size checkbox" />
          <ControlledCheckbox
            label="Large checkbox"
            className="checkbox--large"
          />
        </div>
      </section>

      {/* Checkbox States */}
      <section style={{ marginBottom: '32px' }}>
        <h2>Checkbox States</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16px',
          }}
        >
          <ControlledCheckbox
            label="Error state checkbox"
            className="checkbox--error"
          />
          <ControlledCheckbox
            label="Success state checkbox"
            className="checkbox--success"
          />
          <ControlledCheckbox
            label="Error state checked"
            className="checkbox--error"
            initialChecked={true}
          />
          <ControlledCheckbox
            label="Success state checked"
            className="checkbox--success"
            initialChecked={true}
          />
        </div>
      </section>

      {/* Checkbox in Form Group */}
      <section style={{ marginBottom: '32px' }}>
        <h2>Checkbox in Form Group</h2>
        <div className="form-group">
          <div className="form--label text--dark">Preferences</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginTop: '8px',
            }}
          >
            <ControlledCheckbox label="Receive email notifications" />
            <ControlledCheckbox label="Subscribe to newsletter" />
            <ControlledCheckbox label="Allow data collection" />
          </div>
          <div className="form-group--info text--info text--small">
            You can change these settings at any time.
          </div>
        </div>
      </section>

      {/* Checkbox with Long Text */}
      <section style={{ marginBottom: '32px' }}>
        <h2>Checkbox with Long Text</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16px',
            maxWidth: '500px',
          }}
        >
          <ControlledCheckbox label="I agree to the terms and conditions of the service, privacy policy, and all other policies that apply to using this application. This is a long text to demonstrate how checkboxes handle multi-line labels." />
        </div>
      </section>
    </div>
  ),
};

// Simple usage example
export const SimpleCheckbox: Story = {
  render: () => (
    <div style={{ padding: '16px' }}>
      <label className="checkbox">
        <input type="checkbox" className="checkbox--input" />
        <span className="checkbox--label">Accept terms and conditions</span>
      </label>
    </div>
  ),
};
