import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { remove } from '../store/cartSlice'
function Cart() {
    // const products = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const item = useSelector((state)=>state.cart)
    const handleremove =(id)=>{
dispatch(remove(id))
    }
  return (
   <>
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
{
item.map(product =>(
    <div className='cartCard'>
        <img src={product.image} alt="img" />
        <h5>{product.title}</h5>
        <h5>{product.price}</h5>
        <button className='btn' onClick={()=>handleremove(product.id)}>Remove</button>
    </div>
))
}
        </div>
    </div>
   </>
  )
}

export default Cart
