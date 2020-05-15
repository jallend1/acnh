import React from 'react';
import Header from './components/Header';
import Fish from './components/Fish';

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
