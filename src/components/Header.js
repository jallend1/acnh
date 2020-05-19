import React from 'react';

class Header extends React.Component{
    state = {
        fishActive: false,
        bugActive: false
    }
    clickBugs = () => {
        this.setState({ fishActive: false, bugActive: true});
    }
    clickFish = () => {
        this.setState({ fishActive: true, bugActive: false })
        this.props.catchFish();
    }
    render(){
        return(
            <>
            <h1>ACNH</h1>
            <nav>
                <ul>
                    <li className={this.state.fishActive ? "active" : "inactive"} onClick={ this.clickFish }>Fish</li>                    
                    <li className={this.state.bugActive ? "active" : "inactive"} onClick={this.clickBugs}>Bugs</li>
                </ul>
            </nav>
        </>
    )
    }
}

export default Header;