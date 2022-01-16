import axios from "axios";

class BasService{

      getProductList(){

        const username = localStorage.getItem('username');

        const url = '/api/v1/basket/users/' + username + '/products/';

        return axios.get(url);
    }

    
}

export default new BasService();