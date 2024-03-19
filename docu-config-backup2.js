// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

const fs = require('fs');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');
const resourceDOCS = fs.readFileSync('./src/snippets/resourceDOCS.html', 'utf-8');

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
    // PXM
    {
        id: 'pxm',
        path: 'docs/pxm',
        routeBasePath: '/docs/pxm',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'api-overview',
        path: 'docs/api-overview',
        routeBasePath: '/docs/api-overview',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'getting-started',
        path: 'docs/getting-started',
        routeBasePath: '/docs/getting-started',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'analytics',
        path: 'docs/analytics',
        routeBasePath: '/docs/commerce-cloud/analytics',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'accounts',
        path: 'docs/accounts',
        routeBasePath: '/docs/commerce-cloud/accounts',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'addresses',
        path: 'docs/addresses',
        routeBasePath: '/docs/commerce-cloud/addresses',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    // Commerce Cloud
    {
        id: 'authentication',
        path: 'docs/authentication',
        routeBasePath: '/docs/commerce-cloud/authentication',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'carts',
        path: 'docs/carts',
        routeBasePath: '/docs/commerce-cloud/carts',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'checkout',
        path: 'docs/checkout',
        routeBasePath: '/docs/commerce-cloud/checkout',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'custom-data',
        path: 'docs/custom-data',
        routeBasePath: '/docs/commerce-cloud/custom-data',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'customer-management',
        path: 'docs/customer-management',
        routeBasePath: '/docs/commerce-cloud/customer-management',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'global-project-settings',
        path: 'docs/global-project-settings',
        routeBasePath: '/docs/commerce-cloud/global-project-settings',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'integrations',
        path: 'docs/integrations',
        routeBasePath: '/docs/commerce-cloud/integrations',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'orders',
        path: 'docs/orders',
        routeBasePath: '/docs/commerce-cloud/orders',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'organizations',
        path: 'docs/organizations',
        routeBasePath: '/docs/commerce-cloud/organizations',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'payment',
        path: 'docs/payment',
        routeBasePath: '/docs/commerce-cloud/payments',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'personal-data',
        path: 'docs/personal-data',
        routeBasePath: '/docs/commerce-cloud/personal-data',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'promotions',
        path: 'docs/promotions',
        routeBasePath: '/docs/commerce-cloud/promotions',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'shipping-groups',
        path: 'docs/shipping-groups',
        routeBasePath: '/docs/commerce-cloud/shipping-groups',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    {
        id: 'team-management',
        path: 'docs/team-management',
        routeBasePath: '/docs/commerce-cloud/team-management',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    // Composer
    {
        id: 'composer',
        path: 'docs/composer',
        routeBasePath: '/docs/composer',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
    // Developer Tools
    {
        id: 'developer',
        path: 'docs/developer-tools',
        routeBasePath: '/docs/commerce-cloud/developer-tools',
        versions: {
            current: {
                label: 'v2',
            },
        },
    },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
    breadcrumbs: true,
    showLastUpdateTime: true,
    sidebarCollapsible: true,
    sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
                               sidebarPath = require.resolve('./sidebars-default.js'),
                               ...options
                           }) {
    return [
        '@docusaurus/plugin-content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
            ...defaultSettings,
            sidebarPath,
            ...options,
        }),
    ];
}
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Elastic Path Documentation',
    tagline: 'API, Commerce Manager, Guides and Documentation 🚀',
    url: 'https://elasticpath.dev',
    baseUrl: '/',
    favicon: '/favicon.ico',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "elasticpath", // Usually your GitHub org/user name.
    projectName: "elasticpath", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars-default.js"),
                    docLayoutComponent: "@theme/DocPage",
                    docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    ignorePatterns: ['/tags/**'],
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
            announcementBar: { //comment out when not needed, please do not remove
                id: 'support_us',
                content:
                    'We have rebuilt our documentation site and now include OpenAPI specifications for most endpoints.',
                backgroundColor: '#0E1521',
                textColor: '#FFFFFF',
                isCloseable: true,
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            navbar: {
                logo: {
                    href: '/',
                    src: '/logo/light.svg',
                    srcDark: '/logo/dark.svg',
                    alt: 'Elastic Path Docs',
                    height: '60px',
                    width: '120px',
                },
                hideOnScroll: true,
                items: [
                    {
                        label: 'Guides',
                        to: 'guides',
                        className: 'guides-top-header',
                    },
                    {
                        label: 'Docs',
                        type: 'dropdown',
                        className: 'nav-dropdown',
                        items: [
                            {
                                type: 'html',
                                value: resourceDOCS,
                                className: 'nav-dropdown',
                            },
                        ],
                    },
                    {
                        label: 'API Documentation',
                        to: '/api/',
                    },
                    {
                        label: 'Resources',
                        type: 'dropdown',
                        className: 'nav-dropdown resources-dropdown',
                        items: [
                            {
                                type: 'html',
                                value: resourcesHTML,
                                className: 'nav-dropdown',
                            },
                        ],
                    },
                    {
                        label: 'Support',
                        to: 'https://support.elasticpath.com',
                    },

                    {
                        type: 'search',
                        position: 'right',
                    },
                    {
                        label: 'Get in Touch',
                        href: 'https://www.elasticpath.com/get-in-touch',
                        position: 'right',
                        className: 'navbar-book-demo',
                    },
                    {
                        label: 'Free Trial',
                        href: 'https://useast.cm.elasticpath.com',
                        position: 'right',
                        className: 'dev-portal-signup dev-portal-link',
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["dart",
                    "ruby",
                    "groovy",
                    "kotlin",
                    "java",
                    "swift",
                    "objectivec",
                    "javascript",
                ],
                magicComments: [
                    {
                        className: 'theme-code-block-highlighted-line',
                        line: 'highlight-next-line',
                        block: { start: 'highlight-start', end: 'highlight-end' },
                    },
                    {
                        className: 'code-block-error-line',
                        line: 'highlight-next-line-error',
                    },
                ],
            },
        }),

    plugins: [
        [
            "docusaurus-plugin-openapi-docs",
            {
                id: "openapi",
                docsPluginId: "classic",
                config: {
                    accountmanagement: {
                        specPath: "openapispecs/accountmanagement.yaml",
                        outputDir: "docs/api/accountmanagement",
                        downloadUrl:
                            "http://localhost:3001/openapispecs/account-management.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    catalog: {
                        specPath: "openapispecs/catalog_view.yaml",
                        outputDir: "docs/api/pxm/catalog",
                        downloadUrl:
                            "./openapispecs/catalog_view.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    exporter: {
                        specPath: "openapispecs/exporter.yaml",
                        outputDir: "docs/api/exporter",
                        downloadUrl:
                            "./openapispecs/exporter.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    files: {
                        specPath: "openapispecs/files.yaml",
                        outputDir: "docs/api/pxm/files",
                        downloadUrl:
                            "./openapispecs/files.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    flows: {
                        specPath: "openapispecs/flows.yaml",
                        outputDir: "docs/api/flows",
                        downloadUrl:
                            "./openapispecs/flows.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    integrations: {
                        specPath: "openapispecs/integrations.yaml",
                        outputDir: "docs/api/integrations",
                        downloadUrl:
                            "./openapispecs/integrations.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    inventory: {
                        specPath: "openapispecs/inventory.yaml",
                        outputDir: "docs/api/inventory",
                        downloadUrl:
                            "./openapispecs/inventory.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    payments: {
                        specPath: "openapispecs/payments.yaml",
                        outputDir: "docs/api/payments",
                        downloadUrl:
                            "./openapispecs/payments.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    pim: {
                        specPath: "openapispecs/pim.yaml",
                        outputDir: "docs/api/pxm/pim",
                        downloadUrl:
                            "/openapispecs/pim.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    pricebooks: {
                        specPath: "openapispecs/pricebooks.yaml",
                        outputDir: "docs/api/pxm/pricebooks",
                        downloadUrl:
                            "./openapispecs/pricebooks.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    promotions: {
                        specPath: "openapispecs/promotions.yaml",
                        outputDir: "docs/api/promotions",
                        downloadUrl:
                            "./openapispecs/promotions.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                    // subscriptions: {
                    //   specPath: "openapispecs/subscriptions.yaml",
                    //   outputDir: "docs/api/subscriptions",
                    //    downloadUrl:
                    //        "/openapispecs/subscriptions.yaml",
                    //    sidebarOptions: {
                    //      groupPathsBy: "tag",
                    //      categoryLinkSource: "tag",
                    //    },
                    //  },
                },
            },
            ...docs_plugins,
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                /**
                 * Required for any multi-instance plugin
                 */
                id: 'changelog-pxm',
                /**
                 * URL route for the blog section of your site.
                 * *DO NOT* include a trailing slash.
                 */
                routeBasePath: 'changelog/pxm',
                /**
                 * Path to data on filesystem relative to site dir.
                 */
                path: './changelog/pxm',
            },
        ],
    ],

    themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
