import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data: { tagsYaml }, location }) => (
  <Layout location={location}>
    <h1>Tag {tagsYaml.id}</h1>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    tagsYaml(slug: { eq: $slug }) {
      id
      slug
      description
      meta {
        title
        description
      }
      fields {
        permalink
      }
    }
  }
`

// import React from 'react'
// import { Helmet } from 'react-helmet'
// import { graphql, Link } from 'gatsby'
// import Layout from '../components/layout'

// export default ({ data }) => (
//   <Layout>
//     <Helmet
//       title={`${data.tagsYaml.id}'s Posts - Lei Wang – Full-Stack Software Developer`}
//     />
//     <h1>{data.allMarkdownRemark.totalCount} Posts</h1>
//     <ul>
//       {data.allMarkdownRemark.edges.map(({ node }) => (
//         <li key={node.id}>
//           <Link to={node.fields.permalink}>{node.frontmatter.title}</Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// export const query = graphql`
//   query($slug: String!) {
//     tagsYaml(slug: { eq: $slug }) {
//       id
//       slug
//       description
//       meta {
//         title
//         description
//       }
//     }
//     allMarkdownRemark(
//       filter: { frontmatter: { tags: { elemMatch: { slug: { eq: $slug } } } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             permalink
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `
