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
    fossils: [],
    songs: [],
    villagers: [] ,
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
          this.sortItems(this.state.sort)
        });
    }
  }

  changeSort = e => {
    this.setState({sort: e.target.value})
    this.sortItems(e.target.value);
  }

  sortItems = (sortMethod) => {
    this.setState({sort: sortMethod})
    const currentState = this.state[this.state.active];
    if(sortMethod === 'alpha'){
      currentState.sort((a, b) => a.name["name-en"] - b.name["name-en"]);
      currentState.sort((a, b) => {
        const nameA = a["name"]["name-en"].toLowerCase();
        const nameB = b.name["name-en"].toLowerCase();
        if( nameA > nameB) {
          return 1
        }else{
          return -1;
        }
      });
    }
    else if(sortMethod === 'nook'){
      const activeList = this.state.active;
      const currentState = this.state[activeList];
      currentState.sort((a, b) => a.price - b.price);
      this.setState({[activeList]: currentState})
    }
    this.setState({fish: currentState})
  }

  render(){
    this.catchCreatures(this.state.active);
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
          {this.state[this.state.active].map(fish => <Fish fish={fish} active={this.state.active} key={fish["file-name"]}/>)
        }
        </ul>
      </div>
    );
  }
}

export default App;
