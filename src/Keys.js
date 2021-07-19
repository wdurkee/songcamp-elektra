import './Portal.css';
import './Keys.css'

function Keys() {
  return (
    <div className="container">
        <video  preload="yes" playsInline autoPlay loop muted className="video" >
            <source src="https://i.imgur.com/MnH9nRM.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
            <div className='sub-content'>
                <div className='button-container'>
                <a className='keys-button' href='https://mgate.io/go/PVuttLU6RGXd' >
                    CHI
                </a>
                <a className='keys-button psi' href='https://mgate.io/go/_K3uesDpyH8W/' >
                    PSI
                </a>
                <a className='keys-button phi' href='https://mgate.io/go/ns9LRUI7Sn_n/' >
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