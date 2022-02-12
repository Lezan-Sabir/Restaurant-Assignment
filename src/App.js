//import logo from './logo.svg';
//import './App.css';
import { useState, useEffect} from 'react';
import ModeContext from './ModeContext';
import ModeSwitcher from './ModeSwitcher';
import { useSelector } from 'react-redux';
import Home from "./Home.jsx";
import Order from './Order';

function App() {

  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('mode')) === true ? true : false);
  const toggle = () => {
    const chosenMode = !isDark
    setIsDark(chosenMode)
    localStorage.setItem('mode', chosenMode)
  }

  useEffect(()=>{
      fetch('https://my-restaurant-cad58-default-rtdb.firebaseio.com/orders.json',{
        method: 'PUT',
        body: JSON.stringify(orders)
      }).catch(e=>console.log(e))
  },[orders])

  const orders = useSelector(s => s.orders.orders);
  return (

    
    <ModeContext.Provider value={{ isDark, toggle }}>
    <div className="App">
      <header className="{`App-header${isDark ? '-dark' : ''}`">
      <ModeSwitcher />
      <Home />
      {orders.map((o, i) => {
          return <Order order={o.order} id={o.id} key={o.id} />
        })
        }
      </header>
    </div>
    </ModeContext.Provider>
  );
}

export default App;
