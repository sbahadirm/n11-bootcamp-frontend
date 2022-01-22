import React from "react";
import OrdService from "../../api/ord/OrdService";
import PageTitle from "../gen/PageTitle";

class OrderSummaryPage extends React.Component {

    constructor(props) {
        super(props);

        this.getTotalPrice = this.getTotalPrice.bind(this);
        this.createOrder = this.createOrder.bind(this)
    }

    getTotalPrice() {

        let totalPrice = 0;

        this.props.products.map(product => {
            totalPrice = totalPrice + product.productPrice
        })

        return totalPrice;
    }

    createOrder() {

        const basBasketProductIdList = [];

        this.props.products.forEach(element => {
            basBasketProductIdList.push(element.id)
        });

        const order = {
            username: sessionStorage.getItem('username'),
            paidAmount: this.getTotalPrice(),
            deliveryCompany: 'kolaygelsin',
            addressId: 111,
            basBasketProductIdList: basBasketProductIdList
        }

        console.log(order)

        OrdService.createOrder(order)
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }

    handleResponse(response) {
        this.props.refreshPage();

        console.log(response.data)
    }

    handleError(error) {
        console.log(error)
    }

    render() {
        return (
            <div className="container">
                <PageTitle title="Sipariş Özeti"></PageTitle>

                <div className="card" style={{ "width": "18rem" }}>

                    <div className="card-body">
                        <h5 className="card-title">Sipariş Özeti</h5>
                        <p className="card-text">Toplam {this.props.products.length} Ürün </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Ürün Toplamı: {this.getTotalPrice()} TL</li>
                        <li className="list-group-item">Sepette Ek İndirimler: 0 TL</li>
                        <li className="list-group-item">Toplam: {this.getTotalPrice()} TL</li>
                    </ul>
                    <div className="card-body">
                        <a className="btn btn-success" onClick={this.createOrder}>Sipariş Ver</a>
                        <a href="/list" className="card-link">Alışverişe Devam Et</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderSummaryPage;