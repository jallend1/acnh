import React from 'react';

class Header extends React.Component{
    clickBugs = () => {
        this.props.activateCreature('bugs');
    }
    clickFish = () => {
        this.props.activateCreature('fish');
    }
    render(){
        return(
            <>
            <h1>ACNH</h1>
            <nav>
                <ul>
                    <li className={this.props.active === 'fish' ? "active" : "inactive"} onClick={ this.clickFish }>Fish</li>                    
                    <li className={this.props.active === 'bugs' ? "active" : "inactive"} onClick={ this.clickBugs }>Bugs</li>
                </ul>
            </nav>
        </>
    )
    }
}

export default Header;