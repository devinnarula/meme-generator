import React, { Component } from 'react';
import Meme from './Meme'
import './MemeGenerator.css';

class MemeGenerator extends Component {
    static defaultProps = {
        memes: [
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six',
            'Seven',
            'Eight'
        ]
    }
    constructor(props) {
        super(props);
        this.state = {index: 0, caption: ""};
        this.changeImage = this.changeImage.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    changeImage() {
        if(this.state.index< this.props.memes.length-1){
            this.setState(state => ({index: this.state.index+1}));
        }
        else {
            this.setState(state => ({index: 0}));
        }
    }
    handleInput(evt) {
        this.setState({caption: evt.target.value});
    }
    render() {
        return (
            <div className="MemeGenerator">
                    <label className="MemeGenerator-Label">Caption:</label>
                    <input className="MemeGenerator-Input" value={this.state.caption} onChange={this.handleInput} />
                    <button className="MemeGenerator-Button">Save</button>
                    <Meme image={this.props.memes[this.state.index]} caption={this.state.caption} />
                    <button className="MemeGenerator-Button" onClick={this.changeImage}>Change Image</button>
            </div>
        );
    }
}

export default MemeGenerator
