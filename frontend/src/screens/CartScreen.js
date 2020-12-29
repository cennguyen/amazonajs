import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartAction';
import { useDispatch } from 'react-redux';

export default function CartScreen(props) {
    const productID = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, qty));
        }
    }, [dispatch, productID, qty]);
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD To Cart: productID: {productID} Qty:{qty}
            </p>
        </div>
    );
}