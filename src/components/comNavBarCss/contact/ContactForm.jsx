import React from 'react'
import "./ContactForm.css"

function ContactForm() {
    return (
        <div id='formMainC'>
            <form action="">
                <input type='text' id='nameC' placeholder='Your Name' />
                <input type='email' id='emailC' placeholder='Email' /><br /><br />
                <input type='text' id="subjectC" placeholder='Subject' /> <br /><br />
                <textarea id='messageC' placeholder='Message' rows="5"></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm
