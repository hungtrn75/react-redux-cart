import React, { Component } from 'react';
import * as Message from './../constants/Message'

class CartItem extends Component {
    render() {
        let { item, index } = this.props;
        let { quantity } = item;
        return (
            <tr>
                <th>{index+1}</th>
                <th scope="row">
                                <img src={item.product.image}
                                    alt={item.product.name} className="img-fluid z-depth-0" />
                            </th>
                            <td>
                                <h5>
                                    <strong>{item.product.name}</strong>
                                </h5>
                            </td>
                            <td>{item.product.price}$</td>
                            <td className="center-on-small-only">
                                <span className="qty">{quantity} </span>
                                <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                        onClick={() => this.onUpdateQuantity(item.product, quantity - 1)} 
                                        className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light">
                                        <a>—</a>
                                    </label>
                        <label
                                onClick={()=>this.onUpdateQuantity(item.product,item.quantity+1)}
                                        className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light">
                                        <a >+</a>
                                    </label>
                                </div>
                            </td>
                            <td>{item.product.price*item.quantity}$</td>
                            <td>
                                <button 
                                onClick={()=>this.onRemoveProductInCart(item.product)}
                                type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                    title="" data-original-title="Remove item">
                                    X
                                </button>
                            </td>
                        </tr>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateProductInCart(product, quantity);
            this.props.onUpdateMessage(Message.MSG_UPDATE_CARD_SUCCESS);
        }    
        if (quantity === 0) {
            this.onRemoveProductInCart(product);
        }
    }
    onRemoveProductInCart=(product)=>{
        this.props.onRemoveProductInCart(product);
        this.props.onUpdateMessage(Message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS);
    }
}

export default CartItem;