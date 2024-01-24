import React from 'react';
import "./BloggingCard.css"

function BloggingCard({ bgImgC, username, date, comment, heading, para }) {
    return (
        <section className='mainCardB'>
            <div className='imgCardB' style={{ backgroundImage: `url(${bgImgC})` }}></div>
            <div className='containtCardB'>
                <h1>{heading}</h1>
                <p className='userDetailsB'>
                    <i class="fa-regular fa-user"></i> {username}
                    <i class="fa-regular fa-clock"></i> {date}
                    <i class="fa-regular fa-comment-dots"></i> {comment}
                </p>
                <p>{para}</p>
                <button className='cardBtnB'>Read More</button>
            </div>
        </section>
    )
}

export default BloggingCard
