/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const slugify = require('slugify')
const config = require('./content/config')

const getPermalink = (node, permalink) => {
  if (node.frontmatter.permalink) {
    return node.frontmatter.permalink
  }

  // generate permalink if permalink not defined in frontmatter
  const {
    title,
    slug,
    date,
    authors: [author] = [],
    categories: [category] = [],
    tags: [tag] = []
  } = node.frontmatter

  const d = new Date(date)

  const context = {
    slug: slug || slugify(title, { lower: true }),
    year: d.getFullYear(),
    month: ('0' + (d.getMonth() + 1)).substr(-2),
    day: ('0' + d.getDate()).substr(-2),
    author: author,
    category: category,
    tag: tag
  }

  // replacement
  for (const key in context) {
    permalink = permalink.replace(`{${key}}`, context[key])
  }
  return permalink
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type !== `MarkdownRemark`) return

  // ignore markdown dirname or filename, use frontmatter instead
  // const permalink =
  //   createFilePath({ node, getNode, basePath: `posts`, trailingSlash: true })

  const file = getNode(node.parent)
  const content = config[path.join(file.relativeDirectory, '..')]
  if (!content) return

  createNodeField({ node, name: `type`, value: content.type })

  const template = node.frontmatter.template || content.template
  createNodeField({ node, name: `template`, value: template })

  const permalink = getPermalink(node, content.permalink)
  createNodeField({ node, name: `permalink`, value: permalink })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              type
              template
              permalink
            }
            frontmatter {
              title
              authors
              categories
              tags
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const { edges } = result.data.allMarkdownRemark

  // Create pages based on different content types
  Object.values(config).map(c => c.type).forEach(type => {
    const items = edges.filter(e => e.node.fields.type === type)
    items.forEach((item, index) => {
      const prev = index === items.length - 1 ? null : items[index + 1].node
      const next = index === 0 ? null : items[index - 1].node
      createPage({
        path: item.node.fields.permalink,
        component: require.resolve(`./src/templates/${item.node.fields.template}.js`),
        context: { id: item.node.id, prev, next }
      })
    })
  })

  // Create pages based on different taxonomies: authors, categories, tags
}
