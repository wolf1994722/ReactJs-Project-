import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "yo Bruh! i can't do it bro 🤪"
        }

        this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage() {
        this.setState({
            message: '55 - 56 , winner Nightmare'
        })
    }

    // changeMessage = ()=>{
    //     this.setState({
    //         message: '55 - 56 , winner Nightmare'
    //     })
    // }

    render() {
        return (
            <div>
                {this.state.message}
                {/*
                   1. <button onClick={this.changeMessage.bind(this)}>Change Message</button>
                   2. <button onClick={()=> this.changeMessage()}>Change Message</button>
                   3. <button onClick={this.changeMessage}>Change Message</button>
                */}
                <button onClick={this.changeMessage}>Change Message</button>
                <hr />
            </div>
        )
    }
}

export default EventBind