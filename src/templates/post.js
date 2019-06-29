import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import 'prismjs/themes/prism.css'

export default ({ data, pageContext: { prev, next } }) => (
  <Layout>
    <Helmet title={data.markdownRemark.frontmatter.title} />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <img
      src={data.markdownRemark.frontmatter.cover}
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
        <Link to={prev.fields.permalink}>
          &larr; {prev.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.fields.permalink}>
          {next.frontmatter.title} &rarr;
        </Link>
      )}
    </div>
    <hr />
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
      }
      excerpt(pruneLength: 160)
      html
    }
  }
`
