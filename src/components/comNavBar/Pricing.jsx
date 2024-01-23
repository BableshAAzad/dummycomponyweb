import React from 'react'
import { Link } from 'react-router-dom'
import "./../comNavBarCss/Pricing.css"

function Pricing() {
  return (
    <>
    <div className="pricing-heading">
        <p>Pricing</p>
        <p>Home / Pricing</p>
    </div>
      <section className="pricing">
        <div className="card">
          <div className="card-header">
            Free
          </div>
          <div className="card-body">
            <ul>
              <li><sup>$</sup> <span>0</span> / month</li>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
          </div>
          <div className="card-footer">
            <Link href="">Buy Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header card-header-bg">
            Business
          </div>
          <div className="card-body">
            <ul>
              <li><sup>$</sup> <span>49</span> / month</li>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li style={{ color: "lightgray", textDecoration: "line-through" }}>Massa ultricies mi</li>
            </ul>
          </div>
          <div className="card-footer">
            <Link href="">Buy Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Free
          </div>
          <div className="card-body">
            <ul>
              <li><sup>$</sup> <span>19</span> / month</li>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
          </div>
          <div className="card-footer">
            <Link href="">Buy Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Ultimate
            <div className="advanced">
              Advanced
            </div>
          </div>
          <div className="card-body">
            <ul>
              <li><sup>$</sup> <span>29</span> / month</li>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
          </div>
          <div className="card-footer">
            <Link href="">Buy Now</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
