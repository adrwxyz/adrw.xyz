import CMS from "netlify-cms"
import MdxPreview from "./preview-templates/MdxPreview"

CMS.registerPreviewTemplate("blog-post", MdxPreview)
CMS.registerPreviewTemplate("note", MdxPreview)
CMS.registerPreviewTemplate("page", MdxPreview)
CMS.registerPreviewTemplate("project", MdxPreview)
CMS.registerPreviewTemplate("song", MdxPreview)
