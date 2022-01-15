import axios from "axios";

class FavService{

    getFavListList(){

        const username = localStorage.getItem('username');

        const url = '/api/v1/favs/users/username/' + username;

        return axios.get(url);
    }

    getProductList(favListId){
        const url = '/api/v1/favs/' + favListId + '/products';

        return axios.get(url);
    }

    addProductToList(favListId, productId){

        const url = '/api/v1/favs/' + favListId + '/products';

        const data = {
            usrFavoriteListId: favListId,
            prdProductId : productId
        }

        return axios.post(url, data);
    }

    removeProductFromList(favListProdcutId){

        const url = '/api/v1/favs//products/' + favListProdcutId;

        return axios.delete(url);
    }
}

export default new FavService();