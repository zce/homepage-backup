import React, { Component } from 'react'

import './Background.css'

// `https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random&blur`
// `https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}`

class Background extends Component {
  constructor (props) {
    super(props)

    this.state = {
      width: 0,
      height: 0,
      loading: true
    }

    this.handleLoad = this.handleLoad.bind(this)
  }

  componentWillMount () {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    this.img = new window.Image()
    this.img.src = `https://source.unsplash.com/random/${width}x${height}`
    this.img.onload = this.handleLoad
  }

  render () {
    const classes = ['background']
    this.state.loading && classes.push('loading')

    return (
      <div className={classes.join(' ')} style={{ backgroundImage: `url(${this.img.src})` }} />
    )
  }

  handleLoad () {
    this.setState({ loading: false })
  }
}

export default Background
