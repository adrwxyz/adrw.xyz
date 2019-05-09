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
  ],
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    }
  ]
};
