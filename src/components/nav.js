import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { ProductConsumer } from '../contextAPI';
class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand haref="#">React- Car shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">products</Link>
                        </Nav>
                        <Nav>
                            <Link eventKey={2} to="/cart">My Cart</Link>
                        </Nav>
                        {/* <Nav>
                            <ProductConsumer>
                                {(value) => {
                                    return <Link>my cart ({value.Cart.length})</Link>
                                }}
                            </ProductConsumer>
                        </Nav> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;