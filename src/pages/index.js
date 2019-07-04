import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components'
import { scale } from '../utils/typography'

const Text = styled.p`
  ${scale(1)}
  color: red;
`

export default () => (
  <Layout>
    <Text>hello world</Text>
  </Layout>
)
