import React from "react";
import StringUtil from "../../api/gen/StringUtil";


class OrderProduct extends React.Component {

    constructor(props) {
        super(props);
    }

    currencyFormat(num) {
        return StringUtil.currencyFormat(num)
    }

    render() {

        return (
            <>
                <tr>

                    <td>
                        {this.props.product.index}
                    </td>

                    <td>
                        {this.props.product.name}
                    </td>
                    <td>
                        <img className="image-icon" src={this.props.product.imageUrl} ></img>
                    </td>
                    <td>
                        {this.currencyFormat(this.props.product.price)} TL
                    </td>

                    <td>
                        {this.currencyFormat(this.props.product.paidAmount)} TL
                    </td>
                    <td>
                        {this.props.product.deliveryCompany}
                    </td>
                    <td>
                        {this.props.product.parcelTrackingCode}
                    </td>
                    <td>
                        {this.props.product.deliveryStatus ? this.product.order.deliveryStatus : "Hazırlanıyor"}
                    </td>
                    <td>
                        {this.props.product.deliveryDate}
                    </td>

                </tr>
            </>

        )
    }
}

export default OrderProduct;