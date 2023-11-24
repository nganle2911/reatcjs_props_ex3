import React, { Component } from 'react'
import ItemShoes from './ItemShoes'

export default class ListShoes extends Component {

  // TODO: Render listShoes 
  renderListShoes = () => {
    let { listShoes } = this.props;

    return listShoes.map((item, index) => {
      return <ItemShoes key={index} item={item} />
    });
  }

  render() {
    return (
      <div className='listShoes row'>
        {this.renderListShoes()}
      </div>
    )
  }
}
