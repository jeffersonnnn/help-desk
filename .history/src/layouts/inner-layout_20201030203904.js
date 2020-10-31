import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/navbar/navbar"
import Footer from "../components/footer"
import Sidebar from "../components/sidebar"
import '../styles/index.scss'
import ""

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
            <Sidebar />
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
