import React from 'react'

const About = () => {
  return (
    <>
      <div className="container my-5" id="abouttextstyle">
        <div className="row">
          <div className="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
            <small className="text-uppercase" style={{ color: "#0dcaf0" }} />
            <h1 className="h2 mb-4" style={{ fontWeight: 600 }}>
              Our <span style={{ color: "#0dcaf0" }}>mission</span>
            </h1>
            <p className="text-secondary" style={{ lineHeight: 2 }}>
              Catering to the individualistic needs of each student.
              <br />
              High quality learning experience based on a broad and balanced
              curriculum. To empower students utilise their full potential
              spiritually, intellectually, physically, socially and morally.
            </p>
          </div>
          <div className="col-md-6 p-0 text-center order-1 order-sm-2">
            <img
              src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="w-100"
              alt=""
            />
          </div>
          <div className="col-md-6 p-0 text-center">
            <img
              src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="w-100"
              alt=""
            />
          </div>
          <div className="col-md-6 p-4 p-sm-5">
            <small className="text-uppercase" style={{ color: "#0dcaf0" }} />
            <h1 className="h2 mb-4" style={{ fontWeight: 600 }}>
              About<span style={{ color: "#0dcaf0" }}> us</span>
            </h1>
            <p className="text-secondary" style={{ lineHeight: 2 }}>
              Maria Auxilium Girls’ Hr. Sec. School is situated at 15G Damalwar
              Street, Kancheepuram. It is set in a conducive atmosphere suitable for
              the growth of young minds. At Maria Auxilium School every child is given
              individual attention to ensure their holistic development. At MAS , all
              the needs of the child are met with understanding and utmost care, be it
              physical, emotional, intellectual or spiritual.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default About