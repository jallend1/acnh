import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    state = {
        fishActive: false,
        bugActive: false
    }
    toggleClass = () => {
        const activeStatus = this.state.fishActive;
        this.setState({ fishActive: !activeStatus })
        this.props.catchFish();
    }
    render(){
        return(
            <>
            <h1>ACNH</h1>
            <nav>
                <ul>
                    <li className={this.state.fishActive ? "active" : "inactive"} onClick={ this.toggleClass }>Fish</li>                    
                    <li>Bugs</li>
                </ul>
            </nav>
        </>
    )
    }
}

export default Header;