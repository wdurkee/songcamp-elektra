import React from 'react';

import { NFTPreview, MediaConfiguration } from "@zoralabs/nft-components";
import Navbar from 'react-bootstrap/Navbar';

import './Portal.css';
import ElektraSatellite from './ElektraSatellite';
import MailChimpForm from './MailChimpForm'

import nft from './test.gif'


function Portal() {

  const nftStyle = {
    styles: {
      cardOuter: function noRefCheck() { }
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
        display: 'none'
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


  return (
    <div className="App" >
      <Navbar className="navbar">
        <Navbar.Brand className="nav-logo">
          <a href="https://songcamp.mirror.xyz/" target="_blank" rel="noreferrer">
            <ElektraSatellite />
          </a>
        </Navbar.Brand>
      </Navbar>
      <div className="section auction" >
        <h1 className="section-title">The Elektra Songs Auction</h1>
        <div className="nft-container">
          <div className="nft-card">
            <img src={"https://i.imgur.com/ULJgVrC.png"} alt="NFT img" className="nft-visuals" />
            <MediaConfiguration
              style={nftStyle}>
              <NFTPreview id="2212" />
            </MediaConfiguration>
            <a className='bid-button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
              Place Bid
            </a>
          </div>
          <div className="nft-card">
            <img src={"https://i.imgur.com/9JNt9Hh.png"} alt="NFT img" className="nft-visuals" />
            <MediaConfiguration
              style={nftStyle} >
              <NFTPreview id="2335" />
            </MediaConfiguration>
            <a className='bid-button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
              Place Bid
            </a>
          </div>
          <div className="nft-card">
            <img src={"https://i.imgur.com/ntI7moY.jpg"} alt="NFT img" className="nft-visuals" />
            <MediaConfiguration
              style={nftStyle}>
              <NFTPreview id="1836" />
            </MediaConfiguration>
            <a className='bid-button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
              Place Bid
            </a>
          </div>
        </div>
        <div className='button-container'>
          <a className='portal-button party-button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
            Join the Party 🥳
              </a>
        </div>
      </div>

      <div className="capsule-container">
        <video preload="yes" playsInline autoPlay loop muted className="capsule-video" >
          <source src="https://i.imgur.com/YjI7NJw.mp4" type="video/mp4" />
          {/* <source src="landscan.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
        <video preload="yes" playsInline autoPlay loop muted className="capsule-video" >
          <source src="https://i.imgur.com/O6bhIOa.mp4" type="video/mp4" />
          {/* <source src="landscan.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
        <video preload="yes" playsInline autoPlay loop muted className="capsule-video" >
          <source src="https://i.imgur.com/kZMXhQt.mp4" type="video/mp4" />
          {/* <source src="landscan.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>

      </div>

      <div className="story-content">
        <p className="story-text" >Once healthy and thriving, the world of Elektra has since turned desolate and barren.</p>
        <p className="story-text" >On Elektra, music is energy. Music is the fuel, electricity, and light of the world.</p>
        <p className="story-text" >Centuries ago, Elektra had a thriving civilization with a deep rooted sense of value towards art. But soon, motives around greed and self-interest took over, and the music that powered this world was lost.</p>
        <p className="story-text" >Your mission is to travel to Elektra, and help us collectively revive, restore and reignite this once beautiful world back to health.</p>
        <p className="story-text"><span style={{ fontStyle: "italic" }}>Will you accept your mission?</span></p>
      </div>
      <div className="section video-section" >
        <video preload="yes" playsInline autoPlay loop muted className="video" >
          <source src="https://i.imgur.com/98kiH3b.mp4" type="video/mp4" />
          {/* <source src="landscan.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
        <div className="video-overlay">
          <div className='button-container'>
            <a className='portal-button' href='https://opensea.io/assets/mirror-editions-v4?search[query]=ticket&search[sortAscending]=true&search[sortBy]=PRICE' target="_blank" rel="noreferrer">
              GET YOUR PORTAL TICKET
                    </a>
          </div>
          <div className='button-container'>
            <a className='portal-button' href='https://discord.gg/v6hj82yeaE' target="_blank" rel="noreferrer">
              ENTER THE PORTAL
                    </a>
          </div>
          <MailChimpForm />
        </div>
      </div>
      <div className="section about" >
        <h1 className="section-title about-title">About Elektra</h1>
        <p className="story-text">Songcamp Elektra is made up of 42 musicians, visual artists, developers and strategists. Together we are building “Elektra” — an interactive choose-your-own-adventure web3 game with music at its core.</p>
        <p className="story-text">To play the game, you need to secure a Portal Ticket NFT in the crowdfund below.</p>
        <p className="story-text">As this project evolves, the lines between creator and audience will blur. Game builders will play the game they are building; and game players will build the game they are playing. The $ELEKTRA token will come to establish the contribution graph of this project, and once the camp is finished — the ElektraDAO will be born.</p>
        <p className="story-text learn-more">Learn More: <span><a className="learn-more-link" href='https://songcamp.mirror.xyz/' target="_blank" rel="noreferrer">
          https://songcamp.mirror.xyz/
        </a>
        </span>
        </p>

      </div>
      <div className="powerBottom">
        Powered by&nbsp;
              <a href="https://twitter.com/songcamp_" target="_blank" rel="noreferrer">
          Songcamp
              </a>
      </div>
    </div >
  );
}

export default Portal;
