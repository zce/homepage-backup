import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import layoutStyles from './layout.module.css'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={layoutStyles.container}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <footer style={{ textAlign: `center` }}>
        <p>
          &copy; {new Date().getFullYear()}, Built with{' '}
          <a href="https://gatsbyjs.org">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}
