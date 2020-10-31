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
    <div>
      {children()}
    </div>
  </Chrome>
)
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
export default TemplateWrapper