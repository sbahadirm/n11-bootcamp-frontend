import React from "react";
import BasketPage from "./BasketPage";
import OrderSummaryPage from "./OrderSummaryPage";

class BasketContainerPage extends React.Component{

    constructor(){
        super();

        this.state = {
            selectedProducts: []
        }
    }

    addProduct(product){

        let list = this.state.selectedProducts;

        list.push(product);

        this.setState({selectedProducts: list})

        console.log(this.state)
    }

    removeProduct(product){
        let list = this.state.selectedProducts;

        list.pop(product);

        this.setState({selectedProducts: list})

        console.log(this.state)
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <BasketPage  addProduct={this.addProduct} removeProduct={this.removeProduct} ></BasketPage>
                    </div>

                    <div className="col-4">
                        <OrderSummaryPage products = {this.state.selectedProducts} ></OrderSummaryPage>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketContainerPage;