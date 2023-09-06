module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `adrw // Andrew Alexander`,
    // Default title of the page
    siteTitleAlt: `adrw // Andrew Alexander`,
    // Can be used for e.g. JSONLD
    siteHeadline: `adrw // Andrew Alexander`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://adrw.xyz`,
    // Used for SEO
    siteDescription: `adrw // Andrew Alexander`,
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
            name: `LinkedIn`,
            url: `https://linkedin.com/in/adrw`
          },
          {
            name: `Github`,
            url: `https://github.com/adrw`
          },
        ],
        // Navigation links
        navigation: [
          {
            title: `Now`,
            slug: `/now`
          },
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `Tags`,
            slug: `/tags`
          },
        ],
        // Title for RSS feed
        feedTitle: `adrw // Andrew Alexander`
      }
    },
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: 'hourglass', // delete or `undefined` to disable password protection
        pagePaths: [
          '/books',
          '/cache',
          '/code',
          '/faith',
          '/finance',
          '/health',
          '/me',
          '/news',
          '/private',
          '/scenes',
          '/songs',
          '/travel'
        ],
        partialMatching: true
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adrw // Andrew Alexander`,
        short_name: `adrw`,
        description: `adrw // Andrew Alexander`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LGH29TMSBH", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          // anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: false,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "adrw.xyz",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    }
  ]
}
