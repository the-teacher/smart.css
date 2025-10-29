import type { Meta, StoryObj } from "@storybook/react";
import "@smart.css/UI.scss";

const meta: Meta = {
  title: "2-UI-Kit-Blocks/5-Table",
  parameters: {
    docs: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

// Sample data for the table
const tableData = [
  {
    id: 1,
    title: "Read Files",
    description: "Access and read file contents",
    holder: "John Smith",
    scope: "files:read",
    resource: "Document A",
    action: "view",
    value: "granted",
    starts_at: "2024-01-15",
    ends_at: "2025-01-15",
  },
  {
    id: 2,
    title: "Write Files",
    description: "Create and modify files",
    holder: "Sarah Davis",
    scope: "files:write",
    resource: "Project B",
    action: "edit",
    value: "pending",
    starts_at: "2024-02-01",
    ends_at: "2024-08-01",
  },
  {
    id: 3,
    title: "Delete Files",
    description: "Remove file contents",
    holder: "Mike Johnson",
    scope: "files:delete",
    resource: "Archive",
    action: "remove",
    value: "denied",
    starts_at: "2024-01-20",
    ends_at: "2024-12-20",
  },
  {
    id: 4,
    title: "User Management",
    description: "Manage user accounts",
    holder: "Emma Wilson",
    scope: "users:admin",
    resource: "Admin Panel",
    action: "manage",
    value: "granted",
    starts_at: "2024-01-01",
    ends_at: "2025-12-31",
  },
  {
    id: 5,
    title: "Database Access",
    description: "Query database",
    holder: "Alex Brown",
    scope: "db:read",
    resource: "Main DB",
    action: "query",
    value: "granted",
    starts_at: "2024-03-10",
    ends_at: "2025-03-10",
  },
  {
    id: 6,
    title: "API Calls",
    description: "Make external API requests",
    holder: "Lisa Anderson",
    scope: "api:call",
    resource: "External API",
    action: "invoke",
    value: "pending",
    starts_at: "2024-04-05",
    ends_at: "2024-10-05",
  },
  {
    id: 7,
    title: "Log Viewer",
    description: "Access system logs",
    holder: "Robert Taylor",
    scope: "logs:view",
    resource: "System Logs",
    action: "view",
    value: "granted",
    starts_at: "2024-02-14",
    ends_at: "2025-02-14",
  },
  {
    id: 8,
    title: "Config Changes",
    description: "Modify system configuration",
    holder: "Jennifer Lee",
    scope: "config:write",
    resource: "Settings",
    action: "modify",
    value: "denied",
    starts_at: "2024-01-25",
    ends_at: "2024-07-25",
  },
  {
    id: 9,
    title: "Backup Manager",
    description: "Create and restore backups",
    holder: "David Martinez",
    scope: "backup:admin",
    resource: "Backup System",
    action: "manage",
    value: "granted",
    starts_at: "2024-01-10",
    ends_at: "2026-01-10",
  },
  {
    id: 10,
    title: "Report Generator",
    description: "Generate system reports",
    holder: "Karen White",
    scope: "reports:create",
    resource: "Analytics",
    action: "generate",
    value: "granted",
    starts_at: "2024-03-20",
    ends_at: "2025-03-20",
  },
  {
    id: 11,
    title: "Cache Control",
    description: "Clear and manage cache",
    holder: "Steven Harris",
    scope: "cache:admin",
    resource: "Cache System",
    action: "clear",
    value: "pending",
    starts_at: "2024-05-01",
    ends_at: "2024-11-01",
  },
  {
    id: 12,
    title: "Email Service",
    description: "Send email notifications",
    holder: "Nancy Clark",
    scope: "email:send",
    resource: "Mail Service",
    action: "send",
    value: "granted",
    starts_at: "2024-01-05",
    ends_at: "2025-01-05",
  },
  {
    id: 13,
    title: "Document Upload",
    description: "Upload documents",
    holder: "Daniel Rodriguez",
    scope: "docs:upload",
    resource: "Document Store",
    action: "upload",
    value: "granted",
    starts_at: "2024-02-28",
    ends_at: "2025-02-28",
  },
  {
    id: 14,
    title: "Team Management",
    description: "Manage team members",
    holder: "Patricia Miller",
    scope: "team:admin",
    resource: "Team Panel",
    action: "manage",
    value: "denied",
    starts_at: "2024-04-10",
    ends_at: "2024-10-10",
  },
  {
    id: 15,
    title: "Payment Processing",
    description: "Process payments",
    holder: "James Garcia",
    scope: "payments:process",
    resource: "Payment Gateway",
    action: "process",
    value: "granted",
    starts_at: "2024-01-01",
    ends_at: "2025-12-31",
  },
  {
    id: 16,
    title: "Security Audit",
    description: "Perform security audits",
    holder: "Sandra Thomas",
    scope: "security:audit",
    resource: "Security System",
    action: "audit",
    value: "pending",
    starts_at: "2024-06-01",
    ends_at: "2024-12-01",
  },
  {
    id: 17,
    title: "Data Export",
    description: "Export system data",
    holder: "Mark Jackson",
    scope: "data:export",
    resource: "Data Store",
    action: "export",
    value: "granted",
    starts_at: "2024-02-15",
    ends_at: "2025-02-15",
  },
  {
    id: 18,
    title: "Mobile Access",
    description: "Enable mobile app access",
    holder: "Angela Harris",
    scope: "mobile:access",
    resource: "Mobile App",
    action: "enable",
    value: "denied",
    starts_at: "2024-03-01",
    ends_at: "2024-09-01",
  },
  {
    id: 19,
    title: "API Versioning",
    description: "Manage API versions",
    holder: "Christopher Lee",
    scope: "api:manage",
    resource: "API Gateway",
    action: "manage",
    value: "granted",
    starts_at: "2024-01-20",
    ends_at: "2026-01-20",
  },
  {
    id: 20,
    title: "Webhook Setup",
    description: "Configure webhooks",
    holder: "Elizabeth Young",
    scope: "webhooks:config",
    resource: "Webhook Service",
    action: "configure",
    value: "pending",
    starts_at: "2024-05-10",
    ends_at: "2024-11-10",
  },
  {
    id: 21,
    title: "Rate Limiting",
    description: "Configure rate limits",
    holder: "Ronald King",
    scope: "rate:limit",
    resource: "API Limiter",
    action: "set",
    value: "granted",
    starts_at: "2024-04-01",
    ends_at: "2025-04-01",
  },
  {
    id: 22,
    title: "Authentication",
    description: "Manage authentication",
    holder: "Barbara Wright",
    scope: "auth:admin",
    resource: "Auth Service",
    action: "manage",
    value: "granted",
    starts_at: "2024-01-10",
    ends_at: "2025-12-31",
  },
  {
    id: 23,
    title: "Session Manager",
    description: "Manage user sessions",
    holder: "Ryan Lopez",
    scope: "sessions:manage",
    resource: "Session Store",
    action: "manage",
    value: "denied",
    starts_at: "2024-02-20",
    ends_at: "2024-08-20",
  },
  {
    id: 24,
    title: "Monitoring Setup",
    description: "Configure system monitoring",
    holder: "Dorothy Hall",
    scope: "monitoring:config",
    resource: "Monitoring",
    action: "configure",
    value: "granted",
    starts_at: "2024-01-15",
    ends_at: "2026-01-15",
  },
  {
    id: 25,
    title: "Alert Manager",
    description: "Manage alerts and notifications",
    holder: "Kevin Allen",
    scope: "alerts:manage",
    resource: "Alert System",
    action: "manage",
    value: "pending",
    starts_at: "2024-06-05",
    ends_at: "2024-12-05",
  },
  {
    id: 26,
    title: "Resource Allocation",
    description: "Allocate system resources",
    holder: "Susan Sanchez",
    scope: "resources:allocate",
    resource: "Resource Manager",
    action: "allocate",
    value: "granted",
    starts_at: "2024-03-01",
    ends_at: "2025-03-01",
  },
  {
    id: 27,
    title: "Cost Analysis",
    description: "Analyze system costs",
    holder: "Paul Morris",
    scope: "costs:analyze",
    resource: "Finance",
    action: "analyze",
    value: "granted",
    starts_at: "2024-01-01",
    ends_at: "2025-12-31",
  },
  {
    id: 28,
    title: "Version Control",
    description: "Manage version control",
    holder: "Amanda Rogers",
    scope: "vcs:admin",
    resource: "Git Server",
    action: "manage",
    value: "denied",
    starts_at: "2024-04-15",
    ends_at: "2024-10-15",
  },
  {
    id: 29,
    title: "Deployment Manager",
    description: "Manage deployments",
    holder: "Dennis Green",
    scope: "deploy:manage",
    resource: "CI/CD Pipeline",
    action: "deploy",
    value: "granted",
    starts_at: "2024-01-20",
    ends_at: "2026-01-20",
  },
  {
    id: 30,
    title: "Compliance Check",
    description: "Check compliance status",
    holder: "Julie Adams",
    scope: "compliance:check",
    resource: "Compliance",
    action: "verify",
    value: "pending",
    starts_at: "2024-07-01",
    ends_at: "2025-01-01",
  },
];

const getBadgeClass = (value: string) => {
  switch (value) {
    case "granted":
      return "badge-success";
    case "denied":
      return "badge-danger";
    case "pending":
      return "badge-warning";
    default:
      return "badge-primary";
  }
};

export const SimpleTable: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Simple Table</h2>
        </div>
        <div className="card--content p-0">
          <table className="table">
            <thead className="table--header text-left">
              <tr className="table--row">
                <th className="table--header-cell table--col-xs p-12">ID</th>
                <th className="table--header-cell table--col-md p-12">Title</th>
                <th className="table--header-cell table--col-lg p-12">
                  Description
                </th>
                <th className="table--header-cell table--col-md p-12">
                  Holder
                </th>
                <th className="table--header-cell table--col-md p-12">Scope</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 5).map((row) => (
                <tr key={row.id} className="table--row">
                  <td className="table--cell table--col-xs p-12">{row.id}</td>
                  <td className="table--cell table--col-md bold p-12">
                    {row.title}
                  </td>
                  <td className="table--cell table--col-lg text-secondary p-12">
                    {row.description}
                  </td>
                  <td className="table--cell table--col-md p-12">
                    {row.holder}
                  </td>
                  <td className="table--cell table--col-md fs-12 p-12">
                    {row.scope}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};

export const StripedTable: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Striped Table</h2>
        </div>
        <div className="card--content p-0">
          <table className="table table--striped">
            <thead className="table--header text-left">
              <tr className="table--row">
                <th className="table--header-cell table--col-xs p-12">ID</th>
                <th className="table--header-cell table--col-md p-12">Title</th>
                <th className="table--header-cell table--col-lg p-12">
                  Description
                </th>
                <th className="table--header-cell table--col-md p-12">
                  Holder
                </th>
                <th className="table--header-cell table--col-md p-12">Scope</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 8).map((row) => (
                <tr key={row.id} className="table--row">
                  <td className="table--cell table--col-xs p-12">{row.id}</td>
                  <td className="table--cell table--col-md bold p-12">
                    {row.title}
                  </td>
                  <td className="table--cell table--col-lg text-secondary p-12">
                    {row.description}
                  </td>
                  <td className="table--cell table--col-md p-12">
                    {row.holder}
                  </td>
                  <td className="table--cell table--col-md fs-12 p-12">
                    {row.scope}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};

export const FullTable: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Full Data Table (30 Records)</h2>
        </div>
        <div className="card--content p-0">
          <table className="table table--striped">
            <thead className="table--header text-left">
              <tr className="table--row">
                <th className="table--header-cell table--col-xs p-12">ID</th>
                <th className="table--header-cell table--col-md p-12">Title</th>
                <th className="table--header-cell table--col-lg p-12">
                  Description
                </th>
                <th className="table--header-cell table--col-md p-12">
                  Holder
                </th>
                <th className="table--header-cell table--col-md p-12">Scope</th>
                <th className="table--header-cell table--col-md p-12">
                  Resource
                </th>
                <th className="table--header-cell table--col-sm p-12">
                  Action
                </th>
                <th className="table--header-cell table--col-md p-12">Value</th>
                <th className="table--header-cell table--col-md p-12">
                  Starts At
                </th>
                <th className="table--header-cell table--col-md p-12">
                  Ends At
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="table--row">
                  <td className="table--cell table--col-xs p-12">{row.id}</td>
                  <td className="table--cell table--col-md bold p-12">
                    {row.title}
                  </td>
                  <td className="table--cell table--col-lg text-secondary p-12">
                    {row.description}
                  </td>
                  <td className="table--cell table--col-md p-12">
                    {row.holder}
                  </td>
                  <td className="table--cell table--col-md fs-12 p-12">
                    {row.scope}
                  </td>
                  <td className="table--cell table--col-md fs-12 p-12">
                    {row.resource}
                  </td>
                  <td className="table--cell table--col-sm fs-12 p-12">
                    {row.action}
                  </td>
                  <td className="table--cell table--col-md p-12">
                    <span className={`badge ${getBadgeClass(row.value)}`}>
                      {row.value}
                    </span>
                  </td>
                  <td className="table--cell table--col-md fs-12 p-12">
                    {row.starts_at}
                  </td>
                  <td className="table--cell table--col-md fs-12 p-12">
                    {row.ends_at}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};

export const CompactTable: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Compact Table</h2>
        </div>
        <div className="card--content p-0">
          <table className="table table--compact table--striped">
            <thead className="table--header text-left">
              <tr className="table--row">
                <th className="table--header-cell table--col-xs p-12">ID</th>
                <th className="table--header-cell table--col-md p-12">Title</th>
                <th className="table--header-cell table--col-lg p-12">
                  Description
                </th>
                <th className="table--header-cell table--col-md p-12">
                  Holder
                </th>
                <th className="table--header-cell table--col-md p-12">
                  Resource
                </th>
                <th className="table--header-cell table--col-md p-12">Value</th>
                <th className="table--header-cell table--col-md p-12">
                  Starts At
                </th>
                <th className="table--header-cell table--col-md p-12">
                  Ends At
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="table--row">
                  <td className="table--cell table--col-xs p-8">{row.id}</td>
                  <td className="table--cell table--col-md bold p-8">
                    {row.title}
                  </td>
                  <td className="table--cell table--col-lg text-secondary p-8">
                    {row.description}
                  </td>
                  <td className="table--cell table--col-md p-8">
                    {row.holder}
                  </td>
                  <td className="table--cell table--col-md p-8">
                    {row.resource}
                  </td>
                  <td className="table--cell table--col-md p-8">
                    <span className={`badge ${getBadgeClass(row.value)}`}>
                      {row.value}
                    </span>
                  </td>
                  <td className="table--cell table--col-md p-8">
                    {row.starts_at}
                  </td>
                  <td className="table--cell table--col-md p-8">
                    {row.ends_at}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};

