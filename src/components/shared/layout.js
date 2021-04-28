import React, { Fragment } from 'react'

import Header from './header'
import Footer from './footer'

const Layout = props => (
  <Fragment>

    {props.children}

  </Fragment>
)

export default Layout