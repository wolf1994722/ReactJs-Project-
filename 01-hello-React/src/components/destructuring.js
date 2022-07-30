import React, { Component } from 'react'

class Welcome1 extends Component {
    render() {
        const { name, age } = this.props
        // const {state1,state2} = this.state
        return (
            <div>
                My name is {name} & age is {age}
                
            </div>
        )
    }
}

const Message1 = ({ name, age }) => {
    return (
        <div>My name is {name} & age is {age}</div>
    )
}

export { Welcome1, Message1 }