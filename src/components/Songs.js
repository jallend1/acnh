import React from 'react';
import Song from './Song';

class Songs extends React.Component{
    state = {
        songs: []
    }
    getSongs = () => {
        if(this.state.songs.length === 0){
            const url = '../songs.json';
            fetch(url)
            .then(data => data.json())
            .then(results =>{
                const songs = Object.keys(results)
                .map(key => results[key]);
                this.setState({ songs })
            })
        }
    }
    
    render(){
        this.getSongs();
        return(
            <>
                <h1>Here Are Songs.</h1>
                {this.state.songs.map(song => 
                    <Song song={song} />
                )}
            </>
        )
    }
}

export default Songs;