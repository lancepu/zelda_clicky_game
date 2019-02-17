import React, { Component } from "react";
import Img from "./common/img";
import _ from "lodash";

class Clicky extends Component {
  state = {
    imgArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    guessedArray: [],
    currentScore: 0,
    topScore: 0,
    message: "Click an image to begin"
  };

  handleClick = ({ currentTarget }) => {
    const { guessedArray, currentScore, topScore } = this.state;
    const shuffled = _.shuffle([...this.state.imgArray]);

    if (guessedArray.indexOf(currentTarget.id) === -1) {
      const newScore = currentScore + 1;
      let newTopScore = topScore;
      if (newScore > newTopScore) newTopScore = newScore;
      this.setState({
        imgArray: shuffled,
        guessedArray: [...guessedArray, currentTarget.id],
        correct: true,
        currentScore: newScore,
        topScore: newTopScore,
        message: "You guessed correctly!"
      });
    } else {
      // Reset the game
      this.setState({
        imgArray: shuffled,
        guessedArray: [],
        correct: false,
        currentScore: 0,
        message: "Game over!"
      });
    }
  };

  render() {
    const { currentScore, topScore, imgArray, message } = this.state;
    return (
      <div className="container">
        <div className="row p-3 fixed-top bg-dark text-light">
          <div className="col-4 d-inline">
            <h5>React Clicky Game</h5>
          </div>
          <div className="col-4 d-inline">
            {" "}
            <h5>{message}</h5>
          </div>
          <div className="col-4 d-inline">
            <h5>{`Score: ${currentScore} | Top Score: ${topScore}`}</h5>
          </div>
        </div>

        <div className="jumbotron m-3">
          <h1 className="display-4">React Clicky Game!</h1>
          <p className="lead">Breath of the Wild Edition</p>
          <p className="lead">
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
        </div>

        <div className="row">
          {imgArray.map(img => (
            <div key={img} className="col-xs-6 col-lg-3">
              <Img id={img} imgId={img} onClick={this.handleClick} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Clicky;
