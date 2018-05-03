import React, { Component } from 'react';
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Chars from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    Char: Chars,
    score: 0,
    highScore: 0
  }

  updateScore = () => {
    this.setState((newState) => ({ 
      score: this.newState.score + 1}), 
      () => this.winGame());
  }

  winGame = () => {
    if (this.state.score == this.state.Chars.length){
      alert("Congratulations!  You Won!!");
      this.setState({});
      this.resetGame();
    }
    else {
      this.randomShuffle(this.state.Chars);
    }
  }

  resetGame = () => {
    this.setState({ score: 0});
    this.state.Chars.forEach(element => {
      
    });((image))
  }

  randomShuffle = () => {

  }

  render () {
    return (
      <Wrapper>
        <Title>Click Me Game</Title>
        <Title>Current Score: {this.state.score}</Title>
        {this.state.Chars.map(Chars => (
          <CharCard
            id={Chars.id}
            key={Chars.id}
            name={Chars.name}
            image={Chars.image}
            />
        ))}
        </Wrapper>
    )
  }
}

export default App;
