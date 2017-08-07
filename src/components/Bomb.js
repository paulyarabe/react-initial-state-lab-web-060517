// Bomb Component Code Goes Here

import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super();

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    var output = ""
    if(this.state.secondsLeft === 0){
      output = 'Boom!'
    } else {
      output = this.state.secondsLeft + ' seconds left before I go boom!'
    }
    return(
      <div>
        {output}
      </div>
    )
  }
}

export default Bomb
