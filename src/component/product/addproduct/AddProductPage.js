import React from "react";
import PageTitle from "../../gen/PageTitle";
import serialize from 'form-serialize';


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

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }

        fetch('http://localhost:8080/api/v1/products', requestOptions)
            .then(response => response.json())
            .then(data => { 
                console.log("data geldi")
                console.log(data)
                this.setState({ product: data })
                
                if(data.id ){
                    this.clearForm(); 
                }
                
            })
            ;

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
                            <input type="number"
                                className="form-control"
                                
                                name="categoryId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">Satıcı</label>
                            <input type="number"
                                className="form-control"
                                
                                name="vendorUserId" />
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