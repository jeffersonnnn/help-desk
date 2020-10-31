import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
// import BrandLogo from '../components/images/brandlogo'


const Header = () => (
//   const data = useStaticQuery(graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "remitalogo.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)
const data = useStaticQuery(graphql`
{
  file(
    sourceInstanceName: { eq: "images" }
    relativePath: { eq: "avatar.jpg" }
  ) {
    childImageSharp {
      fixed(width: 30, height: 30) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`)

return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
    {/* <BrandLogo /> */}
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
</Navbar>
)

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



