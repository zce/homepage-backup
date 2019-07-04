/**
 * https://www.gatsbyjs.org/docs/layout-components/#how-to-prevent-layout-components-from-unmounting
 */
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  max-width: ${rhythm(30)};
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Menu = styled.ul`
  list-style: none;
  margin-bottom: 0;
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          author {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <header style={{ marginBottom: `1.5rem` }}>
        <Navigation>
          <h3>
            <Link to="/">{siteMetadata.title}</Link>
          </h3>
          <Menu>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </Menu>
        </Navigation>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} by <a href={siteMetadata.author.url}>{siteMetadata.author.name}</a>,
          Built with <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>.
          Visit the <a href="https://github.com/zce/zce.me" target="_blank" rel="noopener noreferrer">Source</a>.
        </p>
      </footer>
    </Wrapper>
  )
}
