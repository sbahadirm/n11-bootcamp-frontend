import React from "react";
import FavService from "../../api/fav/FavService";
import PageTitle from "../gen/PageTitle";
import Fav from "./Fav";

class FavListPage extends React.Component {

    constructor() {
        super();

        this.state = {
            favListList: []
        }
    }

    componentDidMount() {
        FavService.getFavListList()
            .then(respose => this.handleResponse(respose))
            .catch(error => this.handleError(error))
    }

    handleResponse(response) {
        this.setState({ favListList: response.data })
    }

    handleError(error) {
        console.log(error);
    }

    render() {

        return (
            <>
                <PageTitle title="Favori Listesi"></PageTitle>

                <div className="container overflow-hidden">
                    <div className="row gy-5">

                        {this.state.favListList.map(favlist => {
                            return (
                                <div className="col-6" key={favlist.id}>
                                    <div className="p-3 border bg-light">
                                        <Fav favListName={favlist.name} favListId={favlist.id}></Fav>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default FavListPage;