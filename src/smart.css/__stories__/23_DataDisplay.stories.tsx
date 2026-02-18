import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "2-UI-Kit-Blocks/3-DataDisplay",
  parameters: {
    docs: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const DataDisplayExample: Story = {
  render: () => (
    <div className="p-20">
      <div className="card card__centered">
        <div className="card--header p-20">
          <h2 className="card--title">Password Entry Details</h2>
        </div>

        <div className="card--content p-20">
          <div className="mb-16">
            <div className="data-display--field pb-16 mb-16">
              <div className="data-display--label mb-8">Service Name</div>
              <div className="data-display--value">GitHub</div>
            </div>

            <div className="data-display--field pb-16 mb-16">
              <div className="data-display--label mb-8">Username</div>
              <div className="data-display--value">johndoe123</div>
            </div>

            <div className="data-display--field pb-16 mb-16">
              <div className="data-display--label mb-8">Password</div>
              <div className="data-display--value data-display__with-action gap-8">
                <span className="data-display__monospace flex-1">
                  P@ssw0rd123!
                </span>
                <button className="btn btn--small btn--secondary">Copy</button>
                <button className="btn btn--small btn--secondary">Renew</button>
              </div>
            </div>

            <div className="data-display--field pb-16 mb-16">
              <div className="data-display--label mb-8">Service URL</div>
              <div className="data-display--value">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="data-display__link"
                >
                  https://github.com
                </a>
              </div>
            </div>

            <div className="data-display--field pb-16 mb-16">
              <div className="data-display--label mb-8">Notes</div>
              <div className="data-display--value data-display__multiline">
                This is my GitHub account for work projects. Remember to rotate
                this password every 90 days.
              </div>
            </div>
          </div>
        </div>

        <div className="data-display--actions p-20 gap-16">
          <button className="btn btn--primary">Edit</button>
          <button className="btn btn--secondary">Back</button>
        </div>

        <div className="card--footer flex gap-16 p-20">
          <button className="btn btn--primary">Edit</button>
          <button className="btn btn--secondary">Back</button>
        </div>
      </div>
    </div>
  ),
};
