// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-4 footer-left">© 2020 SystemSpecs Limited</div>
      <div className="col-md-4">
          <div className="footer-center_text">By using this website, you agree to our privacy statement</div>
      </div>
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


// import React from 'react';

// const Footer = () => (
//     <div className="site-footer">
//         <h4 className="text-center">
//             Code Blog
//         </h4>
//         <p className="text-align">Follow us on social Media</p>
//         <div className="footer-social-links">
//             <ul className="social-links-list">
//                 <li>
//                     <a href="https://www.facebook.com" className="facebook" rel="noopener noreferrer" target="_blank">
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.facebook.com" className="facebook" rel="noopener noreferrer" target="_blank">
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.facebook.com" className="facebook" rel="noopener noreferrer" target="_blank">
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.facebook.com" className="facebook" rel="noopener noreferrer" target="_blank">
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.facebook.com" className="facebook" rel="noopener noreferrer" target="_blank">
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// )

// export default Footer