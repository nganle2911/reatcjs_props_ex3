import React, { Component } from 'react'
import ItemShoes from './ItemShoes'

export default class ListShoes extends Component {

  // TODO: Render listShoes 
  renderListShoes = () => {
    let { listShoes, handleAddToCart, handleViewDetail, selectedShoes, handleClose } = this.props;

    return listShoes.map((item, index) => {
      return <ItemShoes handleClose={handleClose} selectedShoes={selectedShoes} handleViewDetail={handleViewDetail} handleAddToCart={handleAddToCart} key={index} item={item} />
    });
  }

  render() {
    // console.log("ListShoes", this.props);
    return (
      <div className='listShoes row'>
        {this.renderListShoes()}
      </div>
    )
  }
}
