import React, { Component } from 'react';
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Chars from "./characters.json";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  state = {
    Chars: Chars,
    score: 0,
    highScore: 0
  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }),
      () => this.winGame());
  }

  newHighScore = () => {
    this.setState((newState) => ({
      highScore: newState.score
    }))
  }

  winGame = () => {
    if (this.state.score == this.state.Chars.length) {
      alert("Congratulations!  You Won!!");
      this.setState({});
      this.resetGame();
    }
    else {
      this.randomShuffle(this.state.Chars);
    }
  }

  resetGame = () => {
    this.setState({ score: 0 });
    this.state.Chars.forEach((image) => {
      image.clicked = false;
    })
  }

  randomShuffle = (array) => {
    let shuffleArr = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        shuffleArr.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({ Chars: shuffleArr})
  }

  randomRender = id => {
    this.state.Chars.forEach((image) => {
      if (image.id === id) {
        if (image.clicked) {
          alert("You clicked on the same card twice!  You lost!");
          this.setState({})
          this.resetGame();
          return false;
        }
        else {
          this.updateScore();
          image.clicked = true;
        }
        if (this.state.score >= this.state.highScore) {
          this.newHighScore();
        }
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} highScore={this.state.highScore} />
        {this.state.Chars.map(character => {
          return <CharCard
            {...character}
            key={Chars.id}
            randomRender={this.randomRender}
            randomOrganize={() => this.randomShuffle(this.state.Char)}
          />
        })}
      </Wrapper>
    )
  }
}

export default App;
