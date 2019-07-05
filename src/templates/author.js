import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data: { authorsYaml }, location }) => (
  <Layout location={location}>
    <h1>Author {authorsYaml.id}</h1>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    authorsYaml(slug: { eq: $slug }) {
      id
      slug
      email
      avatar
      cover
      bio
      website
      location
      social {
        weibo
        wechat
        qq
        zhihu
        github
        medium
        twitter
        facebook
      }
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
//       title={`${data.authorsYaml.id}'s Posts - Lei Wang – Full-Stack Software Developer`}
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
//     authorsYaml(slug: { eq: $slug }) {
//       id
//       slug
//       email
//       avatar
//       cover
//       bio
//       website
//       location
//       social {
//         weibo
//         wechat
//         qq
//         zhihu
//         github
//         medium
//         twitter
//         facebook
//       }
//       meta {
//         title
//         description
//       }
//     }
//     allMarkdownRemark(
//       filter: {
//         frontmatter: { authors: { elemMatch: { slug: { eq: $slug } } } }
//       }
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
