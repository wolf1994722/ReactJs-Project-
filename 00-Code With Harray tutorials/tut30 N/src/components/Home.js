import News from './News'
import React from 'react'

function Home(props) {
  return (
    <>
      <News
        country={'in'}
        pageSize={9}
        // apiKey={'05965c30cda940f4a391569e716b4bed'} yadav11adu@gmail.com
        apiKey={'f438b3fbe49a490cb0cfb57d5c7a648d'}
        category={'general'}
        headline={''}
        setProgress={props.setProgress}
      />
    </>
  )
}

export default Home