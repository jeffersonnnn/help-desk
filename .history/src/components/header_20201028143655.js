// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import BrandLogo from '../components/images/brandlogo'


const Header = () => (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </nav>    
  
{/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
    <BrandLogo />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



// // import BrandLogo from '../components/images/brandlogo'
// import PropTypes from "prop-types"
// import React from 'react';
// // import {
// //   Collapse,
// //   Navbar,
// //   NavbarToggler,
// //   NavbarBrand,
// //   Nav,
// //   UncontrolledDropdown,
// //   DropdownToggle,
// //   DropdownMenu,
// //   DropdownItem,
// //   Button
// // } from 'reactstrap';

// class Header extends React.Component {

//   constructor(props) {
//     super (props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   render() {
//     return (
//       <div>
//       <Navbar fixed="top" light expand="sm">
//         {/* <div className="container"> */}
//         {/* <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand> */}
//         <NavbarBrand href="/">
//           <BrandLogo />
//         </NavbarBrand>
//         <NavbarToggler onClick={this.toggle} />
//         <Collapse isOpen={this.state.isOpen} navbar>
//           <Nav className="ml-auto" navbar>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Documentation
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>  
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Support 
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>             
//           </Nav>
//         </Collapse>
//           <Button className="button-regular btn-outline-light" color="secondary"><i className="icon-login"></i>Login</Button>{' '}
//           <Button className="button-regular btn-outline-light" color="secondary"><i className="icon-signup"></i>Sign Up</Button>{' '}
//         {/* </div> */}
//       </Navbar>
//     </div>
//     )
//   }
// }

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header



