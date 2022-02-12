import { useDispatch } from "react-redux";
import { removeOrder } from "./redux/orderSlice";
const Order = props => {
    const dispatch = useDispatch();
    return (
        <div>
            <p onClick={() => {
                dispatch(removeOrder(props.id))
            }}>Remove Order</p>
        </div>
    )
}

export default Order;