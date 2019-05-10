import React from "react"
import { MDXRenderer } from "gatsby-mdx"
import { ThemeProvider } from "emotion-theming"
import { Layout } from "gatsby-theme-digital-garden"
import theme from "../../gatsby-theme-digital-garden/theme"

const MdxPreview = ({ widgetFor }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <MDXRenderer children={widgetFor("body")} />
    </Layout>
  </ThemeProvider>
)

export default MdxPreview
