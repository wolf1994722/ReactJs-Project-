import React, { Component } from "react";

export default class Welcome extends Component {
    render() {
        return (
            <div>
                this is inovation by {this.props.name} a.k.a {this.props.heroName}
                <span>{this.props.children}</span>
                <hr />
            </div>
        )
    }
}

// export default Welcome