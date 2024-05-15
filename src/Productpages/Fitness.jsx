import "./Furniture.css"

const Fitness = () => {
    return ( 
        <div>
        <h1 className="heading">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSNkvTUJmsc6tYqcXD2d9NjSGDkM5uimzk5T71Ca3NF7wESyXs" className="phone" width="60px" height="50px" alt="Phone Icon" />
          Fitness on rent
        </h1>
        <h4 className="text">Checkout our huge collection of fitness equipment on rent</h4>
        <div className="shop-section">
          <div>
            <div className="box1 box">
              <div className="box-content">
                <h5>Arrow Bicycle</h5>
                <div className="box-img" style={{ backgroundImage: "url('https://i5.walmartimages.com/asr/e5c2b71c-819f-4044-9b18-167d8d7ee1ee_1.17d97501186d397fdfa42479774bb290.jpeg ')" }}></div>
                <div>
                  <div className="p"><p>$990/mo</p></div>
                  <div className="p1">
                    <p><img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" alt="Fast Delivery" /> 4-6 days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box2 box">
              <div className="box-content">
                <h5>Motorized Treadmill</h5>
                <div className="box-img" style={{ backgroundImage: "url('https://p.rmjo.in/productSquare/x493rtif-500x500.jpg')" }}></div>
                <div>
                  <div className="p"><p>$1419/mo</p></div>
                  <div className="p1">
                    <p><img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" alt="Fast Delivery" /> 4-6 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="box3 box">
              <div className="box-content">
                <h5>Smart Magnetic Exercise Bike</h5>
                <div className="box-img" style={{ backgroundImage: "url('https://p.rmjo.in/productSquare/k515c57w-500x500.jpg')" }}></div>
                <div>
                  <div className="p"><p>$369/mo</p></div>
                  <div className="p1">
                    <p><img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" alt="Fast Delivery" /> 4-6 days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box4 box">
              <div className="box-content">
                <h5>Crazy Fit Massager VP-500</h5>
                <div className="box-img" style={{ backgroundImage: "url('https://p.rmjo.in/productSquare/68cb0ce2-500x500.jpg')" }}></div>
                <div>
                  <div className="p"><p>$619/mo</p></div>
                  <div className="p1">
                    <p><img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" alt="Fast Delivery" /> 4-6 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="box5 box">
              <div className="box-content">
                <h5>Leg Massager IF-868</h5>
                <div className="box-img" style={{ backgroundImage: "url('https://p.rmjo.in/productSquare/niqfc8xs-500x500.jpg')" }}></div>
                <div>
                  <div className="p"><p>$799/mo</p></div>
                  <div className="p1">
                    <p><img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" alt="Fast Delivery" /> 4-6 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Fitness;