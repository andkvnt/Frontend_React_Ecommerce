// import React from 'react';
import './Register.css';
import imageLogin from '../../assets/shopping-bag 1.jpg';
import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('https://api.example.com/register', {
      email: email,
      password: password,
    });

    console.log('Login successful:', response.data);

    localStorage.setItem('accessToken', response.data.accessToken);

    alert('Login success');

  } catch (error) {
    console.error('Login failed:', error.response.data);

    alert('Maaf terjadi kesalahan');
  }
};


function Register() {
  return (
    
    <div className="form-register">
                <img src={imageLogin} alt="Logo" className="logo" />

      <h2>Daftar Sekarang</h2>
      <form>
        <input type="text" placeholder="Nama Depan" />
        <input type="password" placeholder="Nama Belakang" />
        <input type="number" placeholder="Phone Number" />
        <input type="text" placeholder="Store Name" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </form>
      <hr />
      <p>Belum punya akun?</p> <a href="">Masuk</a>
    </div>
  );
}

export default Register;
