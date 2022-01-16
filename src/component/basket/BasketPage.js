import React from "react";
import BasService from "../../api/bas/BasService";
import PageTitle from "../gen/PageTitle";
import BasketProduct from "./BasketProduct";

class BasketPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {

        BasService.getProductList()
            .then(respose => this.handleResponse(respose))
            .catch(error => this.handleError(error))
    }

    handleResponse(response) {
        this.setState({ products: response.data })
    }

    handleError(error) {
        console.log(error);
    }

    addProduct(product){
        this.props.addProduct(product)
    }

    removeProduct(product){
        this.props.removeProduct(product)
    }

    render() {
        return (
            <div className="container">
                <PageTitle title="Sepetim"></PageTitle>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Adı</th>
                            <th scope="col">Görsel</th>
                            <th scope="col">Fiyatı</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.products.map(product => <BasketProduct
                            key={this.state.products.indexOf(product)}
                            index={this.state.products.indexOf(product) + 1}
                            product={product}
                            addProduct={() => this.addProduct(product)}
                            removeProduct={() => this.removeProduct(product)}
                        ></BasketProduct>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default BasketPage;