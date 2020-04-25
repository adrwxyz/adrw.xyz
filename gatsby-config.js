module.exports = {
  siteMetadata: {
    title: "adrw.xyz"
  },
  plugins: [
    {
      resolve: "@westegg/gatsby-theme-digital-garden",
      options: {
        header: {
          home: {
            href: "/",
            label: "/img/logos/h.png"
          },
          links: [
            {
              href: "/projects",
              label: "Projects"
            },
            {
              href: "/blog",
              label: "Writing"
            },
            {
              href: "/notes",
              label: "Notes"
            }
          ]
        },
        notesPath: "/notes",
        postsPath: "/blog",
        projectsPath: "/projects",
        projects: "projects"
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png",

        // WebApp Manifest Configuration
        appName: "adrw.xyz", // Inferred with your package.json
        appDescription: "Andrew Alexander | ADRW Digital",
        developerName: "Andrew Alexander",
        developerURL: "adrw.xyz"
      }
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://matomo.adrw.xyz",
        siteUrl: "https://adrw.xyz"
      }
    }
  ]
}
