import React, { Component } from 'react';
import DataProps from '../DataProps';
import Search from '../Search/Search.js';
import HourCard from '../HourCard/Hourcard.js';

export default class currentWeather extends Component {
  constructor() {
    super();
  }

  hourIcon(condition, hour) {
    if (condition === 'Light Rain') {
      return '../assets/lightrain.svg';
    }
    if (condition === 'Fog') {
      return '../assets/fog.svg';
    }
    if (condition === 'Light Snow') {
      return '../assets/lightsnow.svg';
    }
    if (condition === 'Scattered Clouds') {
      return '../assets/scatteredclouds.svg';
    }
    if (condition === 'Haze') {
      return '../assets/haze.svg';
    }
    if (condition === 'Chance of Rain') {
      return '../assets/partlyrainy.svg';
    }
    if (condition === 'Rain') {
      return '../assets/rain.svg';
    }
    if (condition === 'Snow') {
      return '../assets/snowing.svg';
    }
    if (condition === 'Snow Showers') {
      return '../assets/snowshowers.svg';
    }
    if (condition === 'Chance of a Thunderstorm') {
      return '../assets/thunderstormchance.svg';
    }
    if (condition === 'Clear') {
      let day = [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
      for(let i = 0; i < day.length; i++) {
        return hour !== i
        ? '../assets/sunny.svg'
        : '../assets/clearnight.svg';
      }
    }
    if (condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
    if (condition === 'Thunderstorm') {
      return '../assets/thunderstorm.svg';
    }
    if (condition === 'Mostly Cloudy') {
      return '../assets/cloudy.svg';
    }
    if (condition === 'Overcast') {
      return '../assets/overcast.svg';
    }
    if (condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
  }

  render() {
    let objectData = this.props.currentObservation;
    if(!objectData) {
      return(
        <div>

        </div>
      )
    };

    return (

      <section className='section-left'>
        <Search changeLocation={this.props.changeLocation} />
        <article className='weather-card'>

          <p className='city'>{objectData[0].city}</p>
          <p className='description'>{objectData[0].description}</p>

          <img
            className='main-icon'
            src={this.hourIcon(objectData[0].condition, objectData[0].hour)}/>

          <article className='temperature-box'>
            <p className='low'>L: {objectData[0].low}</p>
            <p className='current'>Curr: {objectData[0].temp}</p>
            <p className='high'>H: {objectData[0].high}</p>
          </article>

          <p className='summary'>{objectData[0].summary}</p>

          <HourCard
            hourIcon={this.hourIcon}
            currentObservation={this.props.currentObservation} />

        </article>
      </section>
    )
  }
}
