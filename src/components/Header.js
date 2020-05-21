import React from 'react';

class Header extends React.Component{
    handleClick = e => {
        this.props.activateCreature(e.target.textContent.toLowerCase());
    }
    render(){
        return(
            <>
            <h1>ACNH</h1>
            <nav>
                <ul>
                    <li className={this.props.active === 'fish' ? "active" : "inactive"} onClick={ this.handleClick }>Fish</li>                    
                    <li className={this.props.active === 'bugs' ? "active" : "inactive"} onClick={ this.handleClick }>Bugs</li>
                    <li className={this.props.active === 'fossils' ? "active" : "inactive"} onClick={ this.handleClick }>Fossils</li>
                    <li className={this.props.active === 'songs' ? "active" : "inactive"} onClick={ this.handleClick }>Songs</li>
                    <li className={this.props.active === 'villagers' ? "active" : "inactive"} onClick={ this.handleClick }>Villagers</li>
                </ul>
            </nav>
        </>
    )
    }
}

export default Header;