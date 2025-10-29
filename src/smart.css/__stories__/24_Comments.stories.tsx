import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "2-UI-Kit-Blocks/4-Comments",
  parameters: {
    docs: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

// Single comment component
const Comment = ({
  author,
  time,
  content,
  avatar,
  children,
}: {
  author: string;
  time: string;
  content: string | React.ReactNode;
  avatar: string;
  children?: React.ReactNode;
}) => (
  <div className="comment flex gap-12">
    <div className="comment--avatar flex items-center justify-center fs-14 bold">
      {avatar}
    </div>
    <div className="comment--body flex-1">
      <div className="comment--header flex gap-8 items-center mb-8">
        <span className="comment--author bold">{author}</span>
        <span className="comment--time fs-12 text-secondary">{time}</span>
      </div>
      <div className="comment--content mb-12">{content}</div>
      <div className="comment--actions flex gap-8 mb-12">
        <button className="btn btn--ghost btn--small">Like</button>
        <button className="btn btn--ghost btn--small">Reply</button>
      </div>
      {children && (
        <div className="comment--nested mt-16 pl-20">{children}</div>
      )}
    </div>
  </div>
);

export const SingleComment: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Single Comment</h2>
        </div>
        <div className="card--content p-20">
          <Comment
            avatar="JD"
            author="John Doe"
            time="2 hours ago"
            content="This is a really great project! I've been using it for a week and it's been working perfectly."
          />
        </div>
      </div>
    </div>
  ),
};

export const CommentThread: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Comment Thread (3 Levels)</h2>
        </div>
        <div className="card--content p-20">
          {/* Level 1 - Main comment */}
          <Comment
            avatar="JD"
            author="John Doe"
            time="2 hours ago"
            content="This is a really great project! I've been using it for a week and it's been working perfectly."
          >
            {/* Level 2 - First reply */}
            <Comment
              avatar="SM"
              author="Sarah Miller"
              time="1 hour ago"
              content="Thanks for the feedback! We're glad you're enjoying it. Have you tried the new features?"
            >
              {/* Level 3 - Reply to reply */}
              <Comment
                avatar="JD"
                author="John Doe"
                time="45 minutes ago"
                content="Yes, the new features are amazing! Especially the performance improvements."
              />
            </Comment>

            {/* Level 2 - Second reply */}
            <Comment
              avatar="MK"
              author="Mike Klein"
              time="1 hour ago"
              content="I second that! The documentation is also very clear and helpful."
            />
          </Comment>

          {/* Level 1 - Another main comment */}
          <div
            className="mt-20 pt-20"
            style={{ borderTop: "1px solid #e0e0e0" }}
          >
            <Comment
              avatar="AB"
              author="Alice Brown"
              time="1 hour ago"
              content="Do you have any plans to add support for dark mode?"
            >
              {/* Level 2 - Reply */}
              <Comment
                avatar="SM"
                author="Sarah Miller"
                time="30 minutes ago"
                content="Great question! Dark mode is actually coming in the next release. We're currently testing it."
              />
            </Comment>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CommentVariations: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Comment Variations</h2>
        </div>
        <div className="card--content p-20">
          {/* Long comment */}
          <section className="mb-20">
            <h3 className="fs-16 bold mb-12">
              Long Comment with Text Wrapping
            </h3>
            <Comment
              avatar="LW"
              author="Long Writer"
              time="Just now"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </section>

          {/* Comment with multiple replies */}
          <section className="mb-20">
            <h3 className="fs-16 bold mb-12">Comment with Multiple Replies</h3>
            <Comment
              avatar="OQ"
              author="Original Questioner"
              time="3 hours ago"
              content="How can I integrate this into my existing project?"
            >
              <Comment
                avatar="EX"
                author="Expert One"
                time="2.5 hours ago"
                content="It's very simple! Just follow the installation guide in the README."
              />
              <Comment
                avatar="EX2"
                author="Expert Two"
                time="2 hours ago"
                content="Alternatively, you can use npm: npm install smart-css"
              />
              <Comment
                avatar="OQ"
                author="Original Questioner"
                time="1.5 hours ago"
                content="Perfect! Thank you both for the help!"
              />
            </Comment>
          </section>

          {/* Deep nested comment */}
          <section>
            <h3 className="fs-16 bold mb-12">Deep Nested Discussion</h3>
            <Comment
              avatar="A"
              author="Alice"
              time="4 hours ago"
              content="What's the best approach?"
            >
              <Comment
                avatar="B"
                author="Bob"
                time="3.5 hours ago"
                content="I think approach A is better."
              >
                <Comment
                  avatar="C"
                  author="Charlie"
                  time="3 hours ago"
                  content="I actually prefer approach B."
                />
              </Comment>
            </Comment>
          </section>
        </div>
      </div>
    </div>
  ),
};

export const CommentWithHighlight: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Comments with Different Text Styles</h2>
        </div>
        <div className="card--content p-20">
          <Comment
            avatar="TX"
            author="Text Expert"
            time="Now"
            content="This comment demonstrates various text utilities. You can use bold, italic, or strikethrough text."
          >
            <Comment
              avatar="SU"
              author="Style User"
              time="Just now"
              content={
                <div>
                  <p className="mb-8">Here's a response with formatted text:</p>
                  <p className="mb-4">
                    <span className="bold">Important:</span> Pay attention to
                    this
                  </p>
                  <p className="mb-4">
                    <span className="italic">Optional note:</span> This is just
                    a note
                  </p>
                  <p>
                    <span className="text-secondary">Muted text</span> for less
                    important info
                  </p>
                </div>
              }
            />
          </Comment>
        </div>
      </div>
    </div>
  ),
};
