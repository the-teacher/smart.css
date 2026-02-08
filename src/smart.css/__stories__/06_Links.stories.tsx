import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "1-UI-Kit/6-Links",
  parameters: {
    docs: { disable: true },
    viewport: {
      defaultViewport: "tablet"
    }
  }
};

export default meta;
type Story = StoryObj;

// CSS classes for demonstration
const demoStyles = `
<style>
.link-demo-container {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.link-demo-section {
  margin-bottom: 40px;
}

.link-demo-label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
  display: block;
}

.link-demo-description {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  font-style: italic;
}

.link-demo-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-demo-inline {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.link-demo-text {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
}

.link-demo-nav {
  display: flex;
  gap: 20px;
  padding: 12px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.link-demo-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 12px;
}

.link-demo-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.link-demo-breadcrumb-separator {
  color: #999;
}
</style>
`;

export const AllLinkStates: Story = {
  render: () => (
    <div className="p-20">
      <div dangerouslySetInnerHTML={{ __html: demoStyles }} />

      <h2 className="mb-20">All Link States Demo</h2>

      {/* Basic Link States */}
      <div className="link-demo-section">
        <h3 className="mb-20">Basic Link States</h3>

        <div className="link-demo-container">
          <div className="link-demo-label">Default Link State</div>
          <div className="link-demo-description">
            Normal link appearance with default color
          </div>
          <div className="link-demo-group">
            <a href="#default">This is a default link</a>
            <a href="#another">Another default link</a>
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Hover State</div>
          <div className="link-demo-description">
            Hover over these links to see the hover effect (color change +
            underline)
          </div>
          <div className="link-demo-group">
            <a href="#hover1">Hover over this link</a>
            <a href="#hover2">And this one too</a>
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Visited State</div>
          <div className="link-demo-description">
            These links will show visited state after clicking
          </div>
          <div className="link-demo-group">
            <a href="#visited1">Click to see visited state</a>
            <a href="#visited2">Another link to visit</a>
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Focus State</div>
          <div className="link-demo-description">
            Tab to these links or click to see focus outline
          </div>
          <div className="link-demo-group">
            <a href="#focus1">Tab to focus this link</a>
            <a href="#focus2">Focus this one too</a>
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Active State</div>
          <div className="link-demo-description">
            Click and hold to see active state
          </div>
          <div className="link-demo-group">
            <a href="#active1">Click and hold this link</a>
            <a href="#active2">Active state example</a>
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Disabled State</div>
          <div className="link-demo-description">
            Disabled links are not clickable and have muted appearance
          </div>
          <div className="link-demo-group">
            <a href="#disabled1" className="disabled">
              Disabled link (class)
            </a>
            <a href="#disabled2">Disabled link (attribute)</a>
          </div>
        </div>
      </div>

      {/* Inline Links */}
      <div className="link-demo-section">
        <h3 className="mb-20">Links in Text Context</h3>

        <div className="link-demo-container">
          <div className="link-demo-label">Links within paragraphs</div>
          <div className="link-demo-text">
            This is a paragraph with <a href="#inline1">an inline link</a> that
            demonstrates how links appear within text content. You can also have
            <a href="#inline2">multiple links</a> in the same paragraph, and
            they should maintain proper{" "}
            <a href="#inline3">readability and accessibility</a>.
          </div>
          <div className="link-demo-text">
            Another paragraph with a <a href="#inline4">different link</a> to
            show consistency across different text blocks. Links should be
            easily
            <a href="#inline5">distinguishable from regular text</a>.
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Mixed link states in text</div>
          <div className="link-demo-text">
            Here we have <a href="#mixed1">a normal link</a>,
            <a href="#mixed2" className="disabled">
              a disabled link
            </a>
            , and
            <a href="#mixed3">another normal link</a> all within the same
            paragraph to demonstrate how they work together.
          </div>
        </div>
      </div>

      {/* Navigation Examples */}
      <div className="link-demo-section">
        <h3 className="mb-20">Navigation Examples</h3>

        <div className="link-demo-container">
          <div className="link-demo-label">Horizontal Navigation</div>
          <div className="link-demo-description">
            Typical navigation menu layout
          </div>
          <nav className="link-demo-nav">
            <a href="#nav-home">Home</a>
            <a href="#nav-about">About</a>
            <a href="#nav-services">Services</a>
            <a href="#nav-portfolio">Portfolio</a>
            <a href="#nav-contact">Contact</a>
          </nav>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Breadcrumb Navigation</div>
          <div className="link-demo-description">
            Breadcrumb trail with separators
          </div>
          <nav className="link-demo-breadcrumb">
            <a href="#breadcrumb-home">Home</a>
            <span className="link-demo-breadcrumb-separator">/</span>
            <a href="#breadcrumb-category">Category</a>
            <span className="link-demo-breadcrumb-separator">/</span>
            <a href="#breadcrumb-subcategory">Subcategory</a>
            <span className="link-demo-breadcrumb-separator">/</span>
            <span>Current Page</span>
          </nav>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Vertical Navigation</div>
          <div className="link-demo-description">Sidebar-style navigation</div>
          <nav className="flex flex-col gap-8">
            <a href="#sidebar-dashboard">Dashboard</a>
            <a href="#sidebar-users">Users</a>
            <a href="#sidebar-settings">Settings</a>
            <a href="#sidebar-reports">Reports</a>
            <a href="#sidebar-help">Help</a>
          </nav>
        </div>
      </div>

      {/* Card and List Examples */}
      <div className="link-demo-section">
        <h3 className="mb-20">Links in Components</h3>

        <div className="link-demo-container">
          <div className="link-demo-label">Links in Cards</div>
          <div className="link-demo-description">
            How links appear within card components
          </div>

          <div className="link-demo-card">
            <h4 className="mb-8">Article Title</h4>
            <p className="mb-12 text-14">
              This is a sample article excerpt that contains
              <a href="#article-link">a link to more information</a>
              within the content.
            </p>
            <div className="flex gap-12">
              <a href="#read-more">Read More</a>
              <a href="#share">Share</a>
              <a href="#bookmark">Bookmark</a>
            </div>
          </div>

          <div className="link-demo-card">
            <h4 className="mb-8">Product Card</h4>
            <p className="mb-12 text-14">
              Product description with{" "}
              <a href="#product-details">detailed specifications</a>
              and <a href="#reviews">customer reviews</a>.
            </p>
            <div className="flex gap-12">
              <a href="#buy-now">Buy Now</a>
              <a href="#add-cart">Add to Cart</a>
              <a href="#wishlist" className="disabled">
                Out of Stock
              </a>
            </div>
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Links in Lists</div>
          <div className="link-demo-description">
            Various list formats with links
          </div>

          <div className="mb-16">
            <strong>Simple Link List:</strong>
            <ul className="mt-8 ml-20">
              <li className="mb-4">
                <a href="#list-item1">First list item link</a>
              </li>
              <li className="mb-4">
                <a href="#list-item2">Second list item link</a>
              </li>
              <li className="mb-4">
                <a href="#list-item3">Third list item link</a>
              </li>
              <li className="mb-4">
                <a href="#list-item4" className="disabled">
                  Disabled list item
                </a>
              </li>
            </ul>
          </div>

          <div>
            <strong>Mixed Content List:</strong>
            <ul className="mt-8 ml-20">
              <li className="mb-4">
                Regular text with <a href="#mixed-list1">embedded link</a>
              </li>
              <li className="mb-4">
                Another item with <a href="#mixed-list2">multiple</a>
                <a href="#mixed-list3">different links</a>
              </li>
              <li className="mb-4">
                Item with{" "}
                <a href="#mixed-list4" className="disabled">
                  disabled link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accessibility Examples */}
      <div className="link-demo-section">
        <h3 className="mb-20">Accessibility Features</h3>

        <div className="link-demo-container">
          <div className="link-demo-label">Focus Management</div>
          <div className="link-demo-description">
            Use Tab key to navigate through these links and observe focus
            indicators
          </div>
          <div className="flex gap-16 flex-wrap">
            <a href="#focus-test1">Link 1</a>
            <a href="#focus-test2">Link 2</a>
            <a href="#focus-test3">Link 3</a>
            <a href="#focus-test4" className="disabled">
              Disabled Link
            </a>
            <a href="#focus-test5">Link 5</a>
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Screen Reader Friendly</div>
          <div className="link-demo-description">
            Links with descriptive text for better accessibility
          </div>
          <div className="flex flex-col gap-8">
            <a href="#download-pdf">Download PDF Report (2.3 MB)</a>
            <a href="#external-site">
              Visit External Website (opens in new tab)
            </a>
            <a href="#email-contact">Send Email to Support</a>
            <a href="#phone-contact">Call Customer Service: +1-800-123-4567</a>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="link-demo-section">
        <h3 className="mb-20">Interactive Examples</h3>

        <div className="link-demo-container">
          <div className="link-demo-label">Test All States</div>
          <div className="link-demo-description">
            Try different interactions: hover, click, tab navigation
          </div>
          <div className="flex flex-wrap gap-16">
            <a href="#test1">Hover Test</a>
            <a href="#test2">Click Test</a>
            <a href="#test3">Focus Test</a>
            <a href="#test4">Visit Test</a>
            <a href="#test5" className="disabled">
              Disabled Test
            </a>
          </div>
        </div>

        <div className="link-demo-container">
          <div className="link-demo-label">Real-world Scenarios</div>
          <div className="link-demo-description">
            Common link usage patterns
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <strong>Footer Links:</strong>
              <div className="flex gap-16 mt-4 flex-wrap">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
                <a href="#contact-footer">Contact Us</a>
              </div>
            </div>

            <div>
              <strong>Action Links:</strong>
              <div className="flex gap-16 mt-4 flex-wrap">
                <a href="#edit">Edit Profile</a>
                <a href="#delete">Delete Account</a>
                <a href="#export">Export Data</a>
                <a href="#import" className="disabled">
                  Import (Coming Soon)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
