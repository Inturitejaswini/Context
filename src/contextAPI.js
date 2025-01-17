import React, { Component } from 'react'
import { dataProducts } from './appData';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: dataProducts,
        // detailProduct: productDetails,
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
 export {ProductProvider,ProductConsumer};