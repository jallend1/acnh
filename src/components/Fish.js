import React from 'react';

class Fish extends React.Component{
    constructor(props){
        super(props);
        this.state = {fish: 'hello'};
    }
    catchFish(){
         fetch('https://acnhapi.com/fish/bitterling')
         .then(data => data.json())
         .then(results => {
            // console.log(results); 
            this.setState({fish: results.name['name-en']})
            })
    }
    render(){
        this.catchFish();
        return(
            <div>
                <p>Hello, {this.state.fish}.</p>
            </div>
        )
    }
}

export default Fish;