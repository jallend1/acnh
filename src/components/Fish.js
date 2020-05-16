import React from 'react';

class Fish extends React.Component{
    state = {fish: 'hello'};

    catchFish(){
         fetch('https://acnhapi.com/fish/bitterling')
         .then(data => data.json())
         .then(results => this.setState({fish: results.name['name-en']}))
    }
    render(){  
        return(
            <div>
                <p>Hello, {this.state.fish}.</p>
            </div>
        )
    }
}

export default Fish;