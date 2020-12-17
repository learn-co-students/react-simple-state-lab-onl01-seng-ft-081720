import React, { Component } from 'react';

export default class Cell extends Component {

    constructor() {
        super()
        this.state = { color: '#fff' }
    }

    changeColor = () => {
        const newColor = '#333'
        this.setState({color: newColor})
    }

    render(){
        return (
            <div 
                className='cell' 
                style={{backgroundColor: `${this.state.color}`}}
                onClick={this.changeColor}
            ></div>
        )
    }

}