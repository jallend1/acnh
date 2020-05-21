import React from 'react';

class Song extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h3>{this.props.name["name-en"]}</h3>
            </div>
            
        )
    }
}

export default Song;