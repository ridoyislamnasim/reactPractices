import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()}
    }
    componentDidMount(){
        setInterval(()=>{
          this.tick()
        }, 1000)
    }
    tick(){
        this.setState({
            date :new Date()
        })
    }
    render(){
        return(
            <h1 className="heading">
                <span className="text">
                    {this.state.date.toLocaleTimeString('bn-BD')}
                </span>
            </h1>
        )
    }
}

export default Clock;