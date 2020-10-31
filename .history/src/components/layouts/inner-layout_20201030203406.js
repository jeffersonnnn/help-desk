import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./navbar/navbar"
import Footer from "./footer"
import Sidebar from "../sidebar"
import '../styles/index.scss'

const InnerLayout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="content">
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}

InnerLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InnerLayout
