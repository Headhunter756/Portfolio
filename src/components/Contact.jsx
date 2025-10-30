import './styles/Contact.css'
import linkedin from '../assets/icons/linkedin.png'
import insta from '../assets/icons/insta.png'

const Contact = () => {
    return (
        <div className="contact">
            <form>
                <h2><u>Write a message:</u></h2>
                <label htmlFor="user_name">Your Name:</label>
                <input type="text" id='user_name' placeholder="Ayush Ghara" />
                <label htmlFor="user_email">Your Email:</label>
                <input type="email" id='user_email' placeholder="example@gmail.com" />
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder='Your message'></textarea>
                <input type="submit" value="Send" />
            </form>
            <div className="social_media">
                <h2>My Social Media Connects:</h2>
                <a href="https://www.linkedin.com/in/ayush-ghara756">
                    <button className="social_links">
                        <img src={linkedin} alt="linkedin" /> LinkedIn
                    </button>
                </a>
                <a href="https://www.instagram.com/ayush_ghara">
                    <button className="social_links">
                        <img src={insta} alt="linkedin" /> Instagram
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Contact
