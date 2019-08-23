import React from 'react'

import './Navigation.css'

export default ({ links }) => (
  <ul className='navigation'>
    {links.map(item => (
      <li key={item.href}>
        <a href={item.href} target={item.target}>{item.text}</a>
      </li>
    ))}
  </ul>
)
