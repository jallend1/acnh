import React from 'react';

class Headings extends React.Component{

    render(){
        return (
            <>
                <h2>{this.props.active}</h2>
                <form onChange={this.props.changeSort}>
                    <label>Alphabetical</label>
                        <input defaultChecked type="radio" value="alpha" id="alpha" name="order"/>
                    <label>Nook's Price</label>
                        <input type="radio" value="nook" id="nook" name="order"/>
                </form>
            </>
        )
    }
}

export default Headings;