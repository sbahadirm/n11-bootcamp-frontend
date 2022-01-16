import React from "react";
import PageTitle from "../gen/PageTitle";

class OrderSummaryPage extends React.Component{

    constructor(props){
        super(props);

        this.getTotalPrice = this.getTotalPrice.bind(this);
    }

    getTotalPrice(){

        let totalPrice = 0;

        this.props.products.map(product => {
            totalPrice = totalPrice + product.productPrice
        })

        return totalPrice;
    }

    render(){
        return(
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
                        <a href="#" className="btn btn-success">Sipariş Ver</a>
                        <a href="/list" className="card-link">Alışverişe Devam Et</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderSummaryPage;