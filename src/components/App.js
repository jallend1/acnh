import React from 'react';
import Header from './Header';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fish: ''
  }

  catchFish(){
    
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Fish />
      </div>
    );
  }
}

export default App;
