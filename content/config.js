// {slug} - the post slug, eg. my-post
// {year} - publication year, eg. 2019
// {month} - publication month, eg. 04
// {day} - publication day, eg. 29
// {author} - slug of first author, eg. cameron
// {category} - slug of first category, eg. tutorial
// {tag} - slug of first tag listed in the post, eg. news
module.exports = {
  posts: {
    type: 'post',
    // permalink: '/posts/{slug}/',
    permalink: '/posts/{slug}-{year}-{month}-{day}-{author}-{category}-{tag}/',
    template: 'post'
  },
  pages: {
    type: 'page',
    permalink: '/{slug}/',
    template: 'page'
  }
}
