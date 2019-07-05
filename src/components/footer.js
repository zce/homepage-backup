import React from 'react'

import { rhythm, options } from '../styles'

export default ({ author }) => (
  <footer style={{ padding: `${rhythm(1)} 0` }}>
    <p
      style={{
        margin: 0,
        textAlign: center,
        color: options.colors.muted
      }}>
      &copy; {new Date().getFullYear()} by{' '}
      <a href={author.url}>{author.name}</a>, Built with{' '}
      <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        Gatsby
      </a>
      . Visit the{' '}
      <a
        href="https://github.com/zce/zce.me"
        target="_blank"
        rel="noopener noreferrer">
        Source
      </a>
      .
    </p>
  </footer>
)
