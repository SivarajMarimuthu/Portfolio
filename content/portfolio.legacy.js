export const projects = [
  {
    slug: "retail-in-shop-platform",
    title: "Enterprise Retail In-Shop Assistance Platform",
    domain: "Retail technology",
    summary:
      "A high-volume platform supporting in-store customer engagement, campaign workflows, membership capture, dashboards and reporting.",
    visual: "retail",
    role: "Software Engineer with technical lead responsibilities",
    context:
      "Retail operations required reliable customer-engagement workflows, client-specific interfaces, reporting and production support across multiple store environments. Client-identifying details and proprietary workflows are intentionally omitted.",
    contributions: [
      {
        title: "Role and responsibilities",
        items: [
          "Owned important platform modules from requirements through production support.",
          "Participated in client discussions, coordinated junior developers and mentored interns.",
          "Worked across backend APIs, frontend integration, data workflows and deployment.",
        ],
      },
      {
        title: "Frontend contribution",
        items: [
          "Integrated React interfaces with backend services and client-specific workflows.",
          "Built operational dashboards using Chart.js.",
          "Worked with a UI team while also implementing application functionality.",
        ],
      },
      {
        title: "Backend and data",
        items: [
          "Converted and developed Python Flask REST APIs.",
          "Worked with PostgreSQL and MySQL schemas containing large operational datasets.",
          "Implemented authentication, campaign workflows, reporting and integrations.",
        ],
      },
      {
        title: "Automation and production",
        items: [
          "Created Python automation for reports, campaign data, scheduled email, files and database maintenance.",
          "Deployed and supported applications using AWS EC2, S3, RDS, Linux, Nginx and Gunicorn.",
          "Handled environment configuration, SSL, DNS and production services.",
        ],
      },
    ],
    outcomes: [
      "Supported operations across more than 500 stores in combined brand deployments.",
      "Worked with databases containing millions of records.",
      "Automation reduced recurring manual effort by approximately two to three hours daily.",
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
      "Linux",
      "Nginx",
      "Gunicorn",
    ],
  },
  {
    slug: "game-center-pos",
    title: "Game Center Billing & POS System",
    domain: "Business operations",
    summary:
      "A custom application for billing, gaming-session time, inventory, snack sales, expenses, employees and daily closing.",
    visual: "pos",
    role: "Independent Full-Stack Developer",
    context:
      "The game center needed one reliable application to manage time-based services, point-of-sale billing and daily operational records without relying on disconnected manual processes.",
    contributions: [
      {
        title: "Product workflow",
        items: [
          "Created billing and POS flows for gaming sessions and snack sales.",
          "Added PC and console time tracking, receipt printing and daily closing.",
          "Built inventory, expense, employee and reporting workflows.",
        ],
      },
      {
        title: "Frontend contribution",
        items: [
          "Built the responsive React application and operational screens.",
          "Designed clear role-specific workflows for admin and manager users.",
          "Handled real-time UI updates required by session and billing operations.",
        ],
      },
      {
        title: "Backend and database",
        items: [
          "Developed REST APIs using Node.js and Express.js.",
          "Implemented JWT authentication and role-based access.",
          "Designed and integrated the MySQL database for core operational modules.",
        ],
      },
      {
        title: "Maintenance",
        items: [
          "Supported feature changes and production bug fixes.",
          "Improved workflows based on operational feedback.",
          "Maintained the application as business requirements evolved.",
        ],
      },
    ],
    outcomes: [
      "Unified billing, time tracking, sales and closing workflows.",
      "Reduced reliance on disconnected manual records.",
      "Provided role-specific access for administrators and managers.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
  },
  {
    slug: "python-business-automation",
    title: "Python Business Automation",
    domain: "Workflow automation",
    summary:
      "Automation workflows for reports, campaign data, scheduled communication, files and database maintenance.",
    visual: "automation",
    role: "Python Developer / Automation Engineer",
    context:
      "Recurring operational work required consistent processing and scheduled delivery. The goal was to reduce repetitive manual effort while keeping workflows maintainable and observable.",
    contributions: [
      {
        title: "Workflow analysis",
        items: [
          "Mapped repeatable business tasks and their inputs, outputs and schedules.",
          "Separated reusable processing steps from project-specific rules.",
          "Added clear logging and error handling for operational support.",
        ],
      },
      {
        title: "Data and reporting",
        items: [
          "Processed campaign and operational data from databases and files.",
          "Generated Excel, CSV and PDF outputs.",
          "Prepared scheduled reports for business teams.",
        ],
      },
      {
        title: "Scheduling and communication",
        items: [
          "Scheduled recurring jobs with Linux cron.",
          "Automated email delivery and file movement.",
          "Maintained recurring database-cleanup workflows.",
        ],
      },
      {
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
    technologies: [
      "Python",
      "SQL",
      "Excel/CSV",
      "PDF",
      "Email",
      "Linux",
      "Cron",
      "AWS",
    ],
  },
  {
    slug: "grocery-ecommerce-marketplace",
    title: "Grocery E-commerce Marketplace",
    domain: "E-commerce",
    summary:
      "A grocery marketplace connecting customers with local vendors through product, ordering, authentication and payment workflows.",
    visual: "commerce",
    role: "Junior Full-Stack Developer",
    context:
      "The product connected customers with local vendors and supported browsing, ordering and administrative workflows. Business-sensitive details are kept general, and deployment ownership is not claimed.",
    contributions: [
      {
        title: "Role and responsibilities",
        items: [
          "Contributed across frontend, backend APIs and database development.",
          "Participated in client communication, requirements, demonstrations and feedback.",
          "Handled feature development, production bug fixing and maintenance.",
        ],
      },
      {
        title: "Frontend and API integration",
        items: [
          "Built responsive AngularJS interfaces using HTML, CSS and JavaScript.",
          "Integrated product, ordering, authentication and administrative workflows.",
          "Connected frontend checkout with backend transaction processing.",
        ],
      },
      {
        title: "Backend and database",
        items: [
          "Developed APIs and business workflows using PHP CodeIgniter.",
          "Worked with MySQL schemas for users, products, vendors, orders and payments.",
          "Implemented authentication, password reset and role-based access.",
        ],
      },
      {
        title: "Payment workflow",
        items: [
          "Integrated Razorpay checkout on the frontend.",
          "Implemented backend signature verification and webhook handling.",
          "Updated transaction and order status after verified payment responses.",
        ],
      },
    ],
    outcomes: [
      "Delivered customer, vendor and administrator workflows.",
      "Integrated authenticated ordering and verified payment processing.",
      "Supported ongoing product improvements and production issue resolution.",
    ],
    technologies: [
      "AngularJS",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Razorpay",
    ],
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
      "Production bug fixing, performance improvements, feature additions, API updates and ongoing application support.",
  },
];

export const experiences = [
  {
    company: "Saturam Infosystems",
    role: "Software Engineer",
    period: "Feb 2022 – 2024",
    summary:
      "Python and Flask APIs, React integration, AWS deployment, automation, production support and technical lead responsibilities.",
  },
  {
    company: "Navil Softwares",
    role: "Junior Full-Stack Developer",
    period: "Mar 2020 – Dec 2021",
    summary:
      "Frontend, backend, REST APIs, databases, authentication, payments, client collaboration and production bug fixing.",
  },
  {
    company: "Independent Projects",
    role: "Freelance Software Engineer",
    period: "Project-based",
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
    items: [
      "Python",
      "Flask",
      "Node.js",
      "Express.js",
      "PHP",
      "CodeIgniter",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud & Production",
    items: [
      "AWS EC2",
      "S3",
      "RDS",
      "IAM",
      "Linux",
      "Nginx",
      "Gunicorn",
      "PM2",
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
