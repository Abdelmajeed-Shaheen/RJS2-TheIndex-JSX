import React, { Component } from "react";

const Authors = props => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={props.image}
            alt={props.first_name + " " + props.last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{props.first_name + " " + props.last_name}1</span>
          </h5>
          <small className="card-text">{props.numberOfBooks} books</small>
        </div>
      </div>
    </div>
  );
};

export default Authors;
