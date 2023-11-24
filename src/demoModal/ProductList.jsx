import React, { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: 'Product 1', description: 'Description of Product 1' },
                { id: 2, name: 'Product 2', description: 'Description of Product 2' },
                { id: 3, name: 'Product 3', description: 'Description of Product 3' },
            ],
            selectedProduct: null,
        };
    }

    handleViewDetail = (productId) => {
        const selectedProduct = this.state.products.find((product) => product.id === productId);
        this.setState({ selectedProduct });
        // Use Bootstrap modal to show the details
        const modal = document.getElementById('productModal');
        if (modal) {
            modal.classList.add('show');
            modal.style.display = 'block';
        }
    };

    handleCloseModal = () => {
        // Hide Bootstrap modal
        const modal = document.getElementById('productModal');
        if (modal) {
            modal.classList.remove('show');
            modal.style.display = 'none';
        }
        this.setState({ selectedProduct: null });
    };

    render() {
        const { products, selectedProduct } = this.state;

        return (
            <div>
                <h1>Product List</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <p>{product.name}</p>
                            <button onClick={() => this.handleViewDetail(product.id)}>View Detail</button>
                        </li>
                    ))}
                </ul>

                <div className="modal" id="productModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProduct && selectedProduct.name}</h5>
                                <button type="button" className="close" onClick={this.handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {selectedProduct && (
                                    <div>
                                        <p>{selectedProduct.description}</p>
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
