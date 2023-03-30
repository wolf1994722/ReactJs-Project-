import React from 'react'
import Card from './Card'
import { serviceImg } from '../Data/image'

function Service() {
  return (
    <>

      <div className="my-5">
        <h1 className="text-center">
          Our Services
        </h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">

            <div className="row gy-5">

              {serviceImg.map((item,index) => {
                return (
                  <Card
                    key={index}
                    imgURL={item.imgURL}
                    title={item.title}
                    content={item.content}
                    link={item.link}
                    linkContent={item.linkContent}
                  />
                )
              })}

            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Service