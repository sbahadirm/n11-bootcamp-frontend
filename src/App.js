import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './component/home/HomePage';
import ErrorPage from './component/gen/error/ErrorPage';
import Menu from './component/menu/Menu';
import BasketPage from './component/basket/BasketPage';
import CategoryPage from './component/category/CategoryPage';
import ProductListPage from './component/product/productlist/ProductListPage';
import AddProductPage from './component/product/addproduct/AddProductPage';
import LoginPage from './component/login/LoginPage';
import React from 'react';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLoggedOn: false
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(){
    this.setState({isLoggedOn:true})
  }

  logout(){

    console.log("logout on app.js");

    this.setState({isLoggedOn:false})
    localStorage.clear();
  }

  render() {
    return (
      <div className="App">
        <Menu isLoggedOn={this.state.isLoggedOn} logout={this.logout}></Menu>

        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          <Route path="/list" element={<ProductListPage categoryId={null} />}></Route>
          <Route path="/basket" element={<BasketPage></BasketPage>}></Route>
          <Route path="/category/:id" element={<CategoryPage></CategoryPage>}></Route>
          <Route path="/product/add" element={<AddProductPage />}></Route>
          <Route path="/login" element={<LoginPage login={this.login}/>}></Route>
        </Routes>

      </div>
    );
  }

}

export default App;
