import JobSearch from "components/Forms/JobSearch/JobSearch";
import React from "react";
import "./Home.scss";

function CandidateHome() {
  return (
    <div
      className="bg-overlay-dark-v1 bg-img-hero-center"
      style={{ backgroundImage: "url(/assets/img/hero.jpg)" }}
    >
      <div
        className="container space-2 space-3--lg position-relative z-index-2"
        style={{ paddingBottom: "16rem" }}
      >
        <div className="w-md-80 mx-md-auto text-center mt-4 mb-8">
          <div className="text-white letter-spacing-0_06 text-uppercase opacity-lg mb-1">
            Just explore then apply
          </div>
          <h1 className="text-white mb-0">
            Find your dream job in a quick way
          </h1>
        </div>
        <JobSearch />
      </div>
    </div>
  );
}

export default CandidateHome;
