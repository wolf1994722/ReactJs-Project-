import React, { Component } from 'react'

function Event2() {
    function bgChange() {
        document.querySelector('body').style.background = "#09fa9f"
        document.querySelector('body').style.color = "#555"
    }

    return (
        <span>
            <button style={{color: "green"}} onClick={bgChange}>Change Bg</button>
        </span>
    )
}

class Event1 extends Component {
    bgChange() {
        document.querySelector('body').style.background = "#09aff9"
        document.querySelector('body').style.color = "#fff"
    }

    render() {
        return (
            <span>
                <button style={{color: "blue"}} onClick={this.bgChange}>Change Bg</button>
            </span>
        )
    }
}

export { Event1, Event2 }