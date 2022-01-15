import React from "react";
import { Button, Modal } from "react-bootstrap";
import FavService from "../../api/fav/FavService";

class FavListModal extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            favListList: [],
            smShow: false
        }
    }

    componentDidMount() {

        FavService.getFavListList()
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
            ;
    }

    handleResponse(response) {
        this.setState({ favListList: response.data })
    }

    handleError(error) {
        console.log(error.response)
    }

    addProductToList(favlist) {

        FavService.addProductToList(favlist.id, this.props.product.id)
            .then(response => this.handlePostResponse(response))
            .catch(error => this.handlePostError(error))
            ;

    }

    handlePostResponse(response) {
        this.setState({ smShow: false })
    }

    handlePostError(error) {
        console.log(error.response)
    }

    render() {
        return (
            <>
                <Button onClick={() => this.setState({ smShow: true })}>❤</Button>{' '}
                
                <Modal
                    size="sm"
                    show={this.state.smShow}
                    onHide={() => this.setState({ smShow: false })}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Favori Listelerim
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {this.state.favListList.map(favlist => {
                                return <span key={favlist.id}>
                                    <button onClick={() => this.addProductToList(favlist)}>{favlist.name}</button>
                                </span>
                            })}

                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
                            <button type="button" className="btn btn-success">Yeni Liste Oluştur</button>
                        </div>

                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default FavListModal;

