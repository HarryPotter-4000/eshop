// import React from "react";
// // import {
// //   Link,
// //   NavLink,
// // } from 'react-router-dom';
// import logo from "../assets/image/logo.png";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function Header() {
//   return (
//     <Navbar bg="dark" variant="dark" className="p-0" style={{ fontSize: '1.75rem' }}>
//       <Container className="d-flex flex-row justi p-2">
//         <Navbar.Brand href='/eshop/'>
//             <img
//               src={logo}
//               width="40%"
//               className="d-inline-block"
//               alt="logo"
//             />
//           </Navbar.Brand>
//           <Nav className="me-auto" >
//             <Nav.Link href='/eshop/' style={{ paddingRight: '16px' }}>Home</Nav.Link>
//             <Nav.Link href='/productpage/' style={{ paddingRight: '16px' }}>Product</Nav.Link>
//             <Nav.Link href='/shoppingcart/' style={{ paddingRight: '16px' }}>ShoppingCart</Nav.Link>
//           </Nav>
//       </Container>
//     </Navbar>
//   )
// }

// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../assets/image/logo.png";

function OffcanvasExample() {
  return (
    <>
    <style type="text/css">
        {`
          .btn-close {
            background-color: #0d6efd;
            padding: 1rem 1.5rem;
            font-size: 24px;
          }
          .nav-link {
            color: blue;
            font-size: 20px;
          }
          .active {
            color: #d63384;
          }
        `}
      </style>
      {['lg'].map((expand) => (
        <Navbar  bg="dark" key={expand} variant="dark" expand={expand} className="mb-3">
          <Container fluid="md" >
            <Navbar.Brand href="/eshop/">
            <img
              src={logo}
              width="30%"
              className="d-inline-block"
              alt="logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-dark text-bg-dark"
              
            >
              <Offcanvas.Header closeButton className="mt-3">
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav defaultActiveKey={1} variant="primary" className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link activeKey={1} href='/eshop/' style={{ paddingRight: '16px'}}>Home</Nav.Link>
                <Nav.Link activeKey={2} href='/productpage/' style={{ paddingRight: '16px' }}>Product</Nav.Link>
                <Nav.Link activeKey={3} href='/shoppingcart/' style={{ paddingRight: '16px' }}>ShoppingCart</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;