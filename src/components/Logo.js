import React, { useState } from 'react'

import colors from '../assets/colors'

import './Logo.css'

const interval = 60 * 1000

export default () => {
  const [type, setType] = useState(~~(Date.now() / interval) % 13)
  const [level, setLevel] = useState(~~(Date.now() / (interval / 10)) % 10)

  const handleChange = () => {
    setType(~~(Math.random() * 13))
    setLevel(~~(Math.random() * 10))
  }

  console.log(`%cOC- %c ${type} %c %c ${level} %c → %c  `,
    `color: ${colors[0][7]}`,
    `border-radius: 4px; background: ${colors[type][7]}`,
    '',
    `border-radius: 4px; background: ${colors[0][level]}`,
    '',
    `border-radius: 4px; background: ${colors[type][level]}`
  )

  return (
    <svg className='logo' viewBox='0 0 472 450' onClick={handleChange}>
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
      <g mask='url(#mask)' fill={colors[type][level]}>
        <rect x='0' y='0' width='472' height='449' />
      </g>
      <g mask='url(#mask)'>
        <polygon points='0 335.74 64.9 449.48 472 114.26 407.1 0.52' filter='url(#shadow)' />
      </g>
    </svg>
  )
}
