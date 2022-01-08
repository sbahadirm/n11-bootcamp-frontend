import React from "react";
import CategoryMenuDropDown from "./CategoryMenuDropDown";
import CategoryMenuLink from "./CategoryMenuLink";

class CategoryMenu extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        // console.log(this.props.categoryList)

        return(
            <>
            
            {
                this.props.categoryList.map(category => {
                    console.log(category)
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