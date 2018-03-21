import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as message from './../constants/Message';
import { actionRemoveProductInCart,actionUpdateMessage,actionUpdateProductToCart } from '../actions';


class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
    showCartItem = (cart) => {
        let result =
            <tr>
                <td>{message.MSG_CARD_EMPTY}</td>
            </tr>
            ;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index} item={item} index={index}
                        onRemoveProductInCart={this.props.onRemoveProductInCart}
                        onUpdateMessage={this.props.onUpdateMessage}
                        onUpdateProductInCart={this.props.onUpdateProductInCart}
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = cart => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }
        ).isRequired
    ).isRequired,
    onRemoveProductInCart: PropTypes.func.isRequired,
    onUpdateMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return ({
        onRemoveProductInCart: product => {
            dispatch(actionRemoveProductInCart(product));
        },
        onUpdateMessage:message=>{
            dispatch(actionUpdateMessage(message));
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(actionUpdateProductToCart(product,quantity));
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);