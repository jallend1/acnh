import React from 'react';

class Headings extends React.Component{

    render(){
        return (
            <>
                <h2>{this.props.active.toUpperCase()}</h2>
                <form onChange={this.props.changeSort}>
                    <label htmlFor="alpha">Alphabetical</label>
                        <input defaultChecked type="radio" value="alpha" id="alpha" name="order"/>
                    <label htmlFor="nook">Nook's Price</label>
                        <input type="radio" value="nook" id="nook" name="order"/>
                    <label htmlFor="flick">Flick's Price</label>
                        <input type="radio" value="flick" id="flick" name="order"/>
                </form>
            </>
        )
    }
}

export default Headings;