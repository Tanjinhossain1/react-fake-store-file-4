
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState } from 'react';
import Menubar from './component/MEnubar/Menubar';
import LoadProducts from './component/LoadProducts/LoadProducts';
// import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const addCard = () => setCount(count + 1)
  return (
    <div className="App">
     <Menubar count={count}></Menubar>
     <h1 className='mt-5'>All Product</h1>
     <LoadProducts addCard={addCard}></LoadProducts>
   
    </div>
  );
}
export default App;
