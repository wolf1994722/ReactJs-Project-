import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidedBarOpen, setIsSidedBarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSideBar = () => {
    setIsSidedBarOpen(true)
  }
  const closeSideBar = () => {
    setIsSidedBarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return <AppContext.Provider value={{
    isSidedBarOpen,isModalOpen,openSideBar,closeSideBar,openModal,closeModal
  }}>
    {children}
  </AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }