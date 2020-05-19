import React from 'react';

class Fish extends React.Component{
    render(){
        console.log(this.props.fish)
        const { name, price, "catch-phrase": catchPhrase, "museum-phrase": museumPhrase } = this.props.fish;
        return (
        <li className="item">
            <header className="item-head">
                <p>{name["name-en"]}</p>
                <p>{price} bells</p>
            </header>
            <main className="item-body">
                <div>{catchPhrase}</div>
                <div>{museumPhrase}</div>
            </main>
        </li>
        )
}
}

export default Fish;