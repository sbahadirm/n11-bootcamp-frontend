
import axios from "axios";

class OrdService{

    createOrder(order){

        const url = '/api/v1/orders';

        return axios.post(url, order);
    }

    

}

export default new OrdService();