import React from 'react'

function Home() {
  return (
    <>
      <div className="container my-4">
        <div className="card p-3" style={{ width: "18rem" }}>
          <img src="https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOONIKE-MEN-S-NANS-6707150B35922/1563352607196_0..jpg?imwidth=320&impolicy=hq" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">
              Buy Nike Shoes 🔥
            </h5>
            <p className="card-text">
              Best shoes in market for running & general purpose
            </p>
            <blockquote className="blockquote d-flex flex-row-reverse">
              <footer className="blockquote-footer" style={{ fontSize: '16px' }}>
                Cost <cite title="Source Title">$50</cite>
              </footer>
            </blockquote>

            <p className='d-flex align-items-center justify-content-center mb-0'>
              <button className="btn btn-dark btn-sm"> - </button>
              <span className="mx-2">
                Add Item to 🛒
              </span>
              <button className="btn btn-dark btn-sm">+</button>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home