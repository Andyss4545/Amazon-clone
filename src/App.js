import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/checkout';

let App = () => {
  return (
    <div className="App">
        <BrowserRouter>
              <Navbar/>
             <Routes>
                  <Route path='/'   element={<Home/>} />
                  <Route path='/checkout' element={<Checkout/>} />
             </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
