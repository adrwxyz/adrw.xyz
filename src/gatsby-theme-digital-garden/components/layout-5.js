import React from "react"
import { Global } from "@emotion/core"
import { css } from "theme-ui"
import { Layout, Main, Container } from "theme-ui/layout"
import Header from "./header"
import Footer from "../../components/footer"
import { ThemeProvider } from "emotion-theming"
import theme from "../theme"

export default props => (
  <>
    <Global
      styles={css({
        "*": {
          boxSizing: "border-box"
        },
        body: {
          margin: 0,
          color: "text",
          bg: "background"
        }
      })}
    />
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Main>
          <Container>{props.children}</Container>
        </Main>
        <Footer />
      </Layout>
    </ThemeProvider>
  </>
)
