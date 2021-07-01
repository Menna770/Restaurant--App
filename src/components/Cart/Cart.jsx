import React from 'react'

const Cart = props => {

    let styles = 
            props.product.isInCart
            ? { color: "#e26a31" , cursor: "pointer" }
            : { color: "#80808080", cursor: "pointer" }

        return (
            <>
                <i 
                    style={styles}
                    onClick={() => props.onCartChagne(props.product)}
                    className="fas fa-cart-plus">
                </i>
            </>
        )
}

export default Cart
