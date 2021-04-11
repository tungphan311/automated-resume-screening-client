import React from 'react';
import './ComSidebar.css';

const ComSidebar = (props) => {
    return (
        <div className="ComSidebar">
            <div className="jobsearch-CompanyAvatar">
                <div  className="jobsearch-CompanyAvatar-card">
                    <h2>Company Info</h2>
                    <div className="body">
                        <div className="jobsearch-CompanyAvatar-form">
                            <div>
                                <div>
                                    <div className="jobsearch-CompanyAvatar-buttonContainer">
                                        <div className="jobsearch-CompanyAvatar-button">
                                            <button className="icl-Button" type="button">Follow</button>
                                        </div>
                                        <div className="jobsearch-CompanyAvatar-cta">Get job updates from Zalo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="jobsearch-CompanyAvatar" style={{width: '250px'}}>
                <div  className="jobsearch-CompanyAvatar-card" style={{width: '250px'}}>
                    <h2>Company Info</h2>
                    <div className="body">
                        <div className="jobsearch-CompanyAvatar-form">
                            <div>
                                <div>
                                    <div className="jobsearch-CompanyAvatar-buttonContainer">
                                       
                                        <div className="jobsearch-CompanyAvatar-cta">Thousands of employers search for candidates on Indeed</div>
                                        <div className="jobsearch-CompanyAvatar-button">
                                            <button className="icl-Button" type="button">Upload your resume</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ComSidebar;