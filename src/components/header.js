import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale, options } from '../styles'

export default ({ title, menus }) => (
  <header style={{ marginBottom: rhythm(1) }}>
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <Link
        style={{
          ...scale(0.75),
          fontWeight: options.headerWeight
        }}
        to="/">
        {title}
      </Link>
      <ul style={{ marginBottom: 0, listStyle: 'none' }}>
        {menus.map(i => (
          <li
            style={{ margin: `0 0 0 ${rhythm(0.8)}`, display: `inline-block` }}
            key={i.link}>
            <Link to={i.link}>{i.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
