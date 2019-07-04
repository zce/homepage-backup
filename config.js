/**
 * Site config
 *
 * metadata
 *
 * collections permalink tags:
 * - {slug} - the post slug, eg. my-post
 * - {year} - publication year, eg. 2019
 * - {month} - publication month, eg. 04
 * - {day} - publication day, eg. 29
 * - {author} - slug of first author, eg. cameron
 * - {category} - slug of first category, eg. tutorial
 * - {tag} - slug of first tag listed in the post, eg. news
 *
 * taxonomies permalink tags:
 * -  {slug} - the taxonomy slug, eg. tom-jerry
 */

exports.metadata = {
  url: 'http://localhost:8000', // no trailing slash!
  lang: 'en',
  title: 'Lei’s Personal Website',
  slogan: 'MAKE IT BETTER!',
  description: 'Thoughts, stories and ideas.',
  logo: 'https://img.zce.me/logo.svg',
  cover: 'https://img.zce.me/cover/00.jpg',
  author: {
    name: 'Lei Wang',
    email: 'w@zce.me',
    url: 'https://zce.me'
  },
  menus: [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog/' },
    { text: 'About', link: '/about/' },
    { text: 'Contact', link: '/contact/' }
  ]
}

exports.collections = {
  posts: {
    type: 'post',
    // permalink: '/posts/{slug}/',
    permalink: '/{year}/{month}/{slug}/',
    template: 'post'
  },
  pages: {
    type: 'page',
    permalink: '/{slug}/',
    template: 'page'
  }
}

exports.taxonomies = {
  authors: {
    type: 'author',
    permalink: '/authors/{slug}/',
    template: 'author'
  },
  categories: {
    type: 'category',
    permalink: '/categories/{slug}/',
    template: 'category'
  },
  tags: {
    type: 'tag',
    permalink: '/tags/{slug}/',
    template: 'tag'
  }
}

