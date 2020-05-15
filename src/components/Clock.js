import React, { Component } from "react";

export default class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            // preDate: {}
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount(){
        this.timerID = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        // this.setState((state)=>({
        //     date: new Date(),
        // }));
        
    }
    render() {
        // let preDate = '';
        return (
            <div>
                {/* <h1>It is {this.state.date.toLocaleDateString()} !</h1>
                <h1>It is {this.state.date.getDate()} !</h1> */}
                {/* {preDate = this.state.date.toLocaleTimeString()} */}
                <h1>{this.state.date.toLocaleTimeString()} </h1>
                {/* <h1>{preDate} </h1> */}
            </div>
        )
    }
}