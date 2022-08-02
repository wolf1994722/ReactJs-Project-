import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context'

function Home() {
  // const data = useContext(AppContext)
  const { openSideBar ,openModal } = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={()=>openModal()}>show modal</button>
    </main>
  )
}

export default Home