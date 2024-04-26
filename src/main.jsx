import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Account from './Account/account.jsx'
import SignUp from './login/login.jsx'
import About from './AboutUs/Aboutus.jsx'
import Furniture from './Productpages/Furniture.jsx'

const router= createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children:[
    {path:"", element:<App/>},
    {path:"/home", element:<App/>},
    {path:"/account",element:<Account />},
    {path:"/login",element:<SignUp />},
    {path:"/aboutus",element:< About/>},
    {path:"/furniture",element:< Furniture/>}
    

    
  ]  
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
