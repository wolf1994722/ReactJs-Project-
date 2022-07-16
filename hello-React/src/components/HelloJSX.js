import React from "react";

class HelloJsx extends React.Component{
    render(){
        return(
            React.createElement('div',{id : 'first',className: 'dummyClass'},
            React.createElement('h3',null,'This is using class component in without JSX'))
        )
    }
}

const Hellojsx = ()=>{
    return(
        React.createElement('div',{id : 'second',className: 'dummyClass anotherOne'},
        React.createElement('p',null,'This is using function component in without JSX'),
        React.createElement('hr',null,null),)
    )
}

export {HelloJsx,Hellojsx}