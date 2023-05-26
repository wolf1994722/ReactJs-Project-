import React from 'react'
import { Card } from '../components/extract'

function Home() {
  const datas = [
    {
      imgUrl: "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOONIKE-MEN-S-NANS-6707150B35922/1563352607196_0..jpg?imwidth=320&impolicy=hq",
      title: "Buy Nike Shoes 🔥",
      description: "Best shoes in market for running & general purpose",
      price: 50
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      title: "Buy Nike Shoes 🔥",
      description: "Best shoes in market for running & general purpose",
      price: 250
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Buy Nike Shoes 🔥",
      description: "Best shoes in market for running & general purpose",
      price: 250
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
      title: "Buy Nike Shoes 🔥",
      description: "Best shoes in market for running & general purpose",
      price: 150
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80",
      title: "Buy Nike Shoes 🔥",
      description: "Best shoes in market for running & general purpose",
      price: 150
    },
  ]
  return (
    <>
      <div className="container my-4 d-flex flex-wrap">
        {datas.map((item, idx) => {
          return (
            <Card
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          )
        })}
      </div>

    </>
  )
}

export default Home