/*
 * ACTIVE PROJECT CONTENT
 *
 * The complete previous dataset is preserved in `portfolio.legacy.js`.
 * This active version adds semantic section identifiers, project-specific
 * image metadata and the wording approved during the desktop review.
 */
export const projects = [
  {
    slug: "retail-in-shop-platform",
    title: "Enterprise Retail In-Shop Assistance Platform",
    domain: "Retail technology",
    summary:
      "A high-volume platform supporting in-store customer engagement, campaign workflows, membership capture, dashboards and reporting.",
    visual: "retail",
    image: "/images/portfolio/enterprise-retail-v2.png",
    imageAlt:
      "Enterprise retail workflow with connected store operations and reporting",
    role: "Software Engineer with technical lead responsibilities",
    context:
      "Retail operations required reliable customer-engagement workflows, client-specific interfaces, reporting and production support across multiple store environments. Client-identifying details and proprietary workflows are intentionally omitted.",
    contributions: [
      {
        id: "responsibilities",
        label: "Role & responsibilities",
        title: "Role and responsibilities",
        items: [
          "Owned key platform modules from requirements through production support.",
          "Participated in client discussions, coordinated junior developers and mentored interns.",
          "Worked across backend APIs, frontend integration, data workflows and deployment.",
        ],
      },
      {
        id: "frontend",
        label: "Frontend",
        title: "Frontend contribution",
        items: [
          "Integrated React interfaces with backend services and client-specific workflows.",
          "Built operational dashboards using Chart.js.",
          "Worked with a UI team while also implementing application functionality.",
        ],
      },
      {
        id: "backend-data",
        label: "Backend & data",
        title: "Backend and data",
        items: [
          "Converted existing application functionality into Flask REST APIs and developed new API capabilities.",
          "Worked with PostgreSQL and MySQL schemas containing large operational datasets.",
          "Implemented authentication, campaign workflows, reporting and integrations.",
        ],
      },
      {
        id: "automation-production",
        label: "Automation & production",
        title: "Automation and production",
        items: [
          "Created Python automation for reports, campaign data, scheduled email, files and database maintenance.",
          "Deployed and supported applications using AWS EC2, S3, RDS, Linux, Nginx and Gunicorn.",
          "Handled environment configuration, SSL, DNS and production services.",
        ],
      },
    ],
    outcomes: [
      "Contributed to supporting operations across more than 500 stores in combined deployments.",
      "Worked with databases containing millions of records.",
      "Automation reduced recurring operational effort by approximately 2–3 hours per day.",
    ],
    technologies: [
      "Python",
      "Flask",
      "React",
      "PostgreSQL",
      "MySQL",
      "Chart.js",
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS IAM",
      "Linux",
      "Nginx",
      "Gunicorn",
    ],
    technologyHeading: "Technology used",
  },
  {
    slug: "game-center-pos",
    title: "Game Center Billing & POS System",
    domain: "Billing & POS",
    summary:
      "A custom application for billing, PC and console session tracking, inventory, snack sales, expenses, employee access and daily closing.",
    visual: "pos",
    image: "/images/portfolio/game-center-pos-v2.png",
    imageAlt:
      "Game center billing, point-of-sale and session-tracking workflow",
    role: "Independent Full-Stack Developer",
    context:
      "The game center needed one reliable application to manage time-based services, point-of-sale billing and daily operational records without relying on disconnected manual processes.",
    contributions: [
      {
        id: "product-workflow",
        label: "Product workflow",
        title: "Product workflow",
        items: [
          "Created billing and POS flows for gaming sessions and snack sales.",
          "Added PC and console time tracking, receipt printing and daily closing.",
          "Built inventory, expense tracking, employee access and reporting workflows.",
        ],
      },
      {
        id: "frontend",
        label: "Frontend",
        title: "Frontend contribution",
        items: [
          "Built the responsive React application and operational screens.",
          "Implemented role-specific workflows for administrator and manager users.",
          "Implemented interface updates for session timing and billing operations.",
        ],
      },
      {
        id: "backend-database",
        label: "Backend & database",
        title: "Backend and database",
        items: [
          "Developed REST APIs using Node.js and Express.js.",
          "Implemented JWT authentication and role-based access.",
          "Designed and integrated the MySQL database for core operational modules.",
        ],
      },
      {
        id: "maintenance",
        label: "Maintenance",
        title: "Maintenance",
        items: [
          "Supported feature changes and production bug fixes.",
          "Improved workflows based on operational feedback.",
          "Maintained the application as business requirements evolved.",
        ],
      },
    ],
    outcomes: [
      "Unified billing, session tracking, sales and daily-closing workflows.",
      "Reduced reliance on disconnected manual records.",
      "Provided role-specific access for administrators and managers.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
    technologyHeading: "Technology used",
  },
  {
    slug: "python-business-automation",
    title: "Python Business Automation",
    domain: "Workflow automation",
    summary:
      "Automation workflows for recurring reports, campaign processing, scheduled communication, file operations and database maintenance.",
    visual: "automation",
    image: "/images/portfolio/python-automation-v2.png",
    imageAlt:
      "Automated business workflow connecting data, processing and scheduled delivery",
    role: "Software Engineer · Python Automation",
    context:
      "Recurring operational work required consistent processing and scheduled delivery. The goal was to reduce repetitive manual effort while making workflows easier to monitor, maintain and support.",
    contributions: [
      {
        id: "workflow-analysis",
        label: "Workflow analysis",
        title: "Workflow analysis",
        items: [
          "Mapped repeatable business tasks and their inputs, outputs and schedules.",
          "Structured recurring processing steps around project-specific requirements.",
          "Used logs and error handling to support recurring operational jobs.",
        ],
      },
      {
        id: "data-reporting",
        label: "Data & reporting",
        title: "Data and reporting",
        items: [
          "Processed campaign and operational data from databases and files.",
          "Generated Excel, CSV and PDF outputs.",
          "Prepared scheduled reports for business teams.",
        ],
      },
      {
        id: "scheduling-delivery",
        label: "Scheduling & delivery",
        title: "Scheduling and delivery",
        items: [
          "Scheduled recurring jobs with Linux cron.",
          "Automated email delivery and file movement.",
          "Maintained recurring database-cleanup workflows.",
        ],
      },
      {
        id: "production-support",
        label: "Production support",
        title: "Production support",
        items: [
          "Ran automation on Linux and AWS environments.",
          "Investigated failures using logs and job output.",
          "Adjusted workflows as operational requirements changed.",
        ],
      },
    ],
    outcomes: [
      "Reduced repetitive manual work.",
      "Improved consistency of scheduled operations.",
      "Made recurring processes easier to maintain and support.",
    ],
    technologies: [],
    technologyHeading: "Tools and delivery formats",
    technologyGroups: [
      { title: "Core tools", items: ["Python", "SQL", "Linux", "cron", "AWS"] },
      {
        title: "Outputs and delivery",
        items: ["Excel", "CSV", "PDF", "Email"],
      },
    ],
  },
  {
    slug: "grocery-ecommerce-marketplace",
    title: "Grocery E-commerce Marketplace",
    domain: "E-commerce",
    summary:
      "A grocery marketplace connecting customers with local vendors through product, ordering, authentication and payment workflows.",
    visual: "commerce",
    image: "/images/portfolio/grocery-ecommerce-v2.png",
    imageAlt:
      "Grocery marketplace storefront, ordering, payment and delivery workflow",
    role: "Junior Full-Stack Developer",
    context:
      "The product connected customers with local vendors and supported browsing, ordering and administrative workflows. This case study focuses on my contribution while keeping business-sensitive details general.",
    contributions: [
      {
        id: "responsibilities",
        label: "Role & responsibilities",
        title: "Role and responsibilities",
        items: [
          "Contributed across frontend, backend APIs and database development.",
          "Participated in client communication, requirements, demonstrations and feedback.",
          "Handled feature development, production issue resolution and maintenance.",
        ],
      },
      {
        id: "frontend-integration",
        label: "Frontend & integration",
        title: "Frontend and API integration",
        items: [
          "Built responsive AngularJS interfaces using HTML, CSS and JavaScript.",
          "Integrated product, ordering, authentication and administrative workflows.",
          "Connected frontend checkout with backend transaction processing.",
        ],
      },
      {
        id: "backend-database",
        label: "Backend & database",
        title: "Backend and database",
        items: [
          "Developed APIs and business workflows using PHP CodeIgniter.",
          "Worked with MySQL schemas for users, products, vendors, orders and payments.",
          "Implemented authentication, password reset and role-based access.",
        ],
      },
      {
        id: "payment-workflow",
        label: "Payment workflow",
        title: "Payment workflow",
        items: [
          "Integrated Razorpay checkout on the frontend.",
          "Implemented backend signature verification and webhook handling.",
          "Updated transaction and order status after verified payment responses.",
        ],
      },
    ],
    outcomes: [
      "Implemented workflows for customers, vendors and administrators.",
      "Integrated authenticated ordering and verified payment processing.",
      "Contributed to ongoing product improvements and production issue resolution.",
    ],
    technologies: [
      "AngularJS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Razorpay",
    ],
    technologyHeading: "Technology and integrations",
  },
];

export const services = [
  {
    title: "Custom Full-Stack Web Application Development",
    description:
      "Complete business applications covering responsive interfaces, backend functionality, databases, authentication and integrations.",
  },
  {
    title: "Frontend Development & UI Integration",
    description:
      "Responsive interfaces, dashboards, forms and application workflows developed from provided designs or existing requirements.",
  },
  {
    title: "Backend API Development",
    description:
      "Structured REST APIs for authentication, business logic, data operations, reporting and frontend communication.",
  },
  {
    title: "Business Workflow Automation",
    description:
      "Automation for recurring reports, data processing, scheduled communication, file operations and database maintenance.",
  },
  {
    title: "Cloud Deployment & Production Support",
    description:
      "Application deployment, server configuration, environment management, web-server setup and production troubleshooting.",
  },
  {
    title: "Application Maintenance & Enhancements",
    description:
      "Production issue resolution, performance improvements, feature additions, API updates and ongoing application support.",
  },
];

export const experiences = [
  {
    company: "Navil Softwares",
    role: "Junior Full-Stack Developer",
    period: "Mar 2020 – Dec 2021",
    summary:
      "Frontend and backend development, REST APIs, databases, authentication, payment integrations, client collaboration and production issue resolution.",
  },
  {
    company: "Saturam Infosystems",
    role: "Software Engineer",
    period: "Feb 2022 – Jul 2023",
    summary:
      "Backend APIs, frontend integration, AWS deployment, workflow automation, production support and technical coordination.",
  },
  {
    company: "Independent Projects",
    role: "Freelance Software Engineer",
    period: "Independent · Project-based",
    summary:
      "Billing and POS software, e-commerce administration, business applications and occasional Android work.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Angular",
      "AngularJS",
      "Bootstrap",
      "Chart.js",
    ],
  },
  {
    title: "Backend",
    items: ["Python", "Flask", "Node.js", "Express.js", "PHP", "CodeIgniter"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud & Production",
    items: ["AWS EC2", "S3", "RDS", "IAM", "Linux", "Nginx", "Gunicorn", "PM2"],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
