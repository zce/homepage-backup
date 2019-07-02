import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Meta from '../components/meta'

export default ({ data }) => (
  <Layout>
    <Meta title={`All posts`} permalink={`/blog/`} />
    <h1>{data.allMarkdownRemark.totalCount} Posts</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.fields.permalink}>
          <Link to={node.fields.permalink}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { type: { eq: "post" } } }) {
      totalCount
      edges {
        node {
          fields {
            permalink
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
