import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components'
import { scale } from '../utils/typography'

const Text = styled.p`
  ${scale(0.5)};
  color: hotpink;
`

export default ({ location }) => (
  <Layout location={location}>
    <Text>hello world</Text>
  </Layout>
)
