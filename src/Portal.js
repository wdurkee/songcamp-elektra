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
        <h1 className="section-title">The Elektra Songs Auction</h1>
        <AudioPlayer />
        <div className='button-container'>
          <a className='portal-button party-button button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
            Join the Party 🥳
          </a>
        </div>
      </div>

      <div className="capsule-container">
        <video preload="yes" muted autoPlay playsInline loop className="capsule-video" >
          <source src="https://ipfs.fleek.co/ipfs/bafybeibjeowdroq3ox2bybs7g7mpe5hhvqqcndxkiticfxnxtc3qbmgwwu" type="video/mp4" />
          {/* <source src="landscan.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="story-content">
        <p className="story-text welcome-text" >Welcome to the Elektra Songs Auction!</p>
        <p className="story-text">100% of the proceeds from these auctions will go to the artists who created these songs and artwork, as well as those who have contributed to the wider Elektra project. See detailed splits <span>
          <a className="learn-more-link" href='https://songcamp.mirror.xyz/' target="_blank" rel="noreferrer">
            here
          </a>
        </span>. </p>
        <p className="story-text" >Collecting one of these 1/1 Catalog NFTs also includes:</p>
        <ul>
          <li className="bullet">A gift of 1000 $ELEKTRA</li>
          <li className="bullet">One (1) invitation to Songcamp's Patron House -- a dedicated space for patrons of 1/1 Songcamp NFTs to receive deep + intimate access into the growing Songcamp community and activities.</li>
        </ul>
        <p className="story-text" >After the camp closes, the project will exit to its community and evolve into the Elektra DAO. The Elektra DAO will steward the continued development and distribution of the Elektra story, game and artwork. The Elektra DAO is scheduled to activate at the beginning of September 2021.</p>

        {/* <p className="story-text"><span style={{ fontStyle: "italic" }}>Will you accept your mission?</span></p> */}
      </div>
      <div className="section video-section" >
        <video preload="yes" muted autoPlay playsInline loop className="video" >
          <source src="https://i.imgur.com/98kiH3b.mp4" type="video/mp4" />
          {/* <source src="landscan.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          {/* <div className='button-container'>
            <a className='portal-button' href='https://zora.co/songcamp' target="_blank" rel="noreferrer">
              SEE THE ARTWORK
            </a>
          </div>
          <div className='button-container'>
            <a className='portal-button' href='https://discord.gg/v6hj82yeaE' target="_blank" rel="noreferrer">
              ENTER THE PORTAL
            </a>
          </div> */}
          <MailChimpForm />
        </div>
      </div>
      <div className="section about" >
        <h1 className="section-title about-title">About Elektra</h1>
        <p className="story-text">Songcamp Elektra is an 8-week songwriting and art creation camp made up of musicians, visual artists, developers and strategists. Together we have collectively created Elektra — an interactive story and world with music at its core.</p>
        <p className="story-text">In the world of Elektra, music is energy. Music is the fuel, electricity, and light of the world. Once healthy and thriving, Elektra has since turned desolate and barren. These 3 songs have been created to help save this dying planet, and bring her back to health.</p>
        <p className="story-text">After the camp closes, the project will <span style={{ fontStyle: "italic" }}>exit to its community</span> and evolve into the Elektra DAO.</p>
        <p className="story-text">The Elektra DAO will steward the continued development and distribution of the Elektra story, game and artwork. The $ELEKTRA token will act as the governing token to make these collective decisions.</p>
        <p className="story-text">The Elektra DAO is scheduled to activate at the beginning of September 2021.</p>

        <p className="story-text learn-more">Learn More: <span><a className="learn-more-link" href='https://songcamp.mirror.xyz/' target="_blank" rel="noreferrer">
          https://songcamp.mirror.xyz/
        </a>
        </span>
        </p>
        <div className='button-container'>
          <a className='portal-button' href='https://zora.co/songcamp' target="_blank" rel="noreferrer">
            SEE THE ARTWORK
          </a>
        </div>


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