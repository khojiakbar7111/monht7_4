import { useDispatch } from "react-redux";
import Carts from "./Carts";
import { clearCart } from "../features/cartslice";


export default function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <Carts />
      <button  className="cler" onClick={() => dispatch(clearCart())}>clear</button>
    </div>
  )
}
