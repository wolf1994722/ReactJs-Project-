import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeSection(props) {
  return (
    <>

      <div className='d-flex align-items-center justify-content-center'
        style={{ height: '80vh' }}>

        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

              <div className="row">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.title}
                    <strong className='brand-name'>
                      YadavBoys
                    </strong>
                  </h1>

                  <p className="my-3 fs-5">
                    We are the team of talented developer making websites
                  </p>
                  <div className="mt-3">
                    <NavLink to={props.url} className="btn btn-outline-primary btn-custom">
                      {props.page}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgSrc} className='img-fluid animated' alt="" />
                </div>

              </div>


            </div>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default HomeSection