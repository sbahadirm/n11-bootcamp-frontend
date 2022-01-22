import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import StringUtil from "../../api/gen/StringUtil";
import OrdService from "../../api/ord/OrdService";
import PageTitle from "../gen/PageTitle";
import OrderProduct from "./OrderProduct";

class OrderPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        OrdService.getOrderList()
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
    }

    handleResponse(response) {
        this.setState({ orders: response.data })
    }

    handleError(error) {
        console.log(error);
    }

   
    currencyFormat(num) {
        return StringUtil.currencyFormat(num)
    }
    
    formattedDate(dateField) {
        return StringUtil.formattedDate(dateField)
    }

    render() {

        return (

            <div className="container">
                <PageTitle title="Sepetim"></PageTitle>

                <table className="table">

                    <Accordion defaultActiveKey="0">
                        {this.state.orders.map(order => {
                            return <Accordion.Item eventKey={this.state.orders.indexOf(order)}>
                                <Accordion.Header>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <div>
                                                    Sipariş No: {order.orderNo + " "}

                                                    {this.formattedDate(order.orderDate)}

                                                </div>
                                            </Col>
                                            <Col>{order.deliveryStatus ? order.deliveryStatus : "Hazırlanıyor"}</Col>
                                            <Col>{this.currencyFormat(order.paidAmount)} TL</Col>
                                        </Row>
                                    </Container>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Adı</th>
                                                <th scope="col">Görsel</th>
                                                <th scope="col">Fiyatı</th>
                                                <th scope="col">Ödenen Fiyat</th>
                                                <th scope="col">Kargo Şirketi</th>
                                                <th scope="col">Kargo Takip No</th>
                                                <th scope="col">Teslimat Durumu</th>
                                                <th scope="col">Teslimat Tarihi</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {order.prdProductDtoList.map(product => <OrderProduct
                                                key={order.prdProductDtoList.indexOf(product)}
                                                index={order.prdProductDtoList.indexOf(product) + 1}
                                                product={product}
                                            ></OrderProduct>
                                            )}



                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        })}


                    </Accordion>
                </table>

            </div>

        )
    }
}

export default OrderPage;