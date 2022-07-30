import React, { Component } from 'react'

export class Incre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    Increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            console.log("count callback", this.state.count);
        })
    }


    Decrement() {
        if (this.state.count !== 0) {
            this.setState((prevState, props) => ({
                count: prevState.count - 1
            }), () => {
                console.log("Decrmented value is ", this.state.count)
            })
        }
    }

    render() {
        return (
            <div>
                Counter Value = {this.state.count}
                <div>
                    <button style={{ color: "grey" }} onClick={() => this.Increment()}>Increment</button>
                    <button style={{ color: "red" }} onClick={() => this.Decrement()}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Incre