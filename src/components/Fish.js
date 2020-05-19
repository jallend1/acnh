import React from 'react';

class Fish extends React.Component{
    state = {
        collapsed: true
    }
    toggleCollapse = () => {
        const currentCollapsed = this.state.collapsed;
        this.setState({collapsed: !currentCollapsed});
    }

    render(){
        console.log(this.props.fish)
        const { name, price, "catch-phrase": catchPhrase, "museum-phrase": museumPhrase } = this.props.fish;
        return (
        <li className="item">
            <header className="item-head">
                <p>{name["name-en"]}</p>
                <p>{price} bells</p>
                <img src="./images/arrow-expand.png" alt="" onClick={this.toggleCollapse}/>
            </header>
            <main className={this.state.collapsed ? "collapsed" : "expanded"}>
                <div>{catchPhrase}</div>
                <div>{museumPhrase}</div>
            </main>
        </li>
        )
}
}

export default Fish;