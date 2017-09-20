import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date() };
    }
    render(){
        return (
            <div>
                <h1>hello word!</h1>
                <h2>it is { this.props.date.toLocaleTimeString() }...</h2>
            </div>
        )
    }
}
export default Clock;