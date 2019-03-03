import React, { Component } from 'react'

import './Navigation.css'

class Navigation extends Component {
  render () {
    return (
      <ul className='navigation'>
        {this.props.links.map(item => <li key={item.href}><a href={item.href} target={item.target}>{item.text}</a></li>)}
      </ul>
    )
  }
}

export default Navigation
