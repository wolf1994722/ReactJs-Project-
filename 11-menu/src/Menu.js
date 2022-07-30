import React from 'react'

// item
// id: 1,
// title: 'buttermilk pancakes',
// category: 'breakfast',
// price: 15.99,
// img: './images/item-1.jpeg',
// desc:

function Menu({ items }) {
  return (
    <div className="section-center">
      {
        items.map((item) => {
          const { id, title, category, price, img, desc } = item
          return <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        })
      }
    </div>
  )
}

export default Menu