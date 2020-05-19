import React from 'react';

const Header = props => {
    return(
        <>
            <h1>ACNH</h1>
            <nav>
                <ul>
                    <li onClick={props.catchFish}>Fish</li>
                    <li>Bugs</li>
                </ul>
            </nav>
        </>
    )
}

export default Header;