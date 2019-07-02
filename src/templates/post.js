import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm, scale } from '../utils/typography'
import Layout from '../components/layout'
import Meta from '../components/meta'
import 'prismjs/themes/prism.css'

export default ({ data: { markdownRemark }, pageContext: { prev, next } }) => (
  <Layout>
    <Meta
      title={markdownRemark.frontmatter.title}
      permalink={markdownRemark.fields.permalink}
    />
    <h1>{markdownRemark.frontmatter.title}</h1>
    <p
      style={{
        ...scale(-1 / 5),
        display: `block`,
        marginBottom: rhythm(1)
      }}>
      {markdownRemark.frontmatter.date}
    </p>
    {markdownRemark.frontmatter.cover && (
      <Image fixed={markdownRemark.frontmatter.cover.childImageSharp.fixed} />
    )}
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    <div>
      {markdownRemark.frontmatter.tags && (
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            listStyle: `none`,
            padding: 0
          }}>
          {markdownRemark.frontmatter.tags.map(tag => (
            <li key={tag.id}>
              <Link to={tag.fields.permalink}>{tag.id}</Link>,
            </li>
          ))}
        </ul>
      )}
    </div>
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
  </Layout>
)

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        permalink
      }
      frontmatter {
        title
        date(fromNow: true)
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
      }
      excerpt(pruneLength: 160)
      html
    }
  }
`
