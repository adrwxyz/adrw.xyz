/**
 * Write-only the password as cookie
 */
import { setSessionPassword } from "@mkitio/gatsby-theme-password-protect/src/utils/utils"
import React, { useState } from "react"

const styles = {
  wrapper: {
    height: "100vh",
    background: "#777",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "100%",
    height: "48px",
    borderRadius: "4px"
  },
  button: {
    width: "100%",
    height: "48px",
    background: "#111",
    color: "#fff",
    border: "2px solid white",
    borderRadius: "4px",
    marginTop: "16px",
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "sans-serif"
  },
  buttonHover: {
    background: "#fff",
    color: "#000000"
  },
  link: {
    borderBottom: "1px solid #fff",
    color: "#fff",
    fontFamily: "sans-serif",
    textDecoration: "none"
  }
}

const PasswordProtect = () => {
  const [password, setPassword] = useState("")
  const [isButtonHovered, buttonHover] = useState(false)

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <div style={styles.wrapper}>
      <img src="../../img/logos/h-300.png" />

      <h1 style={{ color: "#fff" }}>🔐</h1>

      <form onSubmit={onSubmit} style={{ width: "320px" }}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null)
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Unlock
        </button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />

      <a
        href="javascript:history.back()"
        rel="noopener noreferrer"
        style={styles.link}
      >
        Go Back
      </a>
      <br />
      <a href="/" rel="noopener noreferrer" style={styles.link}>
        Home
      </a>
    </div>
  )
}

export default PasswordProtect
