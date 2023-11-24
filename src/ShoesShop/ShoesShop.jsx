import React, { Component } from 'react'
import ListShoes from './ListShoes'
import CartShoes from './CartShoes'
import { shoesArr } from './data'
import "./style.css";

export default class ShoesShop extends Component {
    state = {
        listShoes: shoesArr,
        cart: [],
        selectedShoes: null
    }

    // TODO: Handle add to cart
    handleAddToCart = (shoes) => {
        // console.log("shoes", shoes);
        let cloneCart = [...this.state.cart]; 
        
        // check if shoes existed in cart
        let index = cloneCart.findIndex(item => item.id == shoes.id);
        if (index == -1) {
            // create new object containing quantity & amount
            let newShoes = {...shoes, quantity: 1, amount: shoes.price};
            cloneCart = [...cloneCart, newShoes];
        } else {
            // update quantity & amount of shoes
            cloneCart[index].quantity++;
            cloneCart[index].amount = cloneCart[index].price * cloneCart[index].quantity; 
        }

        this.setState({ cart: cloneCart });
    }

    // TODO: Handle delete shoes in cart
    handleDeleteInCart = (itemId) => {
        let newCart = this.state.cart.filter((item) => {
            return item.id != itemId;
        }); 
        this.setState({ cart: newCart });
    }

    // TODO: Handle view detail shoes
    handleViewDetail = (itemId) => {
        let selectedItem = this.state.listShoes.find((shoes) => {
            return shoes.id == itemId;
        });
        this.setState({selectedShoes: selectedItem});

        // use bootstrap modal to show the details
        const myModal = document.getElementById("myModal");
        if (myModal) {
            myModal.classList.add("show");
            myModal.style.display = "block";
        }
    }

    // TODO: Handle close modal
    handleClose = () => {
        const myModal = document.getElementById("myModal");
        if (myModal) {
            myModal.classList.remove("show");
            myModal.style.display = "none";
        }
        this.setState({selectedShoes: null});
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
                    <ListShoes handleClose={this.handleClose} selectedShoes={this.state.selectedShoes} handleViewDetail={this.handleViewDetail} handleAddToCart={this.handleAddToCart} listShoes={this.state.listShoes} />
                    <CartShoes cart={this.state.cart} handleDeleteInCart={this.handleDeleteInCart} />
                </div>
            </div>
        )
    }
}


