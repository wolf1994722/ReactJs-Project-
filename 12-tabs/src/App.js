import React, { useState, useEffect } from "react";
import "./App.css";
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const FetchJobs = async () => {
    const response = await fetch(url)
    const newjobs = await response.json()
    setJobs(newjobs)
    setLoading(false)
  }

  useEffect(() => {
    FetchJobs()
    return () => { }
  }, [])

  if (loading) {
    return <section className="section loading">
      <h1>Loading....</h1>
    </section>
  }

  const { company, dates, duties, title } = jobs[value]

  return <section className="section">
    <div className="title">
      <h2>expierence</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <div className="btn-container">
        {
          jobs.map((job, index) => {
            return <button key={job.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
              {job.company}
            </button>
          })
        }
      </div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {
          duties.map((dutie, index) => {
            return <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{dutie}</p>
            </div>
          })
        }
      </article>
    </div>

  </section>



}

export default App;

// className={`job-btn ${index === value && 'active-btn'}` 
// use this for hover effect

//  key={job.id} onClick={() => setValue(index)}
// use this for changing value