import React from 'react'
import "./ContactData.css"

function ContactData({ iconC, heading, para1, para2 }) {
    return (
        <div className="location">
            <div className='infoIcon'>
                {iconC}
            </div>
            <div className='infoContaint'>
                <h2>{heading}</h2>
                <p>{para1}<br />{para2}</p>
            </div>
        </div>
    )
}

export default ContactData
