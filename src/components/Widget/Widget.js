import React from "react";

function Widget({ title, value, icon }) {
  return (
    <div>
      <div className="card card-stats card-round" style={{ marginBottom: 10 }}>
        <div className="card-body">
          <div className="row">
            <div
              className="col-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="icon-big text-center">{icon}</div>
            </div>
            <div className="col-8 col-stats">
              <div className="numbers">
                <p className="card-category">{title}</p>
                <h4 className="card-title" style={{ marginBottom: 0 }}>
                  {value}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
