import './App.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className='contact-title'>Contact Page</h1>
            <form className='contact-form' action='mailto:example@example.com' method='POST' encType='text/plain'>
                <label htmlFor="name">Name:</label>
                <input className="contact-input" type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input className="contact-input" type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea className='contact-input' id="message" name="message" rows={4} />

                <button className="contact-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;