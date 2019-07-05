import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import moment from 'moment'

import Layout from '../components/layout'
import { options, rhythm } from '../styles'

export default ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data
  const { prev, next } = pageContext
  const { frontmatter: meta } = post

  return (
    <Layout
      title={meta.title}
      description={meta.description || post.excerpt}
      location={location}>
      <header style={{ textAlign: 'center' }}>
        <time
          style={{ textTransform: 'uppercase' }}
          dateTime={meta.date}
          pubdate>
          {moment.utc(meta.date).format('MMMM Do, YYYY')}
        </time>
        <h1 style={{ marginTop: rhythm(0.5), fontWeight: options.boldWeight }}>
          {meta.title}
        </h1>
      </header>
      {meta.cover && (
        <Image
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: rhythm(1)
          }}
          fixed={meta.cover.childImageSharp.fixed}
          Tag="figure"
        />
      )}
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
