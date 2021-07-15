import React from 'react';
import {
  Link
} from "react-router-dom";

import './Portal.css';
import ElektraSatellite from './ElektraSatellite';
import MailChimpForm from './MailChimpForm'

function Portal() {
  return (
    <div className="container">
        <video  preload="yes" playsInline autoPlay loop muted className="video" >
        <source src="https://i.imgur.com/98kiH3b.mp4" type="video/mp4" />
        {/* <source src="landscan.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>
        <div className='content'>
          <div className='sub-content'>
            <div className='button-container'>
              <a className='portal-button' href='https://discord.gg/v6hj82yeaE' target="_blank" rel="noreferrer">
                ENTER THE PORTAL
              </a>
            </div>
            </div>
            <MailChimpForm />  
          <div className="powerBottom">
            <div className="logo">
              {/* <Link to="/keys"> */}
              <a href="https://songcamp.mirror.xyz/" target="_blank" rel="noreferrer">
                <ElektraSatellite />
              </a>
              {/* </Link> */}
            </div>
              Powered by <a href="https://twitter.com/songcamp_" target="_blank" rel="noreferrer">Songcamp</a>
            </div>
        </div>
    </div>
    );
  }

export default Portal;