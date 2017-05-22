import React, { Component } from 'react';
import Timr from 'timrjs';

export default class BasicTimrExample extends Component {
  constructor() {
    super();

    this.state = {
      time: '1:00',
      progress: '0%',
    };
  }

  componentDidMount() {
    this.timer = Timr('00:60')
       .ticker(({ formattedTime, percentDone }) => {
         this.setState({
           time: formattedTime,
           progress: `${percentDone}%`,
         });
       })
       .onStop((self) => {
         this.setState({
           time: self.getFt(),
           progress: '0%',
         });
       });
  }

  render() {
    return (
      <div>
        <div className="time">{this.state.time}</div>
        <div className="progress">
          <span style={{ width: this.state.progress }} />
        </div>
        <div className="controls">
          <button
            onClick={() => this.timer.start()}
            className="start btn btn-sm btn-success"
          >
                  Start
               </button>
          <button
            onClick={() => this.timer.pause()}
            className="pause btn btn-sm btn-default"
          >
                  Pause
               </button>
          <button
            onClick={() => this.timer.stop()}
            className="stop btn btn-sm btn-danger"
          >
                  Stop
               </button>
        </div>
      </div>
    );
  }
}
