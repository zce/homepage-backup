import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Helmet title={`Lei Wang – Full-Stack Software Developer`} />
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </Layout>
)
