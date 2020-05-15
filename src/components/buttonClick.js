import React, {Component} from "react"

export default class CustomButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: false
        }
        this.onClickHandle = this.onClickHandle.bind(this)
    }

    onClickHandle(){
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render(){
        const a = [1,2,3,4,5]
        const b = a.map((n, index)=> <li key={index}>{n}</li>)
        console.log('b=', b);
        return (
            <div>
                <button className = "buttonClass" onClick = {this.onClickHandle} >button</button>
                <h2>You clicked "{this.state.isToggleOn?'ON':'OFF'}"</h2>
                <ul> {b}</ul>

            </div>
        )
    }
}