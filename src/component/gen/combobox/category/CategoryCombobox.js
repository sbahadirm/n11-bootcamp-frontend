import React from "react";
import PrdService from "../../../../api/prd/PrdService";
import Combobox from "../Combobox";

class CategoryCombobox extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount() {

        PrdService.getAllCategories()
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
            ;
    }

    getAllCategories() {

        PrdService.getAllCategories()
            .then(respose => this.handleResponse(respose))
            .catch(error => this.handleError(error))
            ;
    }

    handleResponse(response) {
        this.setState({ items: response.data })
    }

    handleError(error) {
        console.log(error.data);
    }

    render() {
        return (
            <Combobox
                fieldName={this.props.fieldName}
                items={this.state.items}
                notNull={this.props.notNull}
            >
            </Combobox>
        )
    }
}

export default CategoryCombobox;