export const TableWithActions: Story = {
  render: () => (
    <div className="p-20">
      <div className="card">
        <div className="card--header p-20">
          <h2 className="card--title">Table with Action Buttons</h2>
        </div>
        <div className="card--content p-0">
          <table className="table table--striped">
            <thead className="table--header text-left">
              <tr className="table--row">
                <th className="table--header-cell table--col-xs p-12">ID</th>
                <th className="table--header-cell table--col-md p-12">Title</th>
                <th className="table--header-cell table--col-lg p-12">
                  Description
                </th>
                <th className="table--header-cell table--col-md p-12">
                  Holder
                </th>
                <th className="table--header-cell table--col-md p-12">Value</th>
                <th className="table--header-cell table--col-md p-12">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 10).map((row) => (
                <tr key={row.id} className="table--row">
                  <td className="table--cell table--col-xs p-12">{row.id}</td>
                  <td className="table--cell table--col-md bold p-12">
                    {row.title}
                  </td>
                  <td className="table--cell table--col-lg text-secondary p-12">
                    {row.description}
                  </td>
                  <td className="table--cell table--col-md p-12">
                    {row.holder}
                  </td>
                  <td className="table--cell table--col-md p-12">
                    <span className={`badge ${getBadgeClass(row.value)}`}>
                      {row.value}
                    </span>
                  </td>
                  <td className="table--cell table--col-md p-12">
                    <div className="flex gap-8">
                      <button className="btn btn--primary btn--small">
                        Edit
                      </button>
                      <button className="btn btn--secondary btn--small">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};
