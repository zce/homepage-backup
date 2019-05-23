import React, { Component } from 'react'

import Logo from './Logo'
import Heading from './Heading'
import Navigation from './Navigation'
import Background from './Background'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Hey! Guys',
      slogan: 'I\'m Lei Wang, a technical poet of China',
      links: [
        { text: 'Weibo', href: 'https://weibo.com/zceme', target: '_blank' },
        { text: 'WeChat', href: 'https://img.zce.me/wechat.jpg', target: '_blank' },
        { text: 'Blog', href: 'https://blog.zce.me', target: '_blank' },
        { text: 'GitHub', href: 'https://github.com/zce', target: '_blank' },
        { text: 'Email', href: 'mailto:w@zce.me', target: '_self' },
        { text: 'Discuss', href: 'https://github.com/zce/discuss/issues', target: '_blank' }
      ]
    }
  }

  render () {
    return (
      <>
        <Logo />
        <Heading title={this.state.title} slogan={this.state.slogan} />
        <Navigation links={this.state.links} />
        <Background url={this.state.background} />
      </>
    )
  }
}

export default App
