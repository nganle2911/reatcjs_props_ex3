import React, { Component } from 'react'

export default class CartShoes extends Component {

  // TODO: Render cart
  renderCart = () => {
    let { cart } = this.props; 
    return cart.map((item, index) => {
      return <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td><img src={item.image} width={50} /></td>
        <td>${item.price}</td>
        <td>1</td>
        <td>$150</td>
        <td><i class="bi bi-trash3"></i></td>
      </tr>
    })
  }

  render() {
    // console.log("CartShoes", this.props);
    return (
      <div className='cartRight'>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel"><i class="bi bi-basket2-fill"></i> Your Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <table className='table table-striped'>
              <thead className='thead_customBg'>
                <tr>
                  <th>ID</th>
                  <th>name</th>
                  <th>image</th>
                  <th>unit price</th>
                  <th>quantity</th>
                  <th>amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderCart()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
