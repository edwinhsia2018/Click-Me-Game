import React, { Component } from 'react';
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Chars from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    count: 0
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 5});
  }


  render () {
    return (
      <Wrapper>
        <Title>Click Me Game</Title>
        <Title>Current Score: {this.state.count}</Title>
        {this.state.characters.map(character => (
          <CharCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            location={character.location}
            />
        ))}
        </Wrapper>
    )
  }
}

export default App;
