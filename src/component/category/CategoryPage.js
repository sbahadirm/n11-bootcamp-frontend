import {useParams} from 'react-router-dom';
import ProductListPage from '../product/productlist/ProductListPage';

const CategoryPage = () => {

    const params = useParams();

    return <ProductListPage categoryId={params.id}></ProductListPage>
}

export default CategoryPage;