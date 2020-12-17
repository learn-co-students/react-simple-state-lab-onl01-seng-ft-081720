import React, { Component } from 'react';
import Cell from './Cell.js'
export default class Matrix extends Component {
  
  genRow = (vals) => {
    //return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    return vals.map(val => <Cell value={val} />)
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    // uses a default 'values' prop of an array with 10 items
    // each sub-array of the default 'values' prop is an array
    // each sub-array of the default values prop is filled with 10 hex color string equal to: '#F00'
    const defRow = ['#F00', '#F00', '#F00','#F00', '#F00', '#F00','#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
      
    
  })()
}