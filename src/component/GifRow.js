import React, { Component } from 'react';

class CanvasRow extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }


  render() {
    return (
      <div id="gif-row">
      {this.props.photoArray.map((val, key) => {
        return (
          <canvas 
            key={val}
            height={75}
            width={75}
            className='miniPic' 
          />
        )})}
      </div>
    );
  }
}

export default CanvasRow;
