import './Portal.css';
import './Keys.css'

function Hieroglyph() {
  return (
    <div className="container">
        <video  preload="yes" playsInline autoPlay loop muted className="video" >
            <source src="https://i.imgur.com/uJhNvRg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
            <div className='sub-content'>
                <div className='button-container'>
                <a className='keys-button' href='https://mgate.io/go/1dXPmJi_ehKi' >
                    CHI
                </a>
                <a className='keys-button psi' href='https://mgate.io/go/YFqBmJPhs1MQ/' >
                    PSI
                </a>
                <a className='keys-button phi' href='https://mgate.io/go/WTeeBUI3BAS9/' >
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

export default Hieroglyph;