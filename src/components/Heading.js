import React from 'react'

import './Heading.css'

export default ({ title, slogan }) => (
  <>
    <h1 className='title'>{title}</h1>
    <p className='slogan'>{slogan}</p>
  </>
)
