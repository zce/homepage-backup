import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data, pageContext: { prev, next } }) => (
  <Layout>
    <Helmet title={data.markdownRemark.frontmatter.title} />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <img
      src={data.markdownRemark.frontmatter.feature_image}
      alt={data.markdownRemark.frontmatter.title}
    />
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <hr />
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`
      }}>
      {prev && (
        <Link to={`/blog/${prev.fields.slug}`}>
          &larr; {prev.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={`/blog/${next.fields.slug}`}>
          {next.frontmatter.title} &rarr;
        </Link>
      )}
    </div>
    <hr />
    <Link to="/blog/">Back to all Posts</Link>
  </Layout>
)

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        feature_image
      }
      excerpt(pruneLength: 160)
      html
    }
  }
`
