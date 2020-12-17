import React, { Component } from 'react';

class Cell extends React.Component{
    constructor(props){
        super()
        this.state = {
            color: props.value
            }}

        clickChange = (e) => {
        this.setState({
            color: '#333'
        })
    }

        render() {
           return( <div onClick={this.clickChange} 
           style={{backgroundColor: this.state.color}} 
           className='cell'></div>
           )
        }
    }

export default Cell