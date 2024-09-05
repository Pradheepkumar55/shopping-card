import React from 'react'

const Cart = ({productcount}) => {
  
  return (
    <div className='cart'>
      <span className='icon'><i className='bx bxs-cart'></i></span>
      <p className='cart-title'>Cart</p>
      <p className='count'>{productcount}</p>
    </div>
  
  )
}

export default Cart