import JobSearch from "components/Forms/JobSearch/JobSearch";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.scss";

function CandidateHome() {
  const { domains } = useSelector((state) => state.jobDomain);

  return (
    <>
      {/* Job Search Section */}
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

      {/* Popular job section */}
      <Section title="Vị trí phổ biến" url="#">
        <div className="row">
          {domains.map(({ id, name }) => (
            <Role key={id} {...{ id, name }} />
          ))}
        </div>
      </Section>
    </>
  );
}

export default CandidateHome;

const Section = ({ title, children, classNames }) => (
  <div className={classNames}>
    <div className="container space-2 space-3-top--lg">
      {/* Title section */}
      <div className="row align-items-end" style={{ marginBottom: "30px" }}>
        <div className="col-sm-8">
          <h2 className="text-lh-xs">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  </div>
);

const Role = ({ id, name }) => (
  <div className="col-sm-6 col-lg-3 mb-3">
    <Link
      className="card lift link-dark shadow-sm border-0"
      to={`/find-jobs?job-domain=${id}`}
    >
      <div className="card-body d-flex justify-content-between align-items-center px-4 domain__card">
        <span>{name}</span>
        <i className="fas fa-chevron-right opacity ml-2" />
      </div>
    </Link>
  </div>
);
