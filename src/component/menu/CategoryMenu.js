import React from "react";
import CategoryMenuDropDown from "./CategoryMenuDropDown";
import CategoryMenuLink from "./CategoryMenuLink";

class CategoryMenu extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <>
            
            {
                this.props.categoryList.map(category => {
                    if(category.subPrdCategoryForMenuDtoList !== null && category.subPrdCategoryForMenuDtoList.length > 0){
                        return <CategoryMenuDropDown category = {category} key={category.id}></CategoryMenuDropDown>
                    } else {
                        return <CategoryMenuLink category={category} key={category.id}></CategoryMenuLink>
                    } 
                })
            }
            </>
        )
    }
}

export default CategoryMenu;