/**
 * https://www.gatsbyjs.org/docs/layout-components/#how-to-prevent-layout-components-from-unmounting
 */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Meta from './meta'
import Header from './header'
import Footer from './footer'
import { rhythm } from '../styles'

export default ({
  title,
  description,
  image,
  customMeta,
  location,
  children
}) => {
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
            url
          }
          menus {
            text
            link
          }
        }
      }
    }
  `)

  return (
    <>
      {customMeta || (
        <Meta
          title={title}
          description={description}
          image={image}
          location={location}
        />
      )}
      <div
        style={{
          margin: '0 auto',
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          maxWidth: rhythm(30)
        }}>
        <Header title={siteMetadata.title} menus={siteMetadata.menus} />
        <main>{children}</main>
        <Footer author={siteMetadata.author} />
      </div>
    </>
  )
}
