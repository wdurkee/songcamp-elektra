import logo from './logo.svg';
import './App.css';

import Typewriter from 'typewriter-effect';
import Countdown from 'react-countdown';



function App() {
  
  const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  } 

  const renderer = ({days, hours, minutes, seconds, total}) => {
    let daysString = pad(days, 2)
    let hoursString = pad(hours, 2)
    let minutesString = pad(minutes, 2)
    let secondsString = pad(seconds, 2)
    let msString = pad(total, 3)
    msString = msString.substr(msString.length - 3);

    return <div className="countdown-text">{daysString}:{hoursString}:{minutesString}:{secondsString}:{msString}</div>;
  }

  return (
    <div className="container">
      <video  preload="yes" playsInline autoPlay loop muted className="video" >
        <source src="https://i.imgur.com/xnxwypk.mp4" type="video/mp4" />
        {/* <source src="landscan.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>
      <div className='content'>
          <div className='sub-content' >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(500)
                    .typeString('A portal is opening to another world.')
                    .pauseFor(50)
                    .typeString('<br />')
                    .pauseFor(1500)
                    .typeString('A world called <i>Elektra</i>.')
                    .start()
                }}
                options={{
                  delay: 35
                }}
              />
              
              <Countdown 
                date={new Date('July 12, 2021 13:00:00')}
                intervalDelay={0}
                precision={3}
                renderer={renderer}  
              />
              

          </div>
        </div>
    </div>
  );
}

export default App;
