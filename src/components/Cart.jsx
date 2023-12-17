/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { dec, inc, removeItem } from "../features/cartslice";



export default function Cart({ id,title, price, img, amount }) {

    const dispatch = useDispatch();

  return (
      <div className="cart" >
        <div className="cart_pages">

          <h2>{title}</h2>
          <img src={img} alt="" />
          <h2>{price}</h2>
          <p>{amount}</p>

          { amount < 1 ?    <button  className="del" onClick={() => dispatch(removeItem(id))}>-</button> : <button  className="del" onClick={() => dispatch(dec({id}))}>-</button> }

          <button className="del" onClick={() => dispatch(inc({id}))}>+</button>
          <button className="del" onClick={() => dispatch(removeItem(id))}>del</button>
        </div>
    </div>
  )
}
