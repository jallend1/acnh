import React from 'react';
import Header from './Header';
import Headings from './Headings';
import Fish from './Fish';

const endpoint = {
    fish: "./fish.json",
    bugs: "./bugs.json",
}

class App extends React.Component {
  state = {
    fish: [],
    bugs: [], 
    active: 'fish',
    sort: 'alpha'
  }

  activateCreature = creature => {
    this.setState({active: creature})
    this.catchCreatures(creature)
  }

  catchCreatures = creature => {
    if(this.state[creature].length === 0){              // Only fetches if array is empty
      const url = `./${creature}.json`;
      fetch(url)
        .then(data => data.json())
        .then(results => {
          const creatures = Object.keys(results)
          .map(key => results[key]);
          this.setState({[creature]: creatures});
        });
    }
  }

  changeSort = e => {
    this.setState({sort: e.target.value})
    this.sortItems();
  }

  sortItems = e => {
    const currentState = this.state.fish;
    const keys = Object.keys(currentState).map(key => currentState[key]);
    console.log(keys.sort())
  }

  render(){
    const activeList = this.state.active;
    return (
      <div className="App">
        <Header 
            catchCreatures={this.catchCreatures} 
            endpoint={endpoint}
            active={this.state.active} 
            activateCreature={this.activateCreature} 
        />
        <Headings active={this.state.active} changeSort={this.changeSort}/>
        <ul className="list">
          {this.state[activeList].map(fish => <Fish fish={fish} key={fish["file-name"]}/>)
        }
        </ul>
      </div>
    );
  }
}

export default App;
