import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';
import CategoryMenus from "./CategoryMenus";


class Menu extends React.Component {

    render() {
        return <div className="col-md-6 offset-md-3 ">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">N11</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/list">Tüm Ürünler</Nav.Link>

                            <CategoryMenus></CategoryMenus>

                            <NavDropdown title="Hesabım" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/basket">Sepete Git</NavDropdown.Item>
                                <NavDropdown.Item href="/orders">Önceki Siparişler</NavDropdown.Item>
                                <NavDropdown.Item href="/profile/:username">Kullanıcı Bilgileri</NavDropdown.Item>
                                <NavDropdown.Item href="/favorylist">Favori Listeleri</NavDropdown.Item>
                                <NavDropdown.Item href="/product/add">Ürün Ekle</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Çıkış</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    }
}

export default Menu;