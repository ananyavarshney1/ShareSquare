import "./Furniture.css"

const Appliances = () => {

    return ( 
        <div>
      <h1 className="heading">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRRzpgQ3sigSCOxcvSqbom6YPrJQ2A82mx5TUmI4gpNUzVWUkHR" width="60px" height="70px"/>
        Appliances on rent
      </h1>
      <h4 className="text">Checkout our huge collection of appliance on rent</h4>
      <div className="shop-section">
        <div>
          <div className="box1 box">
            <div className="box-content">
              <h5>Semi Automatic Washing Machine</h5>
              <div 
                className="box-img" 
                style={{backgroundImage: 'url(https://p.rmjo.in/productSquare/z227w1xz-500x500.jpg)'}}
              ></div>
              <div>
                <div className="p"><p>$469/mo</p></div>
                <div className="p1">
                  <p>
                    <img 
                      src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" 
                      alt="Fast Delivery"
                    /> 
                    3-5 days
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box2 box">
            <div className="box-content">
              <h5>Single Door Fridge (170 Litre)</h5>
              <div 
                className="box-img" 
                style={{backgroundImage: 'url(https://p.rmjo.in/productSquare/ue88wnov-500x500.jpg)'}}
              ></div>
              <div>
                <div className="p"><p>$659/mo</p></div>
                <div className="p1">
                  <p>
                    <img 
                      src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" 
                      alt="Fast Delivery"
                    /> 
                    3-5 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="box3 box">
            <div className="box-content">
              <h5>Air Conditioner 1 Ton</h5>
              <div 
                className="box-img" 
                style={{backgroundImage: 'url(https://p.rmjo.in/productSquare/l6xann5r-500x500.jpg)'}}
              ></div>
              <div>
                <div className="p"><p>$1859/mo</p></div>
                <div className="p1">
                  <p>
                    <img 
                      src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" 
                      alt="Fast Delivery"
                    /> 
                    3-5 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="box4 box">
            <div className="box-content">
              <h5>Induction Cooktop</h5>
              <div 
                className="box-img" 
                style={{backgroundImage: 'url(https://p.rmjo.in/productSquare/xev0b5yi-500x500.jpg)'}}
              ></div>
              <div>
                <div className="p"><p>$149/mo</p></div>
                <div className="p1">
                  <p>
                    <img 
                      src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" 
                      alt="Fast Delivery"
                    /> 
                    3-5 days
                  </p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  
     );
}
 
export default Appliances;