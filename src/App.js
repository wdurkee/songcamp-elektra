import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Portal.css';

import Portal from './Portal'
import Keys from './Keys'


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
    <Router>
      <Switch>
          <Route path="/keys">
            <Keys />
          </Route>
          <Route path="/">
            <Portal />
          </Route>
        </Switch>
    </Router>
    );
  }

export default App;
