import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import Chrome from '../components/Chrome'
import Header from "../components/navbar/navbar"
import Footer from "../"
import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <Chrome>
    {/* <Helmet
      title="Welcome to the docs!"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    /> */}
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