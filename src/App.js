import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './component/home/HomePage';
import ErrorPage from './component/error/ErrorPage';
import Menu from './component/menu/Menu';
import BasketPage from './component/basket/BasketPage';
import Category from './component/category/Category';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
     
     <Routes>
       <Route path="/" element={<HomePage></HomePage>}></Route>
       <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
       <Route path="/basket" element={<BasketPage></BasketPage>}></Route>
       <Route path="/category/:id" element={<Category></Category>}></Route>
     </Routes>
      
    </div>
  );
}

export default App;
