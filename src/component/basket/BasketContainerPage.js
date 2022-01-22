import React from "react";
import BasketPage from "./BasketPage";
import OrderSummaryPage from "./OrderSummaryPage";

class BasketContainerPage extends React.Component {

    constructor() {
        super();

        this.state = {
            selectedProducts: []
        }

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.refreshPage = this.refreshPage.bind(this)
    }

    addProduct(product) {

        let list = this.state.selectedProducts;

        list.push(product);

        this.setState({ selectedProducts: list })

    }

    removeProduct(product) {
        let list = this.state.selectedProducts;

        list.pop(product);

        this.setState({ selectedProducts: list })

    }

    refreshPage(){

        console.log("state");
        console.log(this.state)

        this.setState({selectedProducts: []})
       
    }

    render() {

        console.log("render");
        console.log(this.state)

        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <BasketPage addProduct={this.addProduct} removeProduct={this.removeProduct} ></BasketPage>
                    </div>

                    <div className="col-4">
                        <OrderSummaryPage products={this.state.selectedProducts} refreshPage={this.refreshPage}></OrderSummaryPage>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketContainerPage;