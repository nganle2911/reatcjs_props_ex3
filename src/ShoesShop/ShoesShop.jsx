import React, { Component } from 'react'
import ListShoes from './ListShoes'
import CartShoes from './CartShoes'
import { shoesArr } from './data'
import "./style.css";

export default class ShoesShop extends Component {
    state = {
        listShoes: shoesArr,
        cart: []
    }

    // TODO: Handle add to cart
    handleAddToCart = (shoes) => {
        // console.log("shoes", shoes);
        let cloneCart = [...this.state.cart]; 
        cloneCart.push(shoes);
        
        this.setState({cart: cloneCart});
        // console.log("cloneCart", cloneCart); 
    }

    render() {
        return (
            <div className='shoesShop'>
                {/* NAVBAR */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#">shoes shop</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart4"></i> Cart</a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* LIST SHOES */}
                <div className='container mt-3'>
                    <h1>Products List</h1>
                    <ListShoes handleAddToCart={this.handleAddToCart} listShoes={this.state.listShoes} />
                    <CartShoes cart={this.state.cart} />
                </div>
            </div>
        )
    }
}


