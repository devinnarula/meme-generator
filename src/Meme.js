import React, { Component } from 'react';
import './Meme.css';

class Meme extends Component {
    constructor(props){
        super(props)
        this.deleteMeme = this.deleteMeme.bind(this)
    }
    static defaultProps = {
        image: 'One'
    }

    deleteMeme(){
        this.props.removeMeme(this.props.id);
    }

    render() {
        if(this.props.isSaved) {
            return (
                <div className="Meme">
                    <h1 className="Meme-Caption">{this.props.caption}</h1>
                    <img className="Meme-Img" src={require(`./img/${this.props.image}.jpg`)} />
                    <button className="Meme-Delete" onClick={this.deleteMeme}>X</button>
                </div>
            );
        }
        else {
            return (
                <div className="Meme">
                    <h1 className="Meme-Caption">{this.props.caption}</h1>
                    <img className="Meme-Img" src={require(`./img/${this.props.image}.jpg`)} />
                </div>
            );
        }
    }
}

export default Meme
