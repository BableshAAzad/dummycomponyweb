import React from 'react'
import { Link } from 'react-router-dom';
import "./../comNavBarCss/Home.css"

function Home() {
  return (
    <div>
      <section className="banner" id="gotohome">
        <div className="banner-content">
          <h1>Lorem Ipsum Dolor</h1>
          <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <div className="banner-btn">
            <Link to="/">read more</Link>
          </div>
        </div>
      </section>
      {/* <!-- Provident Starts --> */}
      <section className="provident">
        <div className="provident-heading">
          <h1>EUM IPSAM LABORUM DELENITI VELITENA</h1>
          <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h2>
        </div>
        <div className="provident-text">
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <ul>
            <li><i className="fa fa-check" aria-hidden="true"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
            <li><i className="fa fa-check" aria-hidden="true"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
            <li><i className="fa fa-check" aria-hidden="true"></i>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <span style={{ marginLeft: "30px" }}>reprehenderit in</span> </li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
      {/* <!-- Provident Ends --> */}
      {/* <!-- Cards Starts --> */}
      <section className="cards">
        <div className="card" >
          <div className="card-content">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
            <h2>Lorem Ipsum</h2>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
            <h2>Lorem Ipsum</h2>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <i className="fa fa-tachometer" aria-hidden="true"></i>
            <h2>Lorem Ipsum</h2>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
            <h2>Lorem Ipsum</h2>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
            <h2>Lorem Ipsum</h2>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <i className="fa fa-anchor" aria-hidden="true"></i>
            <h2>Lorem Ipsum</h2>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
      </section>
      {/* <!-- Cards Ends --> */}
      {/* <!-- ^ Footer Card start --> */}
    <section className="fcards">
        <div className="fcard pic1">
            <section className="fcard_content">
                <h3>Hello</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
        <div className="fcard pic2">
            <section className="fcard_content">
                <h3>Hello</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
        <div className="fcard pic3">
            <section className="fcard_content">
                <h3>Hello</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
        <div className="fcard pic4">
            <section className="fcard_content">
                <h3>Hello</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
        <div className="fcard pic5">
            <section className="fcard_content">
                <h3>Hello</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
        <div className="fcard pic6">
            <section className="fcard_content">
                <h3>Hello</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
        <div className="fcard pic7">
            <section className="fcard_content">
                <h3>Hello</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
        <div className="fcard pic8">
            <section className="fcard_content">
                <h3>Hello</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </div>
    </section>
    {/* <!-- ^ Footer Card end --> */}
      {/* <!-- Clients Starts --> */}
      <section className="clients">
        <h1>Clients</h1>
        <hr />
        <div className="image">
          <img src="https://bootstrapmade.com/demo/templates/Company/assets/img/clients/client-1.png" alt="" />
        </div>
        <div className="image" style={{ borderRight: "none", borderLeft: "none" }}>
          <img src="https://bootstrapmade.com/demo/templates/Company/assets/img/clients/client-2.png" alt="" />
        </div>
        <div className="image" style={{ borderRight: "none" }}>
          <img src="https://bootstrapmade.com/demo/templates/Company/assets/img/clients/client-3.png" alt="" />
        </div>
        <div className="image">
          <img src="https://bootstrapmade.com/demo/templates/Company/assets/img/clients/client-4.png" alt="" />
        </div>
        <div className="image" style={{ borderTop: "none" }}>
          <img src="https://bootstrapmade.com/demo/templates/Company/assets/img/clients/client-5.png" alt="" />
        </div>
        <div className="image" style={{ borderTop: "none", borderLeft : "none", borderRight: "none" }}>
          <img src="https://bootstrapmade.com/demo/templates/Company/assets/img/clients/client-6.png" alt="" />
        </div>
        <div className="image" style={{ borderTop: "none",borderRight: "none" }}>
          <img src="https://bootstrapmade.com/demo/templates/Company/assets/img/clients/client-7.png" alt="" />
        </div>
        <div className="image" style={{ borderTop: "none" }}>
          <img src="https://bootstrapmade.com/demo/templates/Company/assets/img/clients/client-8.png" alt="" />
        </div>
      </section>

      {/* <!-- Clients Ends --> */}
    </div>
  )
}

export default Home
