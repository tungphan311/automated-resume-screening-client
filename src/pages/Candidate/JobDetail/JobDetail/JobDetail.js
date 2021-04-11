import React from 'react';
import './JobDetail.css';

const JobDetail = (props) => {
    return (
            <div className="JobDetail">
                <div>
                <p>Develop Zalo for Work's features</p>
                <div><h2 class="jobSectionHeader"><b>What you will do</b></h2>
                <ul><li>Join a team to learn and research how to develop new features for Zalo for work - a web application in ReactJS;</li>
                <li>Continuously grow by participating in valuable training sessions from experienced mentors.</li>
                </ul><h2 class="jobSectionHeader"><b>What you will need</b></h2>
                <ul><li>3rd/4th year student or fresh graduates in Computer Science, Engineering or related field;</li>
                <li>Bold passion in programming with ReactJS and having knowledge of Javascript Core;</li>
                <li>Understanding of data structures and algorithms;</li>
                <li>A team player who can work both as individual and as a team;</li>
                <li>Having a strong sense of ownership, being open-minded and eager to learn.</li></ul></div>
                </div>
                
                <div class="jobsearch-JobMetadataFooter">
                    <div class="icl-u-textColor--success">Zalo</div>
                    <div>30+ days ago</div>
                    <div id="originalJobLinkContainer" class="icl-u-lg-inline icl-us-xs-hide">
                        <a>original job</a>
                    </div>
                    <div>
                        <div>
                            <div>
                                <button class="mosaic-reportcontent-button desktop" type="button">
                                <i class="fas fa-flag"></i>
                                Report job
                                </button>
                            </div>
                        <div class="mosaic-reportcontent-content"></div></div></div></div>
            </div>
    )
}

export default JobDetail;