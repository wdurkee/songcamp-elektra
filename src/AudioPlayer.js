import React from 'react'
import { NFTPreview, MediaConfiguration } from "@zoralabs/nft-components";
import './Portal.css';
import './AudioPlayer.css';

const nftStyle = {
    styles: {
        cardOuter: function noRefCheck() { },
    },
    theme: {
        bodyFont: {
            color: '#fff',
            fontSize: '14px',
            fontWeight: 300
        },
        borderStyle: '0',
        lineSpacing: 35,
        previewCard: {
            height: '0px',
            width: '0px'
        },
        cardItemInfo: {
            height: "0px"
        },
        titleFont: {
            color: '#fff',
            fontSize: '16px',
            fontWeight: 600,
            paddingBottom: '5px'
        },
        cardOuter: {
            gridAutoFlow: "row"
        },
    }
};

class AudioPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { playing: 0 };
        this.pressPlay = this.pressPlay.bind(this);
    }

    pressPlay(track) {

        if (this.state.playing === track) {
            this.setState({ playing: 0 });
        }
        else {
            this.setState({ playing: track });
        }

    }

    render() {
        return (
            <div className="nft-container">
                <div className="nft-card">
                    <img src={"https://i.imgur.com/VT9wr4Z.jpg"} alt="NFT img" className="nft-visuals" />
                    <MediaConfiguration
                        style={nftStyle}>
                        <NFTPreview id="2212" />
                    </MediaConfiguration>
                    <div className="nft-bottom">
                        <div className="btn-container">
                            <div
                                className={"btn " + (this.state.playing === 1 ? 'pause' : 'play')}
                                onClick={() => this.pressPlay(1)}>
                                <span className="bar bar-1"></span>
                                <span className="bar bar-2"></span>
                                <span className="bar bar-3"></span>
                            </div>
                        </div>
                        <a className='bid-button button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
                            Place Bid
                        </a>
                    </div>
                </div>
                <div className="nft-card">
                    <img src={"https://i.imgur.com/45GqLmV.jpg"} alt="NFT img" className="nft-visuals" />
                    <MediaConfiguration
                        style={nftStyle} >
                        <NFTPreview id="2335" />
                    </MediaConfiguration>
                    <div className="nft-bottom">
                        <div className="btn-container">
                            <div
                                className={"btn " + (this.state.playing === 2 ? 'pause' : 'play')}
                                onClick={() => this.pressPlay(2)}>
                                <span className="bar bar-1"></span>
                                <span className="bar bar-2"></span>
                            </div>
                        </div>
                        <a className='bid-button button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
                            Place Bid
                        </a>
                    </div>
                </div>
                <div className="nft-card">
                    <img src={"https://i.imgur.com/KkI87jw.jpg"} alt="NFT img" className="nft-visuals" />
                    <MediaConfiguration
                        style={nftStyle}>
                        <NFTPreview id="1836" />
                    </MediaConfiguration>
                    <div className="nft-bottom">
                        <div className="btn-container">
                            <div
                                className={"btn " + (this.state.playing === 3 ? 'pause' : 'play')}
                                onClick={() => this.pressPlay(3)}>
                                <span className="bar bar-1"></span>
                                <span className="bar bar-2"></span>
                            </div>
                        </div>
                        <a className='bid-button button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
                            Place Bid
                        </a>
                    </div>
                </div>
            </div>);
    }


}

export default AudioPlayer;