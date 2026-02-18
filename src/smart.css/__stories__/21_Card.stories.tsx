import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "2-UI-Kit-Blocks/1-Card",
  parameters: {
    docs: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const CardExample: Story = {
  render: () => (
    <div className="p-20">
      <div className="card card__centered">
        <div className="p-20">
          <div className="card--header mb-20 pb-16">
            <h2 className="card--title">Card Title</h2>
            <p className="card--subtitle mt-8">Card subtitle or description</p>
          </div>

          <div className="card--content">
            <p className="text">
              This is the main content of the card. You can put any content
              here. The card component provides a consistent container with
              proper spacing and styling for various types of content.
            </p>
          </div>

          <div className="card--footer flex gap-16 mt-20 pt-16">
            <button className="btn btn--primary">Primary Action</button>
            <button className="btn btn--secondary">Secondary Action</button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <div className="p-20">
      <div className="card" style={{ maxWidth: "400px" }}>
        <div className="p-20">
          <h3 className="text text--large mb-16">Simple Card</h3>
          <p className="text mb-16">
            A simple card without header and footer sections. Just container
            with some content.
          </p>
          <button className="btn btn--primary">Action</button>
        </div>
      </div>
    </div>
  ),
};

export const CardShowcase: Story = {
  render: () => (
    <div className="p-20">
      {/* Basic Card */}
      <section className="mb-32">
        <h2 className="mb-16">Basic Card</h2>
        <div className="card">
          <div className="p-20">
            <div className="card--header mb-20 pb-16">
              <h3 className="card--title">Basic Card Title</h3>
              <p className="card--subtitle mt-8">
                This is a basic card example
              </p>
            </div>
            <div className="card--content mb-20">
              <p className="text">
                This is a basic card with header and content sections. Cards are
                great for organizing information into digestible sections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card with Footer */}
      <section className="mb-32">
        <h2 className="mb-16">Card with Footer</h2>
        <div className="card">
          <div className="p-20">
            <div className="card--header mb-20 pb-16">
              <h3 className="card--title">Card with Actions</h3>
              <p className="card--subtitle mt-8">Card with footer actions</p>
            </div>
            <div className="card--content mb-20">
              <p className="text">
                This card includes a footer section with action buttons. Perfect
                for forms, confirmations, or any interactive content.
              </p>
            </div>
            <div className="card--footer flex gap-12 mt-20 pt-16">
              <button className="btn btn--primary">Accept</button>
              <button className="btn btn--secondary">Cancel</button>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple Cards */}
      <section className="mb-32">
        <h2 className="mb-16">Multiple Cards</h2>
        <div className="flex gap-16 flex-wrap">
          <div className="card" style={{ minWidth: "300px" }}>
            <div className="p-20">
              <div className="card--header mb-20 pb-16">
                <h3 className="card--title">Card One</h3>
              </div>
              <div className="card--content">
                <p className="text">First card content goes here.</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ minWidth: "300px" }}>
            <div className="p-20">
              <div className="card--header mb-20 pb-16">
                <h3 className="card--title">Card Two</h3>
              </div>
              <div className="card--content">
                <p className="text">Second card content goes here.</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ minWidth: "300px" }}>
            <div className="p-20">
              <div className="card--header mb-20 pb-16">
                <h3 className="card--title">Card Three</h3>
              </div>
              <div className="card--content">
                <p className="text">Third card content goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Card */}
      <section className="mb-32">
        <h2 className="mb-16">Complex Card Layout</h2>
        <div className="card" style={{ maxWidth: "500px" }}>
          <div className="p-20">
            <div className="card--header mb-20 pb-16">
              <h3 className="card--title">User Profile</h3>
              <p className="card--subtitle mt-8">Complete user information</p>
            </div>
            <div className="card--content mb-20">
              <div className="flex gap-12 items-center mb-16">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#e2e8f0",
                    borderRadius: "50%",
                  }}
                ></div>
                <div>
                  <h4 className="text text--large mb-4">John Doe</h4>
                  <p className="text text--small">Software Developer</p>
                </div>
              </div>
              <p className="text mb-16">
                Passionate about creating beautiful and functional user
                interfaces. Loves working with modern web technologies and
                solving complex problems.
              </p>
              <div className="flex gap-8 flex-wrap mb-12">
                <span
                  className="text text--small p-8"
                  style={{
                    backgroundColor: "#f1f5f9",
                    borderRadius: "4px",
                  }}
                >
                  React
                </span>
                <span
                  className="text text--small p-8"
                  style={{
                    backgroundColor: "#f1f5f9",
                    borderRadius: "4px",
                  }}
                >
                  TypeScript
                </span>
                <span
                  className="text text--small p-8"
                  style={{
                    backgroundColor: "#f1f5f9",
                    borderRadius: "4px",
                  }}
                >
                  Node.js
                </span>
              </div>
            </div>
            <div className="card--footer flex gap-12 mt-20 pt-16">
              <button className="btn btn--primary">Follow</button>
              <button className="btn btn--secondary">Message</button>
              <button className="btn btn--light">View Profile</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};
