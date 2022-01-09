import React from "react";

class ProductList extends React.Component{

    state = {
        productList : []
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/v1/products/' + this.props.categoryId)
            .then((response) => response.json())
            .then(productList => {
                this.setState({productList: productList})
            });
    }

    truncateOverview(text, maxLength){
        if(!text){
            return null;
        }

        if(text.length <= maxLength){
            return text;
        }

        const newText = text.substring(0, maxLength) + "...";

        return newText;
    }

    calculatePrice(price, discount){
        if(!price){
            return null;
        }

        const newPrice = price - (price*discount/100);

        return Number.parseFloat(newPrice).toFixed(2);
    }

    render(){
        return(
            <div className="row col-md-6 offset-md-3">

            {this.state.productList.map((product, i) => (

                <div className="col-lg-4" key={i}>
                    <div className="card mb-4 shadow-sm">
                        <img src={product.imageUrl} className="card-img-top image" alt="Sample Product" />
                        <div className="card-body text-center">
                            <h5 className="card-title ">{this.truncateOverview(product.name, 15)}</h5>
                            <h6 className="card-title ">{product.additionalDiscount ? product.additionalDiscount + "%" : "-"}</h6>
                            {/* */}
                            <p className="card-text "><del>{product.price} TL</del></p>

                            <h6 className="card-text ">{this.calculatePrice(product.price, product.additionalDiscount)} TL</h6>
                            <div className="justify-content-between align-items-center">
                                <button
                                    type="button"
                                    onClick={(event) => this.props.addToBasketProp(product)}
                                    className="btn btn-md btn-outline-primary">Sepete Ekle</button>

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

export default ProductList;