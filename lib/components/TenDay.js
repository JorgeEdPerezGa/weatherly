import React, { Component } from 'react';
import DataProps from './DataProps';
import App from './App/App.js';

export default class TenDay extends React.Component {
  constructor(props) {
    super(props)
    this.setIcon = this.setIcon.bind(this);
  }

  setIcon(condition) {
    if(condition === 'Light Rain') {
      return '../assets/lightrain.svg';
    }
    if(condition === 'Light Snow') {
      return '../assets/lightsnow.svg';
    }
    if(condition === 'Scattered Clouds') {
      return '../assets/scatteredclouds.svg';
    }
    if(condition === 'Fog') {
      return '../assets/fog.svg';
    }
    if(condition === 'Haze') {
      return '../assets/haze.svg';
    }
    if(condition === 'Snow Showers') {
      return '../assets/snowshowers.svg';
    }
    if(condition === 'Overcast') {
      return '../assets/overcast.svg';
    }
    if(condition === 'Rain') {
      return '../assets/rain.svg';
    }
    if(condition === 'Snow') {
      return '../assets/snowing.svg';
    }
    if(condition === 'Chance of Rain') {
      return '../assets/partlyrainy.svg';
    }
    if(condition === 'Chance of a Thunderstorm') {
      return '../assets/thunderstormchance.svg';
    }
    if(condition === 'Clear') {
      return '../assets/sunny.svg'
    }
    if(condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
    if(condition === 'Thunderstorm') {
      return '../assets/thunderstorm.svg';
    }
    if(condition === 'Mostly Cloudy') {
      return '../assets/cloudy.svg';
    }
    if(condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
  }

render() {
  let objectData = this.props.currentObservation;
  if(!objectData){
    return(
      <div></div>
    )
  }

  return (
      <div className='ten-day-container'>
        {
        objectData[0].dailyInfo.map( (day, index) => {
          while(index === 0) {
            return (
              <article className='day-card' key={index}>
                <section className='ten-day-icon'>
                  <img className='icon' src={this.setIcon(day.condition)}/>
                </section>

                <p className='ten-day'>Today</p>
                <p className='day-high'>H: {day.high}</p>
                <p className='day-low'>L: {day.low}</p>
              </article>
            )
          }
            return (
              <article className='day-card' key={index}>
                <section className='ten-day-icon'>
                  <img className='icon' src={this.setIcon(day.condition)}/>
                </section>

                <p className='ten-day'>{day.weekday}</p>
                <p className='day-high'>H: {day.high}</p>
                <p className='day-low'>L: {day.low}</p>
              </article>
            )
        })
       }
      </div>
    )
  }
}
