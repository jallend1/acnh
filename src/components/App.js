import React from 'react';
import Header from './Header';
import Fish from './Fish';
const endpoint = './fish.json';

class App extends React.Component {
  state = {
    fish: []
  }
  catchFish = () => {
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
          const fish = Object.keys(results)
          .map(key => results[key]);
          this.setState({fish})
          console.log('Fish caught!')
        })
  }

  render(){
    return (
      <div className="App">
        <Header catchFish={this.catchFish} />
        <ul>
          {this.state.fish.map((fish, index) => {
            return (
              <Fish fish={fish} />
            )
          }
          )}
        </ul>
      </div>
    );
  }
}

export default App;
