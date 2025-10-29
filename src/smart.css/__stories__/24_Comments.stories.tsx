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
        <div className="comment--nested mt-16 mb-16 pl-20">{children}</div>
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

// Styled comment component with background
const StyledComment = ({
  author,
  time,
  content,
  avatar,
  avatarClass,
  children,
}: {
  author: string;
  time: string;
  content: string | React.ReactNode;
  avatar: string;
  avatarClass?: string;
  children?: React.ReactNode;
}) => (
  <div className="comment--styled mb-16 p-16">
    <div className="flex gap-12">
      <div
        className={`comment--avatar flex items-center justify-center fs-14 bold text-light ${avatarClass || "comment--avatar-color-1"}`}
      >
        {avatar}
      </div>
      <div className="comment--body flex-1">
        <div className="comment--header flex gap-8 items-center mb-8">
          <span className="comment--author bold text-dark">{author}</span>
          <span className="comment--time fs-12 text-secondary">{time}</span>
        </div>
        <div className="comment--content text-dark mb-12">{content}</div>
        <div className="comment--actions flex gap-8 mb-0">
          <button className="btn btn--primary btn--small">Like</button>
          <button className="btn btn--secondary btn--small">Reply</button>
        </div>
        {children && (
          <div className="comment--nested mt-16 mb-16 pl-20">{children}</div>
        )}
      </div>
    </div>
  </div>
);

export const StyledComments: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Styled Comments with Colors</h2>
        </div>
        <div className="card--content p-20">
          <StyledComment
            avatar="JD"
            author="John Doe"
            time="2 hours ago"
            avatarClass="comment--avatar-color-1"
            content="This is a styled comment with a beautiful gradient avatar and background styling!"
          >
            <StyledComment
              avatar="SM"
              author="Sarah Miller"
              time="1 hour ago"
              avatarClass="comment--avatar-color-2"
              content="Great design! I love how the colors make the comments stand out."
            >
              <StyledComment
                avatar="JD"
                author="John Doe"
                time="45 minutes ago"
                avatarClass="comment--avatar-color-5"
                content="Thanks! The styling really improves readability in long discussion threads."
              />
            </StyledComment>

            <StyledComment
              avatar="MK"
              author="Mike Klein"
              time="1 hour ago"
              avatarClass="comment--avatar-color-3"
              content="This looks amazing! The gradient avatars add personality to each commenter."
            />
          </StyledComment>

          <div
            className="mt-20 pt-20"
            style={{ borderTop: "1px solid #e0e0e0" }}
          >
            <StyledComment
              avatar="AB"
              author="Alice Brown"
              time="30 minutes ago"
              avatarClass="comment--avatar-color-4"
              content="The color coding helps distinguish different participants in the conversation."
            >
              <StyledComment
                avatar="SM"
                author="Sarah Miller"
                time="20 minutes ago"
                avatarClass="comment--avatar-color-2"
                content="Exactly! And the subtle hover effect on the cards makes it feel interactive."
              />
            </StyledComment>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllAvatarVariants: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Avatar Color Variants</h2>
        </div>
        <div className="card--content p-20">
          <div className="grid grid-cols-2 gap-16">
            <StyledComment
              avatar="C1"
              author="Color 1"
              time="Just now"
              avatarClass="comment--avatar-color-1"
              content="This is the first avatar color variant."
            />
            <StyledComment
              avatar="C2"
              author="Color 2"
              time="Just now"
              avatarClass="comment--avatar-color-2"
              content="This is the second avatar color variant."
            />
            <StyledComment
              avatar="C3"
              author="Color 3"
              time="Just now"
              avatarClass="comment--avatar-color-3"
              content="This is the third avatar color variant."
            />
            <StyledComment
              avatar="C4"
              author="Color 4"
              time="Just now"
              avatarClass="comment--avatar-color-4"
              content="This is the fourth avatar color variant."
            />
            <StyledComment
              avatar="C5"
              author="Color 5"
              time="Just now"
              avatarClass="comment--avatar-color-5"
              content="This is the fifth avatar color variant."
            />
            <StyledComment
              avatar="C6"
              author="Color 6"
              time="Just now"
              avatarClass="comment--avatar-color-6"
              content="This is the sixth avatar color variant."
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
