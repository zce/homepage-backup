/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const url = 'http://localhost:8000' // no trailing slash!

exports.siteMetadata = {
  url: url,
  title: 'Lei’s Personal Website',
  slogan: 'MAKE IT BETTER!',
  description: 'Thoughts, stories and ideas.',
  keywords: 'zce, blog, personal, homepage',
  logo: 'https://img.zce.me/logo.svg',
  cover: 'https://img.zce.me/cover/00.jpg',
  author: 'Lei Wang',
  language: 'en',
  menus: [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog/' },
    { text: 'About', link: '/about/' },
    { text: 'Contact', link: '/contact/' }
  ],
  siteUrl: url, // for gatsby-plugin-sitemap
}

exports.plugins = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: 'content'
    }
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-images',
        'gatsby-remark-responsive-iframe',
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-autolink-headers',
        'gatsby-remark-smartypants',
        'gatsby-remark-prismjs'
      ]
    }
  },
  'gatsby-transformer-yaml',
  'gatsby-transformer-sharp',
  // 'gatsby-plugin-sharp', useless?
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'src/styles'
    }
  },
  {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      // sync with ./src/styles/theme.js:9:12
      color: '#ff6b6b'
    }
  },
  // 'gatsby-plugin-feed',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-offline'
]

// https://www.gatsbyjs.org/docs/path-prefix/
// exports.pathPrefix = ''

// https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
exports.mapping = {
  'MarkdownRemark.frontmatter.authors': 'AuthorsYaml',
  'MarkdownRemark.frontmatter.categories': 'CategoriesYaml',
  'MarkdownRemark.frontmatter.tags': 'TagsYaml'
}
