import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/checkout';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './FirebaseDetails';
import { useStateValue } from './StateProvider/StateProvider';
import Payment from './Components/Checkout/Payment';
import AllProducts from './Components/AllProducts/AllProducts';


let App = () => {
      const [{}, dispatch] = useStateValue()
   // will only run once when the app component loads..
   useEffect(() => {
       // onAuthStateChange is like an observer or listener everytime auth is refire
       // when auth changes it will give us the auth user or to know if user is not there
        auth.onAuthStateChanged((authUser) => {
            console.log('THE USER IS  >>> ', authUser)

            if(authUser){
                // the user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else{
                 // the user is logged out
                 dispatch({
                      type: 'SET_USER',
                      user: null
                 })
            }
        })
   },[])


  return (
    <div className="App">
        <BrowserRouter>

           <Routes>
                <Route path='/' element={[<Navbar/>, <Home/>]} /> 
                <Route path='/checkout' element={[<Navbar/>,<Checkout/>]} />
                 <Route path='/payment' element={[<Navbar/>, <Payment/>]}/>
                 <Route path='/all-products' element={[<Navbar/>, <AllProducts/>]}/>
                <Route path='/login' element={<Login/>}/>
                
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
