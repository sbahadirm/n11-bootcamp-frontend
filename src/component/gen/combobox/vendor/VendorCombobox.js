import React from "react";
import UsrService from "../../../../api/usr/UsrService";
import Combobox from "../Combobox";

class VendorCombobox extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount() {

        UsrService.getAllVendors()
            .then(response => this.handleResponse(response))
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

export default VendorCombobox;