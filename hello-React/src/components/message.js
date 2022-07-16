import React from "react";

class Message extends React.Component {

    constructor(){
        super()
        this.state = {
            message: `welcome vishal`
        }
    }

    changeState(){
        this.setState({
            message: 'thank you for subs my channel'
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={ () => this.changeState()}>Subscribe</button>
            </div>
        )
    }
}

export default Message