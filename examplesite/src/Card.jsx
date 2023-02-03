import React from "react";
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className="col-mb-4 col-10 mx-auto">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the  title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
