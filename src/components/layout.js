/**
 * Layout component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See:
 * - https://www.gatsbyjs.org/docs/use-static-query/
 * - https://www.gatsbyjs.org/docs/add-seo-component/
 * - https://www.gatsbyjs.org/docs/layout-components/#how-to-prevent-layout-components-from-unmounting
 */

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { useMetadata } from '../utils/hooks'
import { colors, options, rhythm, scale } from '../styles'

const wrapperStyle = {
  margin: '0 auto',
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  maxWidth: rhythm(30)
}

export default ({ title, description, image, location, children }) => {
  const site = useMetadata()

  const url = location.origin + location.pathname

  const suffix = `${site.title} | ${site.slogan}`
  title = title ? `${title} - ${suffix}` : suffix

  description = description || site.description

  const img = image || site.cover
  image = img.startsWith('http') ? img : location.origin + img

  return (
    <div style={wrapperStyle}>
      <Helmet>
        <html lang={site.lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={site.author.name} />
        <meta name="email" content={site.author.email} />
        {/* OpenGraph tags */}
        <meta property="og:site_name" content={site.title} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* TODO: website or article? http://ogp.me/#no_vertical */}
        <meta property="og:type" content={`website`} />
        {/* TODO: Twitter & Fackbook Card tags? */}
        <link rel="canonical" href={url} />
      </Helmet>

      <header style={{ marginBottom: rhythm(1) }}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Link
            style={{
              ...scale(0.75),
              fontWeight: options.headerWeight
            }}
            to="/">
            {site.title}
          </Link>
          <ul style={{ marginBottom: 0, listStyle: 'none' }}>
            {site.menus.map(i => (
              <li
                style={{
                  margin: `0 0 0 ${rhythm(0.8)}`,
                  display: `inline-block`
                }}
                key={i.link}>
                <Link to={i.link}>{i.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer style={{ padding: `${rhythm(1)} 0` }}>
        <p
          style={{
            margin: 0,
            textAlign: 'center',
            color: colors.muted
          }}>
          &copy; {new Date().getFullYear()} by{' '}
          <a href={site.author.url}>{site.author.name}</a>, Built with{' '}
          <a
            href="https://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer">
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
    </div>
  )
}
