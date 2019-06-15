module.exports = {
  siteMetadata: {
    title: "andrew.fm"
  },
  __experimentalThemes: [
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
    }
  ]
}
