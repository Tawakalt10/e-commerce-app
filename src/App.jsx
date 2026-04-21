 import React from 'react';
import "./App.css";
import SignupForm from './components/SignupForm';


export default function  App(){
     return (
   <div>

    <Navbar />
    <Routes>
   <Route  path="/"  element={HomePage} />
   <Route  path="/profile"  element={ProfilePage} />
   <Route  path="/login"  element={LoginPage} />
   <Route  
   path="*"
    element={<h1 style={{padding:"0 1.5rem"}} > Not Found</h1>}/>
    </Routes>
   </div>
  )
}  




 