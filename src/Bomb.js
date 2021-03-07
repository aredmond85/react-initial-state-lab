// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
      this.state = {
        secondsLeft: props.initialCount
      }
      // Only change code above this line
    }
    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
      return (
        <div>
          {message}
        </div>
      );
    }
  };

  export default Bomb;