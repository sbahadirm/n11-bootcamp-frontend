import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './component/home/HomePage';
import ErrorPage from './component/gen/error/ErrorPage';
import Menu from './component/menu/Menu';
import BasketPage from './component/basket/BasketPage';
import CategoryPage from './component/category/CategoryPage';
import ProductListPage from './component/product/productlist/ProductListPage';
import AddProductPage from './component/product/addproduct/AddProductPage';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
     
     <Routes>
       <Route path="/" element={<HomePage></HomePage>}></Route>
       <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
       <Route path="/list" element={<ProductListPage categoryId={null}/>}></Route>
       <Route path="/basket" element={<BasketPage></BasketPage>}></Route>
       <Route path="/category/:id" element={<CategoryPage></CategoryPage>}></Route>
       <Route path="/product/add" element={<AddProductPage />}></Route>
     </Routes>
      
    </div>
  );
}

export default App;
