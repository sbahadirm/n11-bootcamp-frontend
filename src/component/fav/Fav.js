import React from "react";
import FavService from "../../api/fav/FavService";
import AddIcon from "./AddIcon";
import ImageIcon from "./ImageIcon";

class Fav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            favProductList: [],
            editButtonTitle: "Listeyi Düzenle",
            editModeOn: false
        }

        this.handleEditOnClick = this.handleEditOnClick.bind(this);

    }

    componentDidMount() {
        this.getProductList();
    }

    getProductList() {
        FavService.getProductList(this.props.favListId)
            .then(respose => this.handleResponse(respose))
            .catch(error => this.handleError(error))
    }

    deleteData(product) {
        FavService.removeProductFromList(product.id)
            .then(respose => this.getProductList())
            .catch(error => this.handleError(error))
    }

    handleResponse(response) {

        var list;
        if (this.state.editModeOn) {
            list = response.data
        } else {
            list = response.data.slice(0, 3)
        }

        this.setState({ favProductList: list })
    }

    handleError(error) {
        console.log(error);
    }

    remove(product) {
        this.deleteData(product);
    }

    handleEditOnClick() {

        const newMode = !this.state.editModeOn;
        const newTitle = newMode === false ? "Listeyi Düzenle" : "Düzenlemeyi Bitir"

        this.setState({
            editModeOn: newMode,
            editButtonTitle: newTitle
        })

        this.getProductList();
    }

    render() {
        return (
            <>
                <div className="container">

                    <h4>{this.props.favListName}</h4>
                    
                    <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                        {this.state.favProductList.map(product => <ImageIcon key={product.id} remove={() => this.remove(product)} imageUrl={product.productImageUrl}></ImageIcon>)}
                        
                        <AddIcon link="/list"></AddIcon>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
                        <button type="button" className="btn btn-primary" onClick={this.handleEditOnClick}>{this.state.editButtonTitle}</button>
                        <button type="button" className="btn btn-danger">Listeyi Sil</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Fav;