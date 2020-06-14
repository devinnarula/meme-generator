import React, { Component } from 'react';
import Meme from './Meme'
import './SavedMemes.css';

class SavedMemes extends Component {
    // static defaultProps = {
    //     image: 'One'
    // }
    render() {
        return (
            <div>
                <h1 className="SavedMemes-Title">Collection</h1>
                <div className="SavedMemes">
                    {this.props.memes.map((m) => (
                        <Meme key={m.id} id={m.id} caption={m.cap} image={m.img} isSaved={true} removeMeme={this.props.removeMeme}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default SavedMemes
