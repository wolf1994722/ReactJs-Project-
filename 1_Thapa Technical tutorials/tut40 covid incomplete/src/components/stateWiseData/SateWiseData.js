import React, {useState, useEffect} from 'react'

function SateWiseData() {
  const getCovidData = async () => {
    fetch('https://api.covid19india.org/data.json', {mode:'cors'}).then((res)=>{
      console.log(res)
    })
  }

  useEffect(() => {
    getCovidData()
  }, [])
  
  return (
    <>
        INDIA COVID 19 DASHBOARD
    </>
  )
}

export default SateWiseData