import React from 'react';
import "./HomeCardsC.css";

function HomeCardsC({ icon, heading, para }) {
  return (
    <>
      <div className="card" >
        <div className="card-content">
          {icon}
          <h2>{heading}</h2>
          <p>{para}</p>
        </div>
      </div>
    </>
  )
}

export default HomeCardsC
