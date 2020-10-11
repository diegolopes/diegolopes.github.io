/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CustomNavbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './darkmode.css';
import "./layout.css"
import Darkmode from 'darkmode-js';
import {Footer} from './footer';

const options = {
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Diego Lopes | Desenvolvedor</title>
        <link rel="shortcut icon" href="../images/favicon.ico" />
      </Helmet>

      <CustomNavbar />
      <div className="container-fluid">
        <main>{children}</main>
      </div>
      <Footer/>
    </>

  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
