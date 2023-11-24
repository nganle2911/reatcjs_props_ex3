import React, { Component } from 'react'

export default class ItemShoes extends Component {

    // todo: Check length of description info
    checkDescriptionLength = (description, maxLen) => {
        if (description.length > maxLen) {
            return description.substring(0, maxLen) + "...";
        } else {
            return description;
        }
    };

    render() {
        // console.log("ItemShoes", this.props);
        let { item, handleAddToCart, handleViewDetail, selectedShoes, handleClose } = this.props;

        return (
            <>
                <div className='col-3 mb-4'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.checkDescriptionLength(item.name, 20)}</h5>
                            <p className="card-text">{this.checkDescriptionLength(item.description, 50)}</p>
                            <div className='btn-footer'>
                                <a className="btnView btn btn-secondary" onClick={() => {
                                    handleViewDetail(item.id); 
                                }}>View Detail</a>                              
                                <a className="btnAdd btn btn-primary" onClick={() => {
                                    handleAddToCart(item);
                                }}>Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MY MODAL */}
                <div id='myModal' className="modal" tabIndex={-1} role='dialog'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedShoes && selectedShoes.name}</h5>
                            </div>
                            <div className="modal-body">
                                <img src={selectedShoes && selectedShoes.image} width={250} />
                                <div className='text-start'>
                                    <strong>Description: </strong>
                                    {selectedShoes && selectedShoes.description}
                                </div>
                                <div className='text-start'>
                                    <strong>Price: </strong>
                                    ${selectedShoes && selectedShoes.price}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}