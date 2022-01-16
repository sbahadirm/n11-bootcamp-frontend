import React from "react";
import PageTitle from "../gen/PageTitle";

class BasketPage extends React.Component{

    render(){
        return(
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

                <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
                    
                    {/* {this.state.products.map(product => <BasketProduct
                            key={this.state.products.indexOf(product)}
                            index={this.state.products.indexOf(product) + 1}
                            product={product}
                            addProduct={() =>this.addProduct(product)}
                            removeProduct = {() => this.removeProduct(product)}
                        ></BasketProduct>
                    )} */}

                </tbody>
            </table>
        </div>
        )
    }
}

export default BasketPage;