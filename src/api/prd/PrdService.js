
import axios from "axios";

class PrdService{

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

}

export default new PrdService();