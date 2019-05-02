import React from "react";
import { Link } from "gatsby";
import { css, Styled } from "theme-ui";
import { Header } from "theme-ui/layout";

import { Box } from "./ui";
import useSiteMetadata from "../use-site-metadata";

export default () => {
  const { title } = useSiteMetadata();

  return (
    <Header
      css={css({
        p: [3, 4],
        bg: "background"
      })}
    >
      <Styled.a as={Link} to="/">
        {title}
      </Styled.a>
      <Box mx="auto" />
      <Styled.a href={"https://andrew.fm/experience"}>Experience</Styled.a>
      <Box mx={1} />
      <Styled.a href={"https://andrew.fm/projects"}>Projects</Styled.a>
      <Box mx={1} />
      <Styled.a href={"https://andrew.fm/blog"}>Blog</Styled.a>
      <Box mx={1} />
      <Styled.a as={Link} to={"/notes"}>
        Notes
      </Styled.a>
      <Box mx={1} />
      <Styled.a as={Link} to="/about">
        About
      </Styled.a>
      <Box mx={1} />
      <Styled.a as={Link} to="/contact">
        Contact
      </Styled.a>
    </Header>
  );
};
