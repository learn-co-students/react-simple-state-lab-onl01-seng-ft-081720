import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        console.log(props.value)

        super()
        this.state = {
            color: props.value
        }
    }

    clickColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render () {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickColor}></div>
        )
    }


    
}

export default Cell