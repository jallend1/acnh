import React from 'react';
import Header from './Header';
import Fish from './Fish';
const endpoint = './fish.json';

class App extends React.Component {
  state = {
    fish: []
  }

  catchFish(){
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
        const fishArray = Object.keys(results)
          .map( (key) => {
            return { [key]: results[key] };
          })
          console.log(fishArray);
        })
  }

  render(){
    this.catchFish();
    return (
      <div className="App">
        <Header />
        <Fish fish={this.state.fish} />
      </div>
    );
  }
}

export default App;
