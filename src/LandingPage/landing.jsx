import React from 'react';
import './landing.css'
import BootstrapCarousel from './carousel';
import { faCouch, faTv, faLaptop, faDumbbell, faBicycle } from '@fortawesome/free-solid-svg-icons';
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
            <h1> <span  className='nameof'>Borrow</span> what you need, <span  className='nameof'>lend</span> what you don't</h1>
        </div>
        </div>


        <div className='offer'>
            <div className=''><h2>What we Offer?</h2></div>
            <div className='specialities'>
                <div className='s1'> <img src="src\assets\customer-service_5677951.png" alt="" className='s1logo'/><div >24*7 Customer Support</div><div className='s1text'>We are just one call away</div></div>
                <div className='s1'><img src="src\assets\handshake.png" alt="" className='s1logo'/><div >Trusted Buyers/Sellers</div><div  className="s1text"> Ensured safety of your experience.</div></div>
                
                <div className='s1'><img src="src\assets\accept.png" alt="" className='s1logo'/><div>One click Booking</div><div className="s1text">Time saving bookings.</div> </div>
            </div>
        </div>

        <div>

        </div>
        </>
    );
}

export default Landing;
