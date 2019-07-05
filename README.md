# zce.me

> zce.me site source code.

## Getting Started

<!-- TODO -->

## Features

<!-- TODO -->

## Todos

- [x] Content pages
- [x] Mapping node types
- [x] Taxonomy pages
- [x] Meta tags
- [x] Gatsby image
- [x] Sitemap support
- [x] RSS Feed (not enabled)
- [ ] Global style
- [ ] Comments
- [ ] Sass?
- [ ] Theming
- [ ] Local path & Remote url
- [ ] Cover with absolute url
- [ ] SSR Support
- [ ] Create default nodes by programming
- [ ] Global state

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zce/zce.github.io)

## References

- https://github.com/prichey/prestonrichey.com
- https://github.com/taniarascia/taniarascia.com
- https://github.com/fathomlondon/fath.om
- https://github.com/jlengstorf/marisamorby.com
- https://github.com/fabe/gatsby-universal
- https://github.com/LekoArts/gatsby-starter-prismic
- https://github.com/LekoArts/gatsby-starter-portfolio-cara
- https://github.com/scttcper/gatsby-casper
- https://github.com/niklasmtj/gatsby-starter-julia
- https://github.com/dvzrd/gatsby-sfiction
- https://github.com/Vagr9K/gatsby-advanced-starter
- https://github.com/greglobinski/gatsby-starter-personal-blog

- https://www.gatsbyjs.org/
- https://www.gatsbyjs.org/tutorial/
- https://www.gatsbyjs.org/docs/
- https://www.gatsbyjs.org/docs/custom-html/
- https://www.gatsbyjs.org/docs/emotion/
- https://www.gatsbyjs.org/docs/styled-components/
- https://www.gatsbyjs.org/docs/css-libraries-and-frameworks/
- https://github.com/KyleAMathews/typography.js
- https://github.com/GatsbyCentral/gatsby-awesome-pagination
- https://github.com/graysonhicks/gatsby-plugin-remote-images

## Snippets

```js
// Create pages based on different taxonomies: authors, categories, tags
// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
const getList = prop => {
  const allList = edges
    .map(e => e.node.frontmatter[prop])
    .filter(c => c)
    .reduce((a, i) => a.concat(i), [])
  return [...new Set(allList)]
}

const authors = getList('authors')
console.log(authors)

const categories = getList('categories')
console.log(categories)

const tags = getList('tags')
console.log(tags)
```

```js
// Create pages based on different content types
Object.values(config).map(c => c.type).forEach(type => {
  const items = edges.filter(e => e.node.fields.type === type)
  items.forEach(({ node }, i) => {
    const prev = i === items.length - 1 ? null : items[i + 1].node
    const next = i === 0 ? null : items[i - 1].node
    const template = `./src/templates/${node.fields.template}.js`
    createPage({
      path: node.fields.permalink,
      component: require.resolve(template),
      context: { id: node.id, prev, next }
    })
  })
})
```
