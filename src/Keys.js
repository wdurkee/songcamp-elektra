import './Portal.css';
import './Keys.css'

function Keys() {
  return (
    <div className="container">
        <video  preload="yes" playsInline autoPlay loop muted className="video" >
            <source src="https://imgur.com/a/38fZCIF.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
            <div className='sub-content'>
                <div className='button-container'>
                <a className='keys-button' href='https://www.mintgate.io/' >
                    CHI
                </a>
                <a className='keys-button psi' href='https://www.mintgate.io/' >
                    PSI
                </a>
                <a className='keys-button phi' href='https://www.mintgate.io/' >
                    PHI
                </a>
                </div>
            </div>  
            <div className="powerBottom">
                Powered by <a href="https://twitter.com/songcamp_" target="_blank" rel="noreferrer">Songcamp</a>
            </div>
        </div>
    </div>
    );
}

export default Keys;