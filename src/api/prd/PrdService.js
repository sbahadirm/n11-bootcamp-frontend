
import axios from "axios";

class PrdService{

    getAllCategories(){

        const url = '/api/v1/categories';

        return axios.get(url);
    }

    getMenuItems(){

        const url = 'api/v1/categories/menu';

        return axios.get(url);
    }

    getProductList(categoryId){

        var url = categoryId === null ? "http://localhost:8080/api/v1/products/" : 
        "http://localhost:8080/api/v1/products/categories/" + categoryId;

       
        return axios.get(url);
    }

    getCategory(categoryId){

        var url = "http://localhost:8080/api/v1/categories/" + categoryId;

        return axios.get(url);
    }

    saveProduct(newProduct){
        var url = "api/v1/products";

        return axios.post(url, newProduct);
    }

}

export default new PrdService();