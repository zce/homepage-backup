# zce.me

> zce.me site source code.

## Getting Started

<!-- TODO -->

## Todos

- [x] Content pages
- [ ] Mapping node types - give up
- [ ] Taxonomy pages
- [ ] Meta tags
- [ ] Global style
- [ ] SSR Support

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zce/zce.github.io)

## References

- https://www.gatsbyjs.org/
- https://www.gatsbyjs.org/tutorial/
- https://www.gatsbyjs.org/docs/
- https://github.com/fabe/gatsby-universal
- https://github.com/scttcper/gatsby-casper
- https://github.com/niklasmtj/gatsby-starter-julia
- https://github.com/dvzrd/gatsby-sfiction
- https://github.com/Vagr9K/gatsby-advanced-starter
- https://github.com/greglobinski/gatsby-starter-personal-blog
- https://github.com/prichey/prestonrichey.com
- https://github.com/taniarascia/taniarascia.com
- https://github.com/fathomlondon/fath.om
- https://github.com/GatsbyCentral/gatsby-awesome-pagination

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