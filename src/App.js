import './App.css';
import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
function App() {

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        var credentialResponseDecode = jwtDecode(credentialResponse.credential);
        console.log(credentialResponseDecode);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}


export default App;
