module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `adrw.xyz`,
    // Default title of the page
    siteTitleAlt: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://minimal-blog.lekoarts.de`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/lekoarts_de`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/lekoarts.de/`
      }
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`
      }
    ]
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-minimal-blog",
      options: {
        navigation: [
          {
            title: "Projects",
            slug: "/projects"
          },
          {
            title: "Writing",
            slug: "/blog"
          },
          {
            title: "Notes",
            slug: "/notes"
          }
        ]
      }
    },
    // {
    //   resolve: "@westegg/gatsby-theme-digital-garden",
    //   options: {
    //     header: {
    //       home: {
    //         href: "/",
    //         label: "/img/logos/h.png"
    //       },
    //       links: [
    // {
    //   href: "/projects",
    //   label: "Projects"
    // },
    // {
    //   href: "/blog",
    //   label: "Writing"
    // },
    // {
    //   href: "/notes",
    //   label: "Notes"
    // }
    //       ]
    //     },
    //     notesPath: "/notes",
    //     postsPath: "/blog",
    //     projectsPath: "/projects",
    //     projects: "projects"
    //   }
    // },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://matomo.adrw.xyz",
        siteUrl: "https://adrw.xyz"
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
}
