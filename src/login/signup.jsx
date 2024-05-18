import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify' // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css' // Import CSS for react-toastify
import './signup.css' // Import CSS file for styling

const SignUp = () => {
  const [userHandle, setUserHandle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        userHandle: userHandle,
        name: name,
        email: email,
        password: password,
      })

      if (response.data) {
        setSuccessMessage(response.data.message)
        setUserHandle('')
        setName('')
        setEmail('')
        setPassword('')
        setError(null)
        toast.success('Sign up successful!!')
        setTimeout(() => {
          navigate('/login')
        }, 3000) // Redirect to login page after 3 seconds
      } else {
        setError(response.data.message)
      }
    } catch (error) {
      setError('An error occurred. Please try again later.')
    }
  }

  return (
    <div className='signup-container'>
      <div className='signup-content'>
        <ToastContainer /> {/* Toast container */}
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          {error && <p className='error-message'>{error}</p>}
          {successMessage && (
            <p className='success-message'>{successMessage}</p>
          )}
          <div>
            <label htmlFor='userHandle'>Userhandle:</label>
            <input
              type='text'
              id='userHandle'
              value={userHandle}
              onChange={(e) => setUserHandle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div >
          <div className='aa'>
          <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
