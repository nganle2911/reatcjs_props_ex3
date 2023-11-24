import React, { Component } from 'react'
import ItemShoes from './ItemShoes'

export default class ListShoes extends Component {

  // TODO: Render listShoes 
  renderListShoes = () => {
    let { listShoes, handleAddToCart } = this.props;

    return listShoes.map((item, index) => {
      return <ItemShoes handleAddToCart={handleAddToCart} key={index} item={item} />
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
