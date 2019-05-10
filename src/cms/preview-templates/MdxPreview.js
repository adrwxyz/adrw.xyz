import React from "react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

const MdxPreview = ({ widgetFor }) => (
  <MDXRenderer children={widgetFor("body")} />
)

export default MdxPreview
