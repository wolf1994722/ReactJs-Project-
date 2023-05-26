import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Notes, AddNote } from '../components/extract'

function Home() {
  let navigate = useNavigate()

  useEffect(() => {
    const checkAuthToken = () => {
      return localStorage.getItem('token') !== null && localStorage.getItem('token').length !== 0
    }
    if (!checkAuthToken()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <AddNote />
      <Notes />
    </>
  )
}

export default Home