import { useState } from 'react';
import './Contactus.css';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        to: '', // Hardcoded as per your JSON example
        subject: '', // Hardcoded as per your JSON example
        message: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                toast.success("Message sent succesfully");
                setFormData({
                    to: '',
                    subject: 'Test Email',
                    message: '',
                    name: ''
                });
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error('Error:', error);
            toast.warn("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="formclass">
            <div className="space"></div>
            <div className="forms">
                <h1>Contact Us</h1>
                <p>How can we help you..</p>
                <div className="miniform">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name.."
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="to"
                            placeholder="Your email.."
                            value={formData.to}
                            onChange={handleChange}
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message.."
                            style={{ height: '170px' }}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
            <div className="space"></div>
        </div>
    );
};

export default ContactUs;
