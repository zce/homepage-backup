import React, { Component } from 'react'

import openColors from '../assets/open-colors'

class Logo extends Component {
  constructor (props) {
    super(props)

    const interval = 2222
    const now = Date.now() / interval

    this.state = {
      type: ~~(now / 10 % 13),
      level: ~~(now % 10)
    }

    this.handleChange = this.handleChange.bind(this)
  }

  render () {
    const { type, level } = this.state

    console.log('%cOC- %c  %c %c  ',
      'color: ' + openColors[0][7],
      'border-radius: 3px; background: ' + openColors[type][7],
      '',
      'border-radius: 3px; background: ' + openColors[0][level]
    )

    return (
      <svg className='logo' viewBox='0 0 472 450' onClick={this.handleChange}>
        <defs>
          <filter id='shadow' x='-12.7%' y='-13.4%' width='125.4%' height='126.7%' filterUnits='objectBoundingBox'>
            <feOffset dx='0' dy='0' in='SourceAlpha' result='offset-outer' />
            <feGaussianBlur stdDeviation='20' in='offset-outer' result='blue-outer' />
            <feComposite in='blue-outer' in2='SourceAlpha' operator='out' result='blue-outer' />
            <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0' type='matrix' in='blue-outer' />
          </filter>
        </defs>
        <mask id='mask' fill='white'>
          <polygon points='472 114.26 203.028853 335.74 407.1 335.74 472 449.48 64.9 449.48 0 335.74 268.971147 114.26 64.9 114.26 0 0.52 407.1 0.52' />
        </mask>
        <g mask='url(#mask)' fill={openColors[type][level]}>
          <rect x='0' y='0' width='472' height='449' />
        </g>
        <g mask='url(#mask)'>
          <polygon points='0 335.74 64.9 449.48 472 114.26 407.1 0.52' filter='url(#shadow)' />
        </g>
      </svg>
    )
  }

  handleChange () {
    this.setState({
      type: ~~(Math.random() * 13),
      level: ~~(Math.random() * 10)
    })
  }
}

export default Logo
