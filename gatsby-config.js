module.exports = {
  siteMetadata: {
    title: "andrew.fm"
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-digital-garden",
      options: {
        notesPath: "/notes"
      }
    },
    {
      resolve: "gatsby-theme-digital-garden-blog",
      options: {
        postsPath: "/blog"
      }
    },
    {
      resolve: "gatsby-theme-digital-garden-portfolio",
      options: {
        projectsPath: "/projects",
        projects: "projects"
      }
    }
  ]
};
