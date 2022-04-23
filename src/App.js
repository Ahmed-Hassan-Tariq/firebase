import React, { useState } from 'react';
import './App.css';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import initializeAuthentication from './Firebase/firebase.init';


initializeAuthentication();
const provider = new GoogleAuthProvider();
  




function App() {
const [user, setUser] = useState({});
const handleGoogleSignIn = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider).then(result=>{
    const user = result.user;
    setUser(user);
    console.log(user);
  })
  .catch((error) => {
    console.log(error.message);
  });
}
  return (
    <div className="App_container">

      

      {user.email ? ( 
        <div className='main_container'>
            <h2>Hi!</h2>
            <h3>{user.displayName}</h3>
            <img className='profile_picture' src={user.photoURL} alt='img' />
            <h4>Site Under Development!</h4>
            <p>Thank you for signing up.</p>

            <button className='logout-with-google-btn' onClick={() => setUser({})}>Sign Out</button>
        </div>
        ) : (
          <div className='main_container'>

          <SignIn/>
          <button className='login-with-google-btn' onClick={handleGoogleSignIn}>Sign in with Google</button>
          
          
          </div>
         ) }
        
  
    </div>
  );
}


function SignIn() {
  return (
    <div className='signedin'><h2>Get Started</h2></div>
  )
}


export default App;
