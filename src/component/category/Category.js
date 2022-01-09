import {useParams} from 'react-router-dom';
import ProductList from '../product/productlist/ProductList';

const Category = () => {

    const params = useParams();

    return <ProductList categoryId={params.id}></ProductList>
}

export default Category;