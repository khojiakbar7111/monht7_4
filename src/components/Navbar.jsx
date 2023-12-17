import { useSelector } from "react-redux"


export default function Navbar() {
    const { amount } = useSelector((state) => state.cart);
  return (
      <div className="nav">
          <ul>
              <li>home</li>
              <li>Section</li>
              <li>unch</li>
              <li>{ amount}</li>
          </ul>
    </div>
  )
}
