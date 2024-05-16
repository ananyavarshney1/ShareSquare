import "./Aboutus.css"

import photo from "../assets/icon-login-12.jpg"

const About = () => {

    return ( 
        <div className="about_us">
      <div className="space"></div>
      <div className="container2">
        <h1><b>SHARE SQUARE</b></h1>
        <p>Online market place for renting and buying things.</p>
        <p>We understand that finding the right rental property can be a daunting task. That's why we're here to
          help. Our team of experts has years of experience in the rental industry and can guide you through the
          entire process, from finding the right property to signing the lease agreement.</p>
        <p>At our company, we believe in providing exceptional customer service. We are committed to ensuring that
          our clients have a hassle-free rental experience. Our team is always available to answer any questions
          you may have and to provide you with the support you need.</p>
      </div>
      <h2 style={{ textAlign: "center" }}><b>Our Team</b></h2>
      <div className="rows">
        <div className="columns" id="container1">
          <div className="photo"><img src={photo} /></div>
          <h2>Ananya</h2>
          <p className="title">Member</p>
          
        </div>
        <div className="columns" id="container1">
        <div className="photo"><img src={photo} /></div>
          <h2>Aditya</h2>
          <p className="title">Member</p>
        </div>

        <div className="columns" id="container1">
        <div className="photo"><img src={photo} /></div>
          <h2>Tanishq</h2>
          <p className="title">Member</p>
        </div>

        <div className="columns" id="container1">
        <div className="photo"><img src={photo} /></div>
          <h2>Yatin</h2>
          <p className="title">Member</p>
        </div>

        <div className="columns" id="container1">
        <div className="photo"><img src={photo} /></div>
          <h2>Tanishk</h2>
          <p className="title">Member</p>
        </div>

        <div className="columns" id="container1">
        <div className="photo"><img src={photo} /></div>
          <h2>Hrushikesh</h2>
          <p className="title">Member</p>
        </div>

        <div className="columns" id="container1">
        <div className="photo"><img src={photo} /></div>
          <h2>Jagdish</h2>
          <p className="title">Member</p>
        </div>

        <div className="columns" id="container1">
        <div className="photo"><img src={photo} /></div>
          <h2>Abhay</h2>
          <p className="title">Member</p>
        </div>

      </div>
    </div>





     );
}
 
export default About; 