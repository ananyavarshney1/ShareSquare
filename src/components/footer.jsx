import React from "react";
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer1">
          <div id="footer1_a1">
            <h2>Share Square</h2>
            <ul>
              <li><a href="#">Culture</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Landlord</a></li>
            </ul>
          </div>
          <div id="footer1_a2">
            <h2>Information</h2>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support Home</a></li>
              <li><a href="#">Document required</a></li>
              <li><a href="#">Annual returns</a></li>
            </ul>
          </div>
          <div id="footer1_a3">
            <h2>Policies</h2>
            <ul>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Cancellation & Return</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Rental Terms & Conditions</a></li>
            </ul>
          </div>
          <div id="footer1_a4">
            <h3>NEED HELP ?</h3>
            <h5>Download app</h5>
            <img src="/assets/gp.jpg" alt="play" height="25%" width="100%" />
            <img src="/assets/ap.jpg" alt="apple" height="25%" width="100%" />
          </div>
        </div>

        <div className="footer2">
          <div id="footer2_a1">
            <i className="fa-regular fa-copyright"></i>
            <h6>indianprivate.Pvt.Ltd</h6>
          </div>
          <div id="footer2_a2">
            <a href="https://in.linkedin.com/"><img src="src\assets\5296501_linkedin_network_linkedin logo_icon.png" alt="" className="linkedin"/></a>
            <a href="https://twitter.com"><img src="src\assets\5296516_tweet_twitter_twitter logo_icon.png" alt="" className="twi"/></a>
            <a href="https://www.youtube.com/"><img src="src\assets\317714_video_youtube_icon.png" alt="" className="yt"/></a>
            <a href="https://www.instagram.com/"><img src="src\assets\1298747_instagram_brand_logo_social media_icon.png" alt="" className="inst"/></a>
          </div>
          <div id="footer2_a3">
            {/* Additional content for footer2_a3 */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
