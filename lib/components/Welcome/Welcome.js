import React from 'react';
import Search from '../Search/Search.js';
import styles from '../../../styles/Doc.css';

const Welcome = ({ changeLocation }) => (
  <section className='welcome-container'>
    <video poster='../../assets/thunderstorm5.mp4' className='background-video'
           playsInline autoPlay muted loop>
        <source src='../../assets/thunderstorm5.mp4' type='video/mp4'></source>
    </video>
    <article className='input-container'>
      <h1>WEATHRLY</h1>
      <p className='author-text'>By Hector A. Sanchez & Jorge E. Perez</p>
      <Search
        className='search-bar'
        changeLocation={changeLocation} />
    </article>
  </section>
);

export default Welcome;
