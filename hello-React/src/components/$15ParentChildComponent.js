import React, { Component } from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetPC}>without Parameter</button>
            <button onClick={() => props.greetPC('vishal')}>with Parameter</button>
        </div>
    )
}

class ParentChildComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName = ""){
        if(typeof childName == 'object'){
            alert(`Welcome ${this.state.parentName}`)
        }else{
            alert(`Welcome ${this.state.parentName} from ${childName}`)
        }
    }
    render() {
        return (
            <div>
                <ChildComponent greetPC={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentChildComponent