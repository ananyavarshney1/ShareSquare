import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify' // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css' // Import CSS for react-toastify
import './login.css' // Import CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/authenticate',
        {
          email: email,
          password: password,
        }
      )

      console.log(response.data)
      const token = response.data;
      

      if (response.data) {
        localStorage.setItem('token', token) // Save JWT token to local storage
        setError(null) // Clear any previous errors
        toast.success('Login successful! Redirecting to home page...') // Display a success message
        setTimeout(() => {
          navigate('/home') // Redirect to home page after 3 seconds
        }, 3000)
      } else {
        setError('Invalid email or password')
      }
    } catch (error) {
      setError('An error occurred. Please try again later.')
    }
  }

  return (
    <div className='login-container'>
      <div className='login-content'>
        <ToastContainer /> {/* Toast container */}
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className='error-message'>{error}</p>}
          <div>
            <label>Email:</label>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
