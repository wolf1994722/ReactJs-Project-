import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Card = (props) => {
  let { imgUrl, title, description, price } = props
  const dispatch = useDispatch()
  const { incMoney, decMoney } = bindActionCreators(actionCreators, dispatch)

  return (
    <>
      <div className="card p-2 m-4" style={{ width: "18rem" }}>
        <img src={imgUrl} style={{ height: '200px', objectFit: 'cover' }} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text">
            {description}
          </p>
          <blockquote className="blockquote d-flex flex-row-reverse">
            <footer className="blockquote-footer" style={{ fontSize: '16px' }}>
              Cost <cite title="Source Title">${price}</cite>
            </footer>
          </blockquote>

          <p className='d-flex align-items-center justify-content-center mb-0'>
            <button className="btn btn-dark btn-sm" onClick={() => decMoney(price)}> - </button>
            <span className="mx-2">
              Add Item to 🛒
            </span>
            <button className="btn btn-dark btn-sm" onClick={() => incMoney(price)}> + </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default Card