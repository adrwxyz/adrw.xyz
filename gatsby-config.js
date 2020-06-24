module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Andrew Alexander // adrw`,
    // Default title of the page
    siteTitleAlt: `Andrew Alexander // adrw`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Andrew Alexander // adrw`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://adrw.xyz`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/img/logos/h.png`,
    // Twitter Handle
    author: `Andrew Alexander`
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-minimal-blog",
      options: {
        // Date format
        formatString: "YYYY-MM-DD",
        // Links displayed in the header on the right side
        externalLinks: [
          {
            name: `Kitchen Alexander`,
            url: `https://kitchen.alxdr.ca`
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/andrew.alxdr`
          }
        ],
        // Navigation links
        navigation: [
          {
            title: `Now`,
            slug: `/now`
          },
          {
            title: `Notes`,
            slug: `/tags`
          },
          {
            title: `Feed`,
            slug: `/blog`
          }
        ],
        // Title for RSS feed
        feedTitle: `Andrew Alexander // adrw`
      }
    },
    {
      resolve: "@westegg/gatsby-theme-core",
      options: {
        matomoConfig: {
          siteId: "1",
          matomoUrl: "https://matomo.adrw.xyz",
          siteUrl: "https://adrw.xyz"
        }
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
    }
  ]
}
