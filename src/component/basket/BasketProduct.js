import React from "react";
import { FormCheck } from "react-bootstrap";
import StringUtil from "../../api/gen/StringUtil";

class BasketProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSelected: false
        }

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect() {

        this.setState({ isSelected: !this.state.isSelected })

        if (this.state.isSelected) {
            this.props.removeProduct();
        } else {
            this.props.addProduct();
        }
    }

    currencyFormat(num) {
        return StringUtil.currencyFormat(num)
    }

    render() {

        return (
            <>
                <tr>
                    <th scope="row">
                        <FormCheck onChange={this.handleSelect} ></FormCheck>
                    </th>
                    <td>
                        {this.props.product.productName}
                    </td>
                    <td>
                        <img className="image-icon" src={this.props.product.productImageUrl} ></img>
                    </td>
                    <td>
                        {this.currencyFormat(this.props.product.productPrice)} TL
                    </td>
                    {/* <td>
                    <button type="button" className="btn btn-danger" onClick={this.handleRemoveClick}>Çıkar</button>
                </td> */}
                </tr>
            </>

        )
    }
}

export default BasketProduct;