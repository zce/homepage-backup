/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((item, index) => {
    const prev = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: `/blog${item.node.fields.slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: item.node.fields.slug, prev, next }
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type !== `MarkdownRemark`) return
  const value = createFilePath({
    node,
    getNode,
    // basePath: `posts`,
    // trailingSlash: true
  })
  actions.createNodeField({ name: `slug`, node, value })
}
