import React from 'react'

export default ({ author }) => (
  <footer>
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
  </footer>
)
