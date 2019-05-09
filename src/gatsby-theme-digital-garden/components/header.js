import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"
import { Header } from "theme-ui/layout"

import { Box } from "./ui"

export default () => (
  <Header
    css={css({
      p: [3, 4],
      bg: "background"
    })}
  >
    <Helmet>
      <link rel="icon" type="image/png" href="/img/logos/h.png" sizes="32x32" />
    </Helmet>
    <Styled.a as={Link} to="/">
      <img
        alt=""
        src="/img/logos/hfm.png"
        style={{ maxHeight: "100%", width: "50px" }}
      />
    </Styled.a>
    <Box mx="auto" />
    <Box mx={1} />
    <Styled.a as={Link} to={"/projects"}>
      Projects
    </Styled.a>
    <Box mx={1} />
    <Styled.a as={Link} to={"/blog"}>
      Blog
    </Styled.a>
    <Box mx={1} />
    <Styled.a as={Link} to={"/notes"}>
      Notes
    </Styled.a>
  </Header>
)
