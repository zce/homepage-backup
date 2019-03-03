import React, { Component } from 'react'

import Logo from './components/Logo'
import Heading from './components/Heading'
import Navigation from './components/Navigation'
import Background from './components/Background'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Hey! Bitch',
      slogan: 'I\'m Lei Wang, a poet of China',
      links: [
        { text: 'Weibo', href: 'https://weibo.com/zceme', target: '_blank' },
        { text: 'WeChat', href: 'https://img.zce.me/wechat.jpg', target: '_blank' },
        { text: 'Blog', href: 'https://blog.zce.me', target: '_blank' },
        { text: 'GitHub', href: 'https://github.com/zce', target: '_blank' },
        { text: 'Email', href: 'mailto:w@zce.me', target: '_self' }
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
