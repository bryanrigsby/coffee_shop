import React from 'react'

export default function CartModal(props) {
  console.log('CartModal props', props)
  let cart = props.cart;
  console.log('cart in CartModal', cart)
  return (
  <>
    <div className="modal" id="cartModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Shopping Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {cart && cart.length > 0 && cart.map(item => (
              <p key={item.id}>{`${item.item}- $${item.price}`}</p>
            ))
            }
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Keep Shopping</button>
            <button type="button" className="btn btn-primary">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
