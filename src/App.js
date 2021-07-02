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
    let daysString = days.toString()
    let hoursString = pad(hours, 2)
    let minutesString = pad(minutes, 2)
    let secondsString = pad(seconds, 2)
    return <div className="countdown-text">{daysString}:{hoursString}:{minutesString}:{secondsString}</div>;
  }

  return (
    <div className="container">
      <video autoPlay="autoplay" loop="loop" muted className="video" >
        <source src="landscan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='content'>
          <div className='sub-content' >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(500)
                    .typeString('A portal is opening to another world.')
                    .pauseFor(1000)
                    .typeString('<br />')
                    .pauseFor(700)
                    .typeString('A world called Elektra')
                    .start()
                }}
                
                options={{
                  delay: 35
                }}
              />
              
              <Countdown 
                date={new Date(2021, 6, 8, 12, 0 , 0, 0, 0)}
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
