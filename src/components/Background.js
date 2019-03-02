import React, { Component } from 'react'

class Background extends Component {
  constructor (props) {
    super(props)

    this.state = { loaded: false }

    this.handleLoad = this.handleLoad.bind(this)
  }

  render () {
    const classes = ['background']
    this.state.loaded && classes.push('loaded')
    return (
      <img className={classes.join(' ')} alt='zce.me background' src={this.props.url} onLoad={this.handleLoad} />
    )
  }

  handleLoad () {
    this.setState({ loaded: true })
  }
}

export default Background
