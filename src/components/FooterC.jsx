import React from 'react'
import { Link } from 'react-router-dom';
import "./FooterC.css"

function FooterC() {
    return (
        <>
            <footer>
                <div className="footer-company">
                    <h2>COMPANY</h2>
                    <p>
                        A108 Adam Street <br />
                        New York, NY 535022 <br />
                        United States
                    </p>
                    <p>
                        Phone: +1 5589 55488 55 <br />
                        Email: info@example.com
                    </p>
                </div>
                <div className="footer-useful-links">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-our-services">
                    <h3>Our Sevices</h3>
                    <ul>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Product Managment</li>
                        <li>Marketing</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
                <div className="footer-form">
                    <h3>Join Our Newsletter</h3>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <div className="subscribe">
                        <input type="text" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </footer>
            <section className="copyright">
                <div className="copyright-content">
                    <p> &copy; Copyright Company. All Rights Reserved</p>
                    <p>Designed by <span style={{ color: "green" }}>BootstrapMade</span></p>
                </div>
                <div className="copyright-icons">
                    <ul>
                        <li>
                            <Link to="/">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default FooterC
