import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';
import CategoryMenus from "./CategoryMenus";


class Menu extends React.Component {

    render() {
        return <div className="col-md-6 offset-md-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">N11</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

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

                    </ul>

                </div>
            </nav>
        </div>


    }
}

export default Menu;