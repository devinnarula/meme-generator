import React, { Component } from 'react';
import Meme from './Meme'
import SavedMemes from './SavedMemes'
import './MemeGenerator.css';
import {v4 as uuid} from "uuid";

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
        this.state = {index: 0, caption: "", memeList: []};
        this.saveMeme = this.saveMeme.bind(this);
        this.removeMeme = this.removeMeme.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    saveMeme() {
        let meme = {
            cap: `${this.state.caption}`,
            img: `${this.props.memes[this.state.index]}`,
            id: uuid()
        }
        this.setState({memeList: [...this.state.memeList, meme]})
    }
    removeMeme(id) {
        // let index = 0
        // for (let i in this.state.memeList) {
        //     if (this.state.memeList[i].id == id) {
        //         index = i
        //     }
        // }
        // this.setState({memeList: this.props.memeList.splice(index,1)})
        this.setState({
            memeList: this.state.memeList.filter(m => m.id !== id)
        })
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
            <div>
                <div className="MemeGenerator">
                        <label className="MemeGenerator-Label">Caption:</label>
                        <input className="MemeGenerator-Input" value={this.state.caption} onChange={this.handleInput} />
                        <div className="MemeGenerator-Buttons">
                            <button className="MemeGenerator-Button" onClick={this.changeImage}>Change Image</button>
                            <button className="MemeGenerator-Button" onClick={this.saveMeme}>Save Meme</button>
                        </div>
                        <Meme image={this.props.memes[this.state.index]} caption={this.state.caption} isSaved={false} removeMeme={this.removeMeme} />
                </div>
                <SavedMemes memes={this.state.memeList} removeMeme={this.removeMeme} />
            </div>
        );
    }
}

export default MemeGenerator
