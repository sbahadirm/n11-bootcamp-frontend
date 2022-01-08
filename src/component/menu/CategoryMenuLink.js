import React from "react";
import { Nav } from "react-bootstrap";

class CategoryMenuLink extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Nav.Link href={"/category/".concat(this.props.category.id)} key={"Nav.Link" + this.props.category.id}>{this.props.category.name}</Nav.Link>
        )
    }
}

export default CategoryMenuLink;