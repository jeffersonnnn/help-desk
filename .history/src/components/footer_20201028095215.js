// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-4">SystemSpecs Limited</div>
      <div className="col-md-4">SystemSpecs Limited</div>
      <div className="col-md-4">SystemSpecs Limited</div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
