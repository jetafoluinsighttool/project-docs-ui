import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "📁 documentation",
    href: "/documentation",
    heading: "Jet Afolu Insight Tool",
  },
  {
    spacer: true,
  },
  {
    title: "📁 Introduction",
    href: "/introduction",
    items: [
      {
        title: "Project vision",
        href: "/project-vision",
      },
      {
        title: "General structure",
        href: "/general-structure",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "📁 Interface",
    href: "/interface",
    items: [
      {
        title: "Landing page",
        href: "/landing-page",
      },
      {
        title: "Application ui",
        href: "/application-ui",
      },
      {
        title: "Documentation ui",
        href: "/documentation-ui",
      },
      {
        title: "Important links",
        href: "/important-links",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "📁 Logic",
    href: "/logic",
    items: [
      {
        title: "Backend introduction",
        href: "/backend-introduction",
      },
      {
        title: "Project instance-api",
        href: "/project-instance-api",
        items: [
          {
            title: "Project instance api gateway",
            href: "/project-instance-api-gateway",
          },
          {
            title: "Project instance lambdas",
            href: "/project-instance-lambdas",
          },
          {
            title: "Project instance architecture",
            href: "/project-instance-architecture",
          },
          {
            title: "Project instance security",
            href: "/project-instance-security",
          },
          {
            title: "Project instance storage",
            href: "/project-instance-storage",
          }
        ]
      },
      {
        title: "Project template-api",
        href: "/project-template-api",
        items: [
          {
            title: "Project template api-gateway",
            href: "/project-template-api-gateway",
          },
          {
            title: "Project template architecture",
            href: "/project-template-architecture",
          },
          {
            title: "Project template cache",
            href: "/project-template-cache",
          },
          {
            title: "Project template lambdas",
            href: "/project-template-lambdas",
          },
          {
            title: "Project template security",
            href: "/project-template-security",
          },
          {
            title: "Project template storage",
            href: "/project-template-storage",
          },
          {
            title: "Project template storage configuration",
            href: "/project-template-storage-configuration",
          },
          {
            title: "Project template storage configuration questions",
            href: "/project-template-storage-configuration-questions",
          },
        ]
      },
      {
        title: "Project reviewer api",
        href: "/project-reviewer-api",
      },
      {
        title: "Project auth api",
        href: "/project-auth-api",
      },
      {
        title: "Important links",
        href: "/important-links",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "📁 Infrastructure",
    href: "/infrastructure",
    items: [
      {
        title: "Cdk setup",
        href: "/cdk-setup",
      },
      {
        title: "Environments",
        href: "/environments",
      },
      {
        title: "Domains",
        href: "/domains",
      },
      {
        title: "Deployment guide",
        href: "/deployment-guide",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "📁 Credentials",
    href: "/credentials",
    items: [
      {
        title: "Platform access",
        href: "/platform-access",
      },
      {
        title: "Aws user creation",
        href: "/aws-user-creation",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "📁 Just Transition Indicator",
    href: "/just-transition-indicator",
    items: [
      {
        title: "Jti concept",
        href: "/jti-concept",
      },
      {
        title: "Jti implementation",
        href: "/jti-implementation",
      },
    ],
  },
]
