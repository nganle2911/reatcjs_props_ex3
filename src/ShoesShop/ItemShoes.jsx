import React, { Component } from 'react'
import ModalDetail from './ModalDetail';

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
        let { item, handleAddToCart, handleViewDetail } = this.props;

        return (
            <>
                <div className='col-3 mb-4'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.checkDescriptionLength(item.name, 20)}</h5>
                            <p className="card-text">{this.checkDescriptionLength(item.description, 50)}</p>
                            <div className='btn-footer'>
                                <a className="btnView btn btn-secondary" data-bs-toggle="modal" data-bs-target="#myStaticModal" onClick={() => {
                                    handleViewDetail(item);
                                }}>View Detail</a>
                                {/* MODAL */}
                                <ModalDetail item={item}/>
                                <a className="btnAdd btn btn-primary" onClick={() => {
                                    handleAddToCart(item);
                                }}>Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </>
        )
    }
}