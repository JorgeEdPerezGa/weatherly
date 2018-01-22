import React from 'react';
import App from '../App/App.js';
import CurrentWeather from '../Current/CurrentWeather.js';
import locations from '../../utility/Locations.js';
import Trie from '../Trie.js';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: new Trie(),
      suggestions: [],
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.populateCities = this.populateCities.bind(this);
    this.suggestCities = this.suggestCities.bind(this);
    this.classSwitch = this.classSwitch.bind(this);
    this.handleSuggestionsChange = this.handleSuggestionsChange.bind(this);
    this.searchButtonOnClick = this.searchButtonOnClick.bind(this);
  }

  componentDidMount() {
    this.populateCities(locations);
    this.classSwitch();
  }

  populateCities(array) {
    this.state.tree.populate(array);
  }

  suggestCities(word) {
    let userInput = this.state.tree.suggest(word);
    this.setState({
      suggestions: [...userInput],
    });
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
    if (e.target.value === '') {
      this.setState({
        suggestions: [],
      })
    }
    else if (e.target.value !== '') {
      this.suggestCities(e.target.value);
    }
  }

  onEnter(event) {
    event.persist();
    if (event.charCode == 13) {
      this.props.changeLocation(this.state.input);
      this.setState({
        input: ''
      })
    }
  }

  classSwitch() {
    return this.state.suggestions.length !== 0
           ? 'suggestions-visible'
           : 'suggestions-hidden'
  }

  handleSuggestionsChange(e) {
    this.setState({
      input: e.target.innerText,
    })
  }

  createListItems() {
    return this.state.suggestions.map((location, index) => {
      return (
        <li
          className='suggestion-listed'
          key={index}
          onClick={this.handleSuggestionsChange}>
            { location }
        </li>
      )
    })
  }

  searchButtonOnClick() {
    this.props.changeLocation(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div className='search-component-container'>
        <input type='text'
               className='search-bar'
               placeholder='Enter city and state or zip code...'
               onChange={this.handleChange}
               onKeyPress={this.onEnter}
               onKeyDown={this.clearSuggestions}
               value={this.state.input}
               />
        <ul className={this.classSwitch()}
              id='suggestion-box'>
          {
            this.createListItems()
          }
        </ul>
        <button
          onClick={() => this.searchButtonOnClick()}
          className='search-btn'>
          Search
        </button>
      </div>
    )
  }
}
