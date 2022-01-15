import React from "react";
import FavService from "../../api/fav/FavService";
import ImageIcon from "./ImageIcon";

class Fav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            favProductList: []
        }
    }

    componentDidMount() {

        FavService.getProductList(this.props.favListId)
            .then(respose => this.handleResponse(respose))
            .catch(error => this.handleError(error))
    }

    handleResponse(response) {
        this.setState({ favProductList: response.data })
    }

    handleError(error) {
        console.log(error);
    }

    // private Long id;
    // private Long favoriteListId;
    // private String favoriteListName;
    // private Long productId;
    // private String productName;
    // private String productImageUrl;
    // private BigDecimal productPrice;

    render() {
        return (
            <>

                <div class="container">
                    <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">

                        {this.state.favProductList.map(product => <ImageIcon imageUrl={product.productImageUrl}></ImageIcon>)}
                       
                        {/* <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div> */}
                       


                        <div class="col">
                            <div class="p-3 border bg-light">Ekle</div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Fav;