import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <Helmet title={`Posts - Lei Wang – Full-Stack Software Developer`} />
    <h1>{data.allMarkdownRemark.totalCount} Posts</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.permalink}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (filter: {fields: {type: {eq: "post"}}}) {
      totalCount
      edges {
        node {
          id
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
