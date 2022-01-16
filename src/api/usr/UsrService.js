
import axios from "axios";

class UsrService{

    getAllVendors(){

        const url = '/api/v1/users/vendors';

        return axios.get(url);
    }

    

}

export default new UsrService();