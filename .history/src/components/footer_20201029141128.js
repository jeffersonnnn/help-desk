import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-4 footer-left">© 2020 SystemSpecs Limited</div>
      <div className="col-md-4 ">
          <div className="footer-center_text">By using this website, you agree to our privacy statement</div>
      </div>
      <div className="col-md-4 pr-6">
          <div className="row">
              <div className="col-md-3 footer-right">Remita</div>
              <div className="col-md-3 footer-right">Github</div>
              <div className="col-md-3 footer-right">Facebook</div>
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