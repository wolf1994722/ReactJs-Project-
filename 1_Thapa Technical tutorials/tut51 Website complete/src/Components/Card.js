import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img src={props.imgURL} className="card-img-top" style={{height: '300px'}} alt="" />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">
            {props.content}
          </p>
          <NavLink to={props.link} className="btn btn-primary button-10">
            {props.linkContent}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Card