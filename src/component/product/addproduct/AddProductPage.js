import React from "react";
import PageTitle from "../../gen/PageTitle";
import serialize from 'form-serialize';
import PrdService from "../../../api/prd/PrdService";
import CategoryCombobox from "../../gen/combobox/category/CategoryCombobox";
import VendorCombobox from "../../gen/combobox/vendor/VendorCombobox";


class AddProductPage extends React.Component {

    state = {
        product: {}
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const newProduct = serialize(e.target, { hash: true })

        this.save(newProduct);

    }

    save(newProduct) {

        PrdService.saveProduct(newProduct)
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error))
            ;
    }

    handleResponse(response) {
        
        
    }

    handleError(error) {
        console.log(error.data);
    }

    clearForm() {
        document.getElementById("product-form").reset();
    }

    render() {
        return (

            <div className="container col-md-6 offset-md-3">

                <PageTitle title="Ürün Ekle"></PageTitle>

                <form id="product-form" className="mt-5" onSubmit={this.handleFormSubmit}>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="inputName">Adı</label>
                            <input type="text"
                                className="form-control"

                                name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">Kısa Adı</label>
                            <input type="text"
                                className="form-control"

                                name="shortName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">Kategori</label>
                            <CategoryCombobox
                                fieldName="categoryId"
                               
                            ></CategoryCombobox>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">Satıcı</label>
                         
                                <VendorCombobox
                                    fieldName="vendorUserId"
                                    notNull={true}
                                ></VendorCombobox>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="inputImage">Görsel Url'i</label>
                            <input
                                type="text"
                                className="form-control"

                                name="imageUrl" />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="inputRating">Fiyat</label>
                            <input
                                className="form-control "

                                name="price" />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="inputRating">İndirim</label>
                            <input
                                className="form-control "

                                name="additionalDiscount" />
                        </div>
                    </div>

                    <input type="submit" className="btn btn-danger btn-block" value="Kaydet" />
                </form>
            </div>
        )
    }
}

export default AddProductPage;