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
    chooseImagePath = () => {
        const url = './images/'
        const active = this.props.active;                                   // The active item type
        if(this.state.collapsed){
            return null;
        }else{
            return `${url}${active}/${this.props.fish["file-name"]}.png`
        }
    }

    render(){
        const { name, price, "catch-phrase": catchPhrase, "museum-phrase": museumPhrase } = this.props.fish;
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
                <img alt="The item itself!" src={this.chooseImagePath()} crossOrigin="anonymous" />
                <div>
                    <p className="blathers"><span>🦉 Blathers' Take 🦉 </span></p>
                    <p>{museumPhrase}</p>
                </div>
            </main>
        </li>
        )
}
}

export default Fish;