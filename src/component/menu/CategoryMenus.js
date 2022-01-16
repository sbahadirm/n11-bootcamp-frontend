import React from "react";
import PrdService from "../../api/prd/PrdService";
import CategoryMenu from "./CategoryMenu";

class CategoryMenus extends React.Component{

    state = {
        categoryList: []
    }

    constructor(){
        super();
    }

    componentDidMount(){
    
        PrdService.getMenuItems()
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
            ;
    }

    handleResponse(response){
        this.setState({categoryList: response.data})
    }

    handleError(error){
        console.log(error)
    }

    render(){

        return(
            <CategoryMenu categoryList={this.state.categoryList}/>
        )
    }
}

export default CategoryMenus;