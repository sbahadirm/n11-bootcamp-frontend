import React from "react";
import BasService from "../../../api/bas/BasService";
import PrdService from "../../../api/prd/PrdService";
import FavListModal from "../../fav/FavListModal";
import PageTitle from "../../gen/PageTitle";
import './ProductList.css'

class ProductListPage extends React.Component {

    state = {
        productList: [],
        category: {}
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.getProductList();
        this.getCategory();
    }

    getProductList() {

        PrdService.getProductList(this.props.categoryId)
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
            ;
    }

    handleResponse(response) {
        this.setState({ productList: response.data })
    }

    handleError(error) {
        console.log(error)
    }

    getCategory() {

        if (!this.props.categoryId) {
            return;
        }

        PrdService.getCategory(this.props.categoryId)
        .then(response => this.handleCategoryResponse(response))
        .catch(error => this.handleCategoryError(error))
        ;
  
    }

    handleCategoryResponse(response) {
        this.setState({ category: response.data })
    }

    handleCategoryError(error) {
        console.log(error)
    }

    truncateOverview(text, maxLength) {
        if (!text) {
            return null;
        }

        if (text.length <= maxLength) {
            return text;
        }

        const newText = text.substring(0, maxLength) + "...";

        return newText;
    }

    calculatePrice(price, discount) {
        if (!price) {
            return null;
        }

        const newPrice = price - (price * discount / 100);

        return Number.parseFloat(newPrice).toFixed(2);
    }

    addProductToBasket(product){

        BasService.addProductToBasket(product)
            .then(response => this.handleAddProductResponse(response))
            .then(error => this.handleError(error))
    }

    handleAddProductResponse(response){
        //
    }

    render() {

        var pageTitle = this.props.categoryId === null ? "Tüm Ürünler" : this.state.category.name;


        return (
            <div className="row col-md-6 offset-md-3">

                <PageTitle title={pageTitle}></PageTitle>

                {this.state.productList.map((product, i) => (

                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4 shadow-sm">
                            <img src={product.imageUrl} className="card-img-top image-s" alt="Sample Product" />
                            <div className="card-body text-center">
                                <h5 className="card-title ">{this.truncateOverview(product.name, 15)}</h5>
                                <h6 className="card-title ">{product.additionalDiscount ? product.additionalDiscount + "%" : "-"}</h6>
                                {/* */}
                                <p className="card-text "><del>{product.price} TL</del></p>

                                <h6 className="card-text ">{this.calculatePrice(product.price, product.additionalDiscount)} TL</h6>
                                <div className="justify-content-between align-items-center">
                                    <button
                                        type="button"
                                        onClick={(event) => this.addProductToBasket(product)}
                                        className="btn btn-md btn-outline-primary">🛒</button>
                                        <FavListModal product={product}></FavListModal>

                                    <h2><span className="badge badge-info">{product.price}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        )
    }
}

export default ProductListPage;