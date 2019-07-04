import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { rhythm, scale, options } from '../utils/typography'

const Header = styled.header`
  margin-bottom: ${rhythm(1)};
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled(Link)`
  ${scale(0.75)}
  font-weight: ${options.headerWeight};

  &:hover {
    text-decoration: none;
  }
`

const List = styled.ul`
  margin-bottom: 0;
  list-style: none;
`

const Item = styled.li`
  margin: 0 0 0 ${rhythm(0.8)};
  display: inline-block;
`

export default ({ title, menus }) => (
  <Header>
    <Navigation>
      <Brand to="/">{title}</Brand>
      <List>
        {menus.map(i => (
          <Item key={i.link}>
            <Link to={i.link}>{i.text}</Link>
          </Item>
        ))}
      </List>
    </Navigation>
  </Header>
)
