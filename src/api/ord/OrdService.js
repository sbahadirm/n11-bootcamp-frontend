
import axios from "axios";

class OrdService{

    createOrder(order){

        const url = '/api/v1/orders';

        return axios.post(url, order);
    }

    getOrderList(){

        const username = sessionStorage.getItem('username');

        const url = 'api/v1/orders/users/' + username;

        return axios.get(url)

    }

}

export default new OrdService();