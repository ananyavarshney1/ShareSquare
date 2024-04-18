import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faHeart, faGift, faLocationDot, faWallet, faUnlockKeyhole, faFolderOpen, faHeadset, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser, faHeart as farHeart, faFolderOpen as farFolderOpen } from '@fortawesome/free-regular-svg-icons';
import './account.css'
const Account = () => {
    return ( 
        <div className="content">
        <div className="content1">
            <div id="content1_a1">
                <FontAwesomeIcon icon={farUser} id="icon1" />
                <h2>Your Profile</h2>
            </div>
            <div id="content1_a2">
                <FontAwesomeIcon icon={faBox} id="icon1" />
                <h2>Orders</h2>
            </div>
            <div id="content1_a3">
                <FontAwesomeIcon icon={farHeart} id="icon1" />
                <h2>Wishlist</h2>
            </div>
        </div>
        <div className="content2">
            <div id="content2_a1">
                <FontAwesomeIcon icon={faGift} id="icon1" />
                <h2>Gift Cards</h2>
            </div>
            <div id="content2_a2">
                <FontAwesomeIcon icon={faLocationDot} id="icon1" />
                <h2>Your Address</h2>
            </div>
            <div id="content2_a3">
                <FontAwesomeIcon icon={faWallet} id="icon1" />
                <h2>Payment Option</h2>
            </div>
        </div>
        <div className="content3">
            <div id="content3_a1">
                <FontAwesomeIcon icon={faUnlockKeyhole} id="icon1" />
                <h2>Login & Security</h2>
            </div>
            <div id="content3_a2">
                <FontAwesomeIcon icon={farFolderOpen} id="icon1" />
                <h2>Archieved Orders</h2>
            </div>
            <div id="content3_a3">
                <FontAwesomeIcon icon={faHeadset} id="icon1" />
                <h2>Help Center</h2>
            </div>
        </div>
        <div className="content4">
            <div id="content4_a1">
                <FontAwesomeIcon icon={faHandHoldingDollar} id="icon1" />
                <h2>Premium</h2>
            </div>
        </div>
    </div>
     );
}
 
export default Account;