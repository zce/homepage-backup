import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { Layout } from '../components'
import { rhythm, scale } from '../styles'

export default ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data
  const { prev, next } = pageContext
  const { frontmatter: meta } = post

  return (
    <Layout
      title={meta.title}
      description={meta.description || post.excerpt}
      location={location}>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <time style={{ ...scale(-1 / 5) }}>{meta.date}</time>
        <h1>{meta.title}</h1>
        {meta.cover && (
          <Image
            style={{ marginBottom: rhythm(1) }}
            fixed={meta.cover.childImageSharp.fixed}
          />
        )}
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
          {meta.tags && (
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                listStyle: `none`,
                padding: 0
              }}>
              {meta.tags.map(tag => (
                <li key={tag.id}>
                  <Link to={tag.fields.permalink}>{tag.id}</Link>,
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <footer>
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}>
          <li>
            {prev && (
              <Link to={prev.fields.permalink} rel="prev">
                ← {prev.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.permalink} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <Link to="/blog/">Back to all Posts</Link>
      </footer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        permalink
      }
      frontmatter {
        title
        date
        cover {
          childImageSharp {
            fixed(width: 1024) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        tags {
          id
          fields {
            permalink
          }
        }
        description
      }
      excerpt(pruneLength: 160)
      html
    }
  }
`
