import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Portal.css';
import ElektraSatellite from './ElektraSatellite';
import MailChimpForm from './MailChimpForm'
import AudioPlayer from './AudioPlayer'


function Portal() {
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
        <img src="https://i.imgur.com/REab9mL.png" alt="The Elektra Songs Auction" className="title-image" />
        <AudioPlayer />
        <div className='button-container'>
          <a className='portal-button party-button button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
            Join the Party 🥳
              </a>
        </div>
      </div>

      <div className="capsule-container">
        <video preload="yes" playsInline autoPlay loop muted className="capsule-video" >
          <source src="https://i.imgur.com/nPxtZm3.mp4" type="video/mp4" />
          {/* <source src="landscan.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
      </div>

      <div className="story-content">
        <p className="story-text" >Songcamp Elektra is an 8-week songwriting and art creation camp made up of musicians, visual artists, developers and strategists. Together we have collectively created Elektra — an interactive story and world with music at its core.</p>
        <p className="story-text" >In the world of Elektra, music is energy. Music is the fuel, electricity, and light of the world. Once healthy and thriving, Elektra has since turned desolate and barren. These 3 songs were created to help save this dying planet, and bring her back to health.</p>
        <p className="story-text" >After the camp closes, the project will exit to its community and evolve into the Elektra DAO. The Elektra DAO will steward the continued development and distribution of the Elektra story, game and artwork. The Elektra DAO is scheduled to activate at the beginning of September 2021.</p>

        {/* <p className="story-text"><span style={{ fontStyle: "italic" }}>Will you accept your mission?</span></p> */}
      </div>
      <div className="section video-section" >
        <video preload="yes" playsInline autoPlay loop muted className="video" >
          <source src="https://i.imgur.com/98kiH3b.mp4" type="video/mp4" />
          {/* <source src="landscan.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
        <div className="video-overlay">
          <div className='button-container'>
            <a className='portal-button' href='https://zora.co/songcamp' target="_blank" rel="noreferrer">
              SEE THE ARTWORK
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