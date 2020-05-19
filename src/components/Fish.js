import React from 'react';

class Fish extends React.Component{
    // const {name: name["name-en"], availability } = this.props.fish;
    render(){
        const {name["name-en"]: name, price } = this.props.fish;
        return (
        <li>
            {name}
            {/* {this.props.fish.name["name-en"]} */}
        </li>
        )
}
}

export default Fish;