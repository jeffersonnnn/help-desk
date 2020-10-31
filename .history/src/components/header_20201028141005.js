// import BrandLogo from '../components/images/brandlogo'
import PropTypes from "prop-types"
import React from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Button
// } from 'reactstrap';

class Header extends React.Component {

  constructor(props) {
    super (props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar fixed="top" light expand="sm">
        {/* <div className="container"> */}
        {/* <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand> */}
        <NavbarBrand href="/">
          <BrandLogo />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Documentation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>  
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Support 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>             
          </Nav>
        </Collapse>
          <Button className="button-regular btn-outline-light" color="secondary"><i className="icon-login"></i>Login</Button>{' '}
          <Button className="button-regular btn-outline-light" color="secondary"><i className="icon-signup"></i>Sign Up</Button>{' '}
        {/* </div> */}
      </Navbar>
    </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-4 footer-left">© 2020 SystemSpecs Limited</div>
      <div className="col-md-4 footer-center">
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

