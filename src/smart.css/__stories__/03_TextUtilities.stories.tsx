import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "1-UI-Kit/3-Text Utilities",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export default meta;
type Story = StoryObj;

export const FontSizes: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Font Size Utilities</h3>

      <div className="mb-20">
        <div className="fs-0 mb-10">fs-0 = 0rem (0px)</div>
        <div className="fs-8 mb-10">fs-8 = 0.8rem (8px)</div>
        <div className="fs-10 mb-10">fs-10 = 1rem (10px)</div>
        <div className="fs-12 mb-10">fs-12 = 1.2rem (12px)</div>
        <div className="fs-14 mb-10">fs-14 = 1.4rem (14px)</div>
        <div className="fs-16 mb-10">fs-16 = 1.6rem (16px)</div>
        <div className="fs-18 mb-10">fs-18 = 1.8rem (18px)</div>
        <div className="fs-20 mb-10">fs-20 = 2rem (20px)</div>
        <div className="fs-24 mb-10">fs-24 = 2.4rem (24px)</div>
        <div className="fs-28 mb-10">fs-28 = 2.8rem (28px)</div>
        <div className="fs-30 mb-10">fs-30 = 3rem (30px)</div>
      </div>
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Line Height Utilities</h3>

      <div className="mb-20">
        <div
          className="fs-16 lh-16 mb-20"
          style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
        >
          lh-16 = 1.6rem (16px) - This is a longer text to demonstrate line
          height. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div
          className="fs-16 lh-20 mb-20"
          style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
        >
          lh-20 = 2rem (20px) - This is a longer text to demonstrate line
          height. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div
          className="fs-16 lh-24 mb-20"
          style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
        >
          lh-24 = 2.4rem (24px) - This is a longer text to demonstrate line
          height. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div
          className="fs-16 lh-32 mb-20"
          style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
        >
          lh-32 = 3.2rem (32px) - This is a longer text to demonstrate line
          height. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Text Color Utilities</h3>

      <div className="mb-20">
        <div className="text-primary mb-10 fs-16">
          text-primary - Primary color text
        </div>
        <div className="text-secondary mb-10 fs-16">
          text-secondary - Secondary color text
        </div>
        <div className="text-success mb-10 fs-16">
          text-success - Success color text
        </div>
        <div className="text-danger mb-10 fs-16">
          text-danger - Danger color text
        </div>
        <div className="text-warning mb-10 fs-16">
          text-warning - Warning color text
        </div>
        <div className="text-info mb-10 fs-16">text-info - Info color text</div>
        <div className="text-light mb-10 fs-16">
          text-light - Light color text
        </div>
        <div className="text-dark mb-10 fs-16">text-dark - Dark color text</div>
      </div>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Text Alignment Utilities</h3>

      <div className="mb-20">
        <div
          className="text-left mb-10 fs-16"
          style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
        >
          text-left - Left aligned text
        </div>
        <div
          className="text-center mb-10 fs-16"
          style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
        >
          text-center - Center aligned text
        </div>
        <div
          className="text-right mb-10 fs-16"
          style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
        >
          text-right - Right aligned text
        </div>
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Font Weight & Style Utilities</h3>

      <div className="mb-20">
        <div className="normal mb-10 fs-16">normal - Normal weight (400)</div>
        <div className="semibold mb-10 fs-16">
          semibold - Semibold weight (600)
        </div>
        <div className="bold mb-10 fs-16">bold - Bold weight (700)</div>
        <div className="italic mb-10 fs-16">italic - Italic style</div>
        <div className="strike mb-10 fs-16">strike - Strikethrough text</div>
      </div>
    </div>
  ),
};

export const TextTransformations: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Text Transformation Utilities</h3>

      <div className="mb-20">
        <div className="uppercase mb-10 fs-16">uppercase - UPPERCASE TEXT</div>
        <div className="lowercase mb-10 fs-16">lowercase - lowercase text</div>
        <div className="capitalize mb-10 fs-16">
          capitalize - Capitalize Each Word
        </div>
        <div className="underline mb-10 fs-16">underline - Underlined text</div>
      </div>
    </div>
  ),
};

export const TextOverflow: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Text Overflow Utilities</h3>

      <div className="mb-20">
        <div className="mb-20">
          <h4 className="mb-10">truncate - Text truncation with ellipsis</h4>
          <div
            className="truncate fs-16 mb-10"
            style={{
              width: "200px",
              backgroundColor: "#f0f0f0",
              padding: "10px",
            }}
          >
            This is a very long text that will be truncated with ellipsis when
            it exceeds the container width
          </div>
        </div>

        <div className="mb-20">
          <h4 className="mb-10">break-words - Break long words</h4>
          <div
            className="break-words fs-16"
            style={{
              width: "200px",
              backgroundColor: "#f0f0f0",
              padding: "10px",
            }}
          >
            This is a verylongwordthatwillbebrokenacrossmultiplelines when it
            exceeds the container width
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CombinedUtilities: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">Combined Text Utilities</h3>

      <div className="mb-20">
        <div className="fs-24 bold text-primary text-center mb-20">
          Large Bold Primary Centered Text
        </div>

        <div className="fs-14 italic text-secondary text-right mb-20">
          Small Italic Secondary Right-aligned Text
        </div>

        <div className="fs-18 semibold text-success uppercase text-center mb-20">
          Medium Semibold Success Uppercase Centered Text
        </div>

        <div className="fs-16 normal text-dark underline mb-20">
          Normal Dark Underlined Text
        </div>

        <div
          className="fs-12 text-warning truncate"
          style={{
            width: "250px",
            backgroundColor: "#f0f0f0",
            padding: "10px",
          }}
        >
          Small warning text that gets truncated when too long for the container
        </div>
      </div>
    </div>
  ),
};

