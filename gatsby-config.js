module.exports = {
  siteMetadata: {
    title: "andrew.fm"
  },
  plugins: [
    {
      resolve: "@westegg/gatsby-theme-digital-garden",
      options: {
        header: {
          home: {
            href: "/",
            label: "/img/logos/hfm.png"
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
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://matomo.adrw.xyz",
        siteUrl: "https://adrw.xyz"
      }
    }
  ]
}
