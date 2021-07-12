import './App.css';

// import MailChimpForm from './MailChimpForm';
import ElektraSatellite from './ElektraSatellite';


function App() {
  // const pad = (num, size) => {
  //   num = num.toString();
  //   while (num.length < size) num = "0" + num;
  //   return num;
  // }

  // const renderer = ({days, hours, minutes, seconds, total}) => {
  //   let daysString = pad(days, 2)
  //   let hoursString = pad(hours, 2)
  //   let minutesString = pad(minutes, 2)
  //   let secondsString = pad(seconds, 2)
  //   let msString = pad(total, 3)

  //   msString = msString.substr(msString.length - 3);
  //   return <div className="countdown-text">{daysString}:{hoursString}:{minutesString}:{secondsString}:{msString}</div>;
  // }

  // const getUTCNow = () => {
  //   var now = new Date();
  //   return (new Date(now.getTime() + now.getTimezoneOffset() * 60000))
  // }

  

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
              <a className='portal-button' href='https://songcamp.mirror.xyz/' target="_blank" rel="noreferrer">
                GET PORTAL TICKET
              </a>
              <a className='portal-button' href='https://discord.gg/v6hj82yeaE' target="_blank" rel="noreferrer">
                ENTER THE PORTAL
              </a>
            </div>
            </div>
              {/* <MailChimpForm /> */}  
          <div className="powerBottom">
            <div className="logo">
              <a href="https://songcamp.mirror.xyz/" target="_blank" rel="noreferrer">
                <ElektraSatellite />
              </a>
            </div>
              Powered by <a href="https://twitter.com/songcamp_" target="_blank" rel="noreferrer">Songcamp</a>
          </div>
        </div>
      </div>
    );
  }

export default App;