export const AllTextStyles: Story = {
  render: () => (
    <div className="p-20">
      <h3 className="mb-20">All Text Styles Demo</h3>

      <div className="mb-20">
        <h4 className="mb-20">Colors in Info Blocks:</h4>
        <div className="info info--primary mb-10">
          <span className="text-primary fs-16">
            Primary Text in Primary Info Block
          </span>
        </div>
        <div className="info info--secondary mb-10">
          <span className="text-secondary fs-16">
            Secondary Text in Secondary Info Block
          </span>
        </div>
        <div className="info info--success mb-10">
          <span className="text-success fs-16">
            Success Text in Success Info Block
          </span>
        </div>
        <div className="info info--warning mb-10">
          <span className="text-warning fs-16">
            Warning Text in Warning Info Block
          </span>
        </div>
        <div className="info info--danger mb-10">
          <span className="text-danger fs-16">
            Danger Text in Danger Info Block
          </span>
        </div>
        <div className="info info--light mb-10">
          <span className="text-info fs-16">Info Text in Light Info Block</span>
        </div>
        <div className="info info--dark mb-10">
          <span className="text-light fs-16">
            Light Text in Dark Info Block
          </span>
        </div>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">Font Sizes in Info Blocks:</h4>
        <div className="info info--primary mb-10">
          <span className="text-primary fs-8">FS-8 Primary Text</span>
        </div>
        <div className="info info--secondary mb-10">
          <span className="text-secondary fs-12">FS-12 Secondary Text</span>
        </div>
        <div className="info info--success mb-10">
          <span className="text-success fs-16">FS-16 Success Text</span>
        </div>
        <div className="info info--warning mb-10">
          <span className="text-warning fs-20">FS-20 Warning Text</span>
        </div>
        <div className="info info--danger mb-10">
          <span className="text-danger fs-24">FS-24 Danger Text</span>
        </div>
        <div className="info info--dark mb-10">
          <span className="text-light fs-30">FS-30 Info Text</span>
        </div>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">Font Weights & Styles in Info Blocks:</h4>
        <div className="info info--primary mb-10">
          <span className="text-primary fs-16 normal">Normal Primary Text</span>
        </div>
        <div className="info info--secondary mb-10">
          <span className="text-secondary fs-16 semibold">
            Semibold Secondary Text
          </span>
        </div>
        <div className="info info--success mb-10">
          <span className="text-success fs-16 bold">Bold Success Text</span>
        </div>
        <div className="info info--warning mb-10">
          <span className="text-warning fs-16 italic">Italic Warning Text</span>
        </div>
        <div className="info info--danger mb-10">
          <span className="text-danger fs-16 strike">
            Strikethrough Danger Text
          </span>
        </div>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">Text Transformations in Info Blocks:</h4>
        <div className="info info--primary mb-10">
          <span className="text-primary fs-16 uppercase">
            Uppercase Primary Text
          </span>
        </div>
        <div className="info info--secondary mb-10">
          <span className="text-secondary fs-16 lowercase">
            LOWERCASE SECONDARY TEXT
          </span>
        </div>
        <div className="info info--success mb-10">
          <span className="text-success fs-16 capitalize">
            capitalize success text
          </span>
        </div>
        <div className="info info--light mb-10">
          <span className="text-info fs-16 underline">
            Underlined Info Text
          </span>
        </div>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">Text Alignment in Info Blocks:</h4>
        <div className="info info--primary mb-10">
          <span className="text-primary fs-16 text-left">
            Left Aligned Text
          </span>
        </div>
        <div className="info info--secondary mb-10">
          <span className="text-secondary fs-16 text-center">
            Center Aligned Text
          </span>
        </div>
        <div className="info info--success mb-10">
          <span className="text-success fs-16 text-right">
            Right Aligned Text
          </span>
        </div>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">Combined Styles in Info Blocks:</h4>
        <div className="info info--primary mb-10">
          <span className="text-primary fs-24 bold text-center uppercase">
            Large Bold Primary Centered Uppercase
          </span>
        </div>
        <div className="info info--secondary mb-10">
          <span className="text-secondary fs-14 italic text-right">
            Small Italic Secondary Right-aligned
          </span>
        </div>
        <div className="info info--success mb-10">
          <span className="text-success fs-18 semibold underline">
            Medium Semibold Success Underlined
          </span>
        </div>
        <div className="info info--warning mb-10">
          <span className="text-warning fs-16 normal capitalize">
            normal warning capitalized text
          </span>
        </div>
        <div className="info info--danger truncate" style={{ width: "300px" }}>
          <span className="text-danger fs-12">
            Small danger text that gets truncated when it's too long for the
            container width
          </span>
        </div>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">Line Heights in Info Blocks:</h4>
        <div className="info info--primary mb-10">
          <span className="text-primary fs-16 lh-16">
            LH-16: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className="info info--secondary mb-10">
          <span className="text-secondary fs-16 lh-24">
            LH-24: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className="info info--success">
          <span className="text-success fs-16 lh-32">
            LH-32: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>

      <div className="mb-20">
        <h4 className="mb-20">Closable Info Blocks with Text Styles:</h4>
        <div className="info info--warning info--closable mb-10">
          <span className="text-warning fs-16 semibold">
            Important warning message with close button
          </span>
          <button className="info__close">×</button>
        </div>
        <div className="info info--danger info--closable">
          <span className="text-danger fs-14 bold uppercase">
            Critical error - action required
          </span>
          <button className="info__close">×</button>
        </div>
      </div>
    </div>
  ),
};
