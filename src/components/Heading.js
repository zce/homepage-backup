import React, { Component } from 'react'

class Heading extends Component {
  render () {
    return (
      <>
        <h1 className='title'>{this.props.title}</h1>
        <p className='slogan'>{this.props.slogan}</p>
      </>
    )
  }
}

export default Heading
