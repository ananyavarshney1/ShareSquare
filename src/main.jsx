import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Account from './Account/account.jsx'
import SignUp from './login/login.jsx'
import About from './AboutUs/Aboutus.jsx'
import FurnitureList from './Productpages/FurnitureList.jsx'
import ApplianceList from './Productpages/ApplianceList.jsx'

import BicycleList from './Productpages/BicycleList.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'





import ElectronicList from './Productpages/EletronicList.jsx'
import FittnessList from './Productpages/FitnessList.jsx'


const router= createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children:[
    {path:"", element:<App/>},
    {path:"/home", element:<App/>}, 
    {path:"/aboutus",element:< About/>},
    {path:"/contactus", element:<ContactUs/>},
    {path:"/property",element:<SellingPage/>},

    {path:"/account",element:<Account />},
    {path:"/login",element:<SignUp />},

    {path:"/furniture",element:< FurnitureList/>},
    {path:"/appliances",element:<ApplianceList/>},
    {path:"/electronic",element:<ElectronicList/>},
    {path:"/fitness" ,element:<FittnessList/>},
    {path:"/bicycle",element:<BicycleList/>}
    
  ]  
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
