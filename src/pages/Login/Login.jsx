import React, { useState } from 'react';
import axios from 'axios';
import imageLogin from '../../assets/shopping-bag 1.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://api.example.com/login', {
        email: email,
        password: password,
      });
  
      console.log('Login successful:', response.data);
  
      localStorage.setItem('accessToken', response.data.accessToken);
  
      alert('Login success');
  
    } catch (error) {
      console.error('Login failed:', error.response.data);
  
      alert('Maaf, terjadi kesalahan');
    }
  };
  

  return (
    <div className="form">
      <div className="container">
        <div className="wrapper-logo">
          <img src={imageLogin} alt="Logo" className="logo" />
          <span>Blanja</span>
        </div>
        <h1>Please login with your account</h1>

        <div className="button-container">
          <button className="btn-customer">Customer</button>
          <button className="btn-seller">Seller</button>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot password?</a>

            <button type="submit">Login</button>
          </form>
        </div>

        <p>
          Dont have a Tokopedia account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
