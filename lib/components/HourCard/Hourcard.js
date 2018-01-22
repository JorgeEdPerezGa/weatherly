import React, { Component } from 'react';
import DataProps from '../DataProps';

export default class HourCard extends Component {

  constructor() {
    super();
    this.createHourCards = this.createHourCards.bind(this);
  }

  createHourCards() {
    let objectData = this.props.currentObservation[0];
    return objectData.hours.map( (hour, index) => {
      while(index < 7) {
        return (
          <div
            className='seven-hour-condition-box'
            key={index}>
            <p className='seven-hour-time'>{hour.time}</p>
            <p className='seven-hour-temperature'>{hour.temp}</p>
            <img
              className='icon'
              src={this.props.hourIcon(hour.condition, hour.hour)}/>
              <p className='seven-hour-condition'>{hour.condition}</p>
            </div>
          )
      }
    })
  }

  render() {
   let objectData = this.props.currentObservation[0];
   if(!objectData) {
     return(
       <div>

       </div>
     )
   };

    return(
      <div className='hourly'>
        {
          this.createHourCards()
        }
      </div>
    )
  }
}
