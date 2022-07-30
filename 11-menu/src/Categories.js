import React from 'react'

function Categories({ filterItems ,allCategories}) {
  return (
    <div className="btn-container">
      {
        allCategories.map((categorie,index) => <button key={index} className="filter-btn" onClick={() => filterItems(`${categorie}`)}>{categorie}</button>)
      }
    </div>
  )
}

export default Categories