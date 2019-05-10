import React from "react"
import { MDXRenderer } from "gatsby-mdx"

const MdxPreview = ({ widgetFor }) => (
  <MDXRenderer children={widgetFor("body")} />
)

export default MdxPreview
