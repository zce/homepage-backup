import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { Layout } from '../components'
import { rhythm, scale } from '../utils/typography'
import PrismStyles from '../styles/prism'

export default ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data
  const { prev, next } = pageContext

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      location={location}>
      <header style={{ textAlign: 'center' }}>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1)
          }}>
          {post.frontmatter.date}
        </p>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.cover && (
          <Image fixed={post.frontmatter.cover.childImageSharp.fixed} />
        )}
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
          {post.frontmatter.tags && (
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                listStyle: `none`,
                padding: 0
              }}>
              {post.frontmatter.tags.map(tag => (
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
      <PrismStyles/>
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
            fixed(width: 750) {
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
