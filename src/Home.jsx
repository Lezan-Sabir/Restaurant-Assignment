import info from './information.js';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "./redux/orderSlice";

const Home = props => {
    const [order, setOrder] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
        {

            info.map(el => {
                return(
                    <div>
                        
                        <h1>{el.name}</h1>
                        <button>Add to List</button>
                        <h3>{el.category}</h3>
                        <h4>{el.price}</h4>
                        <button onClick={() => {
                const id = Math.floor(Math.random() * 1000)
                dispatch(addOrder({ id, order}))
            }}>Add to List</button>
                        <img src={el.img} alt={el.name} width="200" />
                        
                    </div>

                )
            }
        )
        }
        </div>
    )
}

export default Home;


