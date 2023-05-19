import News from './News'
import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <>
        <News 
          country={'in'}
          pageSize={9}
          apiKey={'05965c30cda940f4a391569e716b4bed'}
          category={'general'}
          headline={''}
        />
      </>
    )
  }
}

export default Home
