import React from 'react'

function Home() {
  return (
    <>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img 
            src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png" 
              alt=""
            />
        </div>
        <div className="text-wrapper item">
          <span>
            I-Phone
          </span>
          <span>
            Price: $1000.00
          </span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </>
  )
}

export default Home