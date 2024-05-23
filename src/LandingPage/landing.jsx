import React from 'react';
import './landing.css'
import BootstrapCarousel from './carousel';
import { faCouch, faTv, faLaptop, faDumbbell, faBicycle } from '@fortawesome/free-solid-svg-icons';
// import {couch} from "../../node_modules/@fortawesome/free-solid-svg-icons/faCouch.js"   
// node_modules\@fortawesome\free-solid-svg-icons\faCouch.js"
import { Link, NavLink } from "react-router-dom"

const Landing = () => {
    return (
        <>
            <div className='crs'>
                <BootstrapCarousel />
            </div>

            <div className='maintextp'>
                <div className='MainText'>
                    <h2 >Welcome To <span className='nameof'>ShareSquare</span></h2>
                </div>


                <div className='mainText2'>
                    <h1> <span className='nameof'>Borrow</span> what you need, <span className='nameof'>lend</span> what you don't</h1>
                </div>
            </div>


            <div className='offer'>
                <div className=''><h2>What we Offer?</h2></div>
                <div className='specialities'>
                    <div className='s1'> <img src="/assets/customer-service_5677951.png" alt="" className='s1logo' /><div >24*7 Customer Support</div><div className='s1text'>We are just one call away</div></div>
                    <div className='s1'><img src="/assets/handshake.png" alt="" className='s1logo' /><div >Trusted Buyers/Sellers</div><div className="s1text"> Ensured safety of your experience.</div></div>

                    <div className='s1'><img src="/assets/accept.png" alt="" className='s1logo' /><div>One click Booking</div><div className="s1text">Time saving bookings.</div> </div>
                </div>
            </div>

            <div className='categories'>
                <div><h2><center className='head1'>Find by Categories </center></h2></div>
                <div className="content1_a2">

                    <NavLink className="underline1" to="/furniture">                    
                    <div id="content1_a2_1">
                      <img src="/assets/sofa1.png" alt="" className='category'/>
                        <center><h4>Furniture</h4></center>
                    </div>
                    </NavLink>
                    
                    <NavLink className="underline1" to="/appliances">
                    <div id="content1_a2_2">
                        <img src="/assets/television1.png" alt="" className='category' />
                        <center><h4>Appliances</h4></center>
                    </div>
                    </NavLink>

                    <NavLink className="underline1" to="/electronic">
                    <div id="content1_a2_3">
                         <img src="/assets/laptop-computer.png" alt="" className='category' />
                        <center><h4>Electronics</h4></center>
                    </div>
                    </NavLink>
                    
                    <NavLink className="underline1" to="/fitness">
                    <div id="content1_a2_4">
                       <img src="/assets/dumbell.png" alt="" className='category' />
                        <center><h4>Fitness</h4></center>
                    </div>
                    </NavLink>

                    <NavLink className="underline1" to="/bicycle">
                    <div id="content1_a2_5">
                        <img src="/assets/bicycle1.png" alt="" className='category' />
                        <center><h4>Bicycle</h4></center>
                    </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Landing;
