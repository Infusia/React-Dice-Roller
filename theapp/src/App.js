import React, { Component } from "react";
import './index.css';
import one from "./diceimg/one.png"
import two from "./diceimg/two.png"
import three from "./diceimg/three.png"
import four from "./diceimg/four.png"
import five from "./diceimg/five.png"
import six from "./diceimg/six.png"

class App extends Component {
  state = {
    numOfDice: 1,
    roll: [],
    sides: 6,
    theSum: null
  };



  incrementNumOfDice() {
    this.setState(
      {
        numOfDice: this.state.numOfDice >= 5 ? 5 : this.state.numOfDice + 1

      }
    );
  };

  decrementNumOfDice() {
    this.setState(
      {
        numOfDice: this.state.numOfDice <= 1 ? 1 : this.state.numOfDice - 1
      }
    );
  };


  incrementNumOfSides() {
    this.setState(
      {
        sides: this.state.sides >= 6 ? 6 : this.state.sides + 1

      }
    );
  };

  decrementNumOfSides() {
    this.setState(
      {
        sides: this.state.sides <= 2 ? 2 : this.state.sides - 1,

      }
    );
  };

  sumItUp() {
    var sides = this.state.sides;
    var theSum = 0;
    var numOfDice = this.state.numOfDice;
    var roll = [];
    for (let i = 0; i < numOfDice; i++) {
      roll[i] = Math.floor(Math.random() * sides) + 1;
      theSum += roll[i];
    }

    this.setState(
      {
        roll,
        theSum,
      }
    );
  };
  render() {

    const DiceImage = ({ roll }) => {
      if (roll === 1) {
        return <img className="diceimg" src={one} alt="1" />;
      } else if (roll === 2) {
        return <img className="diceimg" src={two} alt="2" />;
      } else if (roll === 3) {
        return <img className="diceimg" src={three} alt="3" />;
      } else if (roll === 4) {
        return <img className="diceimg" src={four} alt="4" />;
      } else if (roll === 5) {
        return <img className="diceimg" src={five} alt="5" />;
      } else if (roll === 6) {
        return <img className="diceimg" src={six} alt="6" />;
      }
    };
    return (
      <div className="App">
        <h1>LETS ROLL!!</h1>
        <button className="incrementDice" onClick={(e) => this.incrementNumOfDice(e)}>Increment Dice Count</button>
        <button className="decrementDice" onClick={(e) => this.decrementNumOfDice(e)}>Decrement Dice Count</button>
        <button className="incrementSides" onClick={(e) => this.incrementNumOfSides(e)}>Increment Sides Count</button>
        <button className="decrementSides" onClick={(e) => this.decrementNumOfSides(e)}>Decrement Sides count</button>
        <button className="rollDice" onClick={(e) => this.sumItUp(e)}>ROLL EM!</button>
        <div className="diceimg">
          {
            this.state.roll.map((roll, index) => <DiceImage roll={roll} key={index} />)
          }
        </div>
        <div className="diceCount">
          <p># Of Current Dice: {this.state.numOfDice}</p>
        </div>
        <div className="sideCount">
          <p># Of Current Sides: {this.state.sides}</p>
        </div>
        <div className="sumCount">
          <p>Sum: {this.state.theSum}</p>
        </div>
      </div>
    );
  }
}

export default App;