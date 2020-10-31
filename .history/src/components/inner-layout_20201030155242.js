import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import Chrome from '../components/Chrome'
import Header from "../components/navbar/navbar"
import Footer from "../components/footer"
import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <Chrome>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </Chrome>
)
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
export default TemplateWrapper