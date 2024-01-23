import React from 'react'
import "./../comNavBarCss/Contact.css"
import ContactData from '../comNavBarCss/contact/ContactData'
import ContactForm from '../comNavBarCss/contact/ContactForm'

function Contact() {
  return (
    <div>
      {/* <!-- * location email contact ----------satart----- --> */}

      <div className="contact-heading">
        <p className='contactH'>Contact</p>
        <p>Home / Contact</p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.1239413385!2d77.53147863018438!3d12.994830805644636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df30cb8f5c5%3A0x4fd69ee1b53c32a!2sRajajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1702624180982!5m2!1sen!2sin"
        allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" title='bablesh' className='iframeC'></iframe>

      <section className="MainDetails">
        <div className="mainContainerDiv">
          <ContactData iconC={<i className="fa-solid fa-location-dot"></i>} heading="Location:" para1="A108 Adam Street" para2="New York, NY 535022" />
          <ContactData iconC={<i className="fa-regular fa-envelope"></i>} heading="Email:" para1="info@example.com" para2="contact@example.com" />
          <ContactData iconC={<i className="fa-solid fa-mobile-screen-button"></i>} heading="Call:" para1="+1 5589 55488 51" para2="+1 5589 22475 14" />
        </div>
      </section>
      <ContactForm/>
    </div>
  )
}

export default Contact
