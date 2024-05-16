import "./Contactus.css"

const ContactUs = () => {

    return (
            <div className="formclass">
                <div className="space"></div>
            <div className="forms">
            <h1>Contact Us</h1>
            <p>How can we help you..</p>
            <div className="miniform">  
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." />
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write your message.." style={{ height: "170px" }}></textarea>
                    <input type="submit" value="Send Message" />
                </form>
            </div>
        
        </div>
        <div className="space"></div>
            </div>
        
    );
}

export default ContactUs;