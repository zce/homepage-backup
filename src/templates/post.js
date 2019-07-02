import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Layout from '../components/layout'
import 'prismjs/themes/prism.css'

export default ({ data: { markdownRemark }, pageContext: { prev, next } }) => (
  <Layout>
    <Helmet title={markdownRemark.frontmatter.title} />
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
      <img
        src={markdownRemark.frontmatter.cover}
        alt={markdownRemark.frontmatter.title}
      />
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
      frontmatter {
        title
        date(fromNow: true)
        cover
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
