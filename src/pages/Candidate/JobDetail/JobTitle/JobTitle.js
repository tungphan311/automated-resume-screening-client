import React from 'react';
import './JobTitle.css';

const JobTitle = (props) => {
return (
<div className="JobTitle">
    <h1>Front-end Development Fresher (ReactJS)</h1>
    <div>
        <div className="text">Zalo</div>
        <div className="text">Thành phố Hồ Chí Minh</div>
    </div>
    <div className="box">
        <a>Apply Now</a>
        <div>
            <button className="icon">
                <i className="far fa-heart"></i>
            </button>
        </div>

    </div>
</div>
)
}

export default JobTitle;