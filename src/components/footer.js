import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../styles/typography'

const Footer = styled.footer`
  padding: ${rhythm(1)} 0;

  p {
    margin: 0;
    text-align: center;
  }
`

export default ({ author }) => (
  <Footer>
    <p>
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
  </Footer>
)
