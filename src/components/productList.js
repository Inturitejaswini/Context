import React, { Component } from 'react';
import { ProductConsumer } from '../contextAPI'
import Product from '../components/product'
class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Find Your Cars</h1>
                </div>
                <div className="row">
                    <ProductConsumer>
                        {(value) => {
                          return value.product.map(product =>{
                              return <Product key={product.id} product={product}/>
                          })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        );
    }
}

export default ProductList;