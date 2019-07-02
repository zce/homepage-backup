import React from 'react'
import Layout from '../components/layout'

export default ({ pageContext: { slug } }) => (
  <Layout>
    <h1>Tag {slug}</h1>
  </Layout>
)

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
