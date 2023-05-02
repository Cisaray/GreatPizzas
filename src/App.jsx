import './scss/app.scss'
import {Header} from './components/pages/Header'
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/pages/Home";
import {NotFound} from "./components/pages/NotFound";
import {FullCart} from "./components/pages/FullCart";

function App() {

    return (
        <div className="App">
               <div className="wrapper">
                   <Header/>
                   <Routes>
                       <Route path='/' exact element={<Home/>}/>
                       <Route path='/cart' exact element={<FullCart/>}/>
                       <Route path='*' exact element={<NotFound/>}/>
                   </Routes>
               </div>
        </div>
    )
}

export default App;
