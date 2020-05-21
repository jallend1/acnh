import React from 'react';
import { properCase } from '../utils.js';

class Fish extends React.Component{
    state = {
        collapsed: true
    }
    toggleCollapse = () => {
        const currentCollapsed = this.state.collapsed;
        this.setState({collapsed: !currentCollapsed});
    }

    render(){
        const { name, price, id, "catch-phrase": catchPhrase, "museum-phrase": museumPhrase } = this.props.fish;
        return (
        <li className="item">
            <header className="item-head">
                <p>{properCase(name["name-en"])}</p>
                <p>{price} bells
                <img src={this.state.collapsed ? "./images/expand.png" : "./images/collapse.png"} alt="" onClick={this.toggleCollapse}/>
                </p>
            </header>
            <main className={this.state.collapsed ? "collapsed" : "expanded"}>
                <h4>{catchPhrase}</h4>
                <img alt="" src={!this.state.collapsed ? `http://acnhapi.com/images/${this.props.active}/${id}` : 'null'} crossOrigin="anonymous" />
                <div>{museumPhrase}</div>
            </main>
        </li>
        )
}
}

export default Fish;