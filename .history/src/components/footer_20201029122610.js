// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-4">© 2020 SystemSpecs Limited</div>
      <div className="col-md-4 ">
          <div">By using this website, you agree to our privacy statemen
      <div className="col-md-4">
          <div className="row">
              <div className="col-md-3 footer-right">Remita Home</div>
              <div className="col-md-3 footer-right">Github</div>
              <div className="col-md-3 footer-right">FaceBook</div>
              <div className="col-md-3 footer-right">Twitter</div>
          </div>
      </div>
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