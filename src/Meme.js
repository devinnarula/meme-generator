import React, { Component } from 'react';
import './Meme.css';

class Meme extends Component {
    static defaultProps = {
        image: 'One'
    }
    render() {
        return (
            <div className="Meme">
                <h1 className="Meme-Caption">{this.props.caption}</h1>
                <img className="Meme-Img" src={require(`./img/${this.props.image}.jpg`)} />
            </div>
        );
    }
}

export default Meme
