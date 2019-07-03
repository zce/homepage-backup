/**
 * Meta component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See:
 * - https://www.gatsbyjs.org/docs/use-static-query/
 * - https://www.gatsbyjs.org/docs/add-seo-component/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default props => {
  const {
    site: { siteMetadata: site }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          lang
          title
          slogan
          description
          cover
          author {
            name
            email
          }
        }
      }
    }
  `)

  const url = site.siteUrl + (props.permalink || '')
  const defaultTitle = `${site.title} | ${site.slogan}`
  const title = props.title ? `${props.title} - ${defaultTitle}` : defaultTitle
  const description = props.description || site.description
  const img = props.image || site.cover
  const image = img.startsWith('http') ? img : site.siteUrl + img

  return (
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
      {props.children}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
