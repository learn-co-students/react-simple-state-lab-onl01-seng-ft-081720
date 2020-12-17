import React, { Component } from 'react';
export default class Cell extends Component {
  // is a correctly defined and exported React component which renders a <div> with a className of 'cell'
  constructor(props) {
    super()
    this.state = {
      // state.color is initially set to the 'value' prop passed from Matrix
      color: props.value
    }
  }
  // has a state key of 'color'
  // has an event listener that, when clicked, calls this.setState() once (make sure you aren't setting state directly, but instead using the component's 'setState' method)
  handleClick = () => {
    this.setState({
      // has an event listener that, when clicked, sets state's 'color' key to a value of '#333'
      color:'#333'
    })
  }
  render() {
    return (
      // sets the <div>'s inline style attribute to 'style={{backgroundColor: this.state.color}}'
      <div 
        className="cell" 
        style={{backgroundColor: this.state.color}} 
        // has an event listener for clicks on the <div> (don't forget: 'onClick' in React!)
        onClick={this.handleClick} >
      </div>
    )

  }

}