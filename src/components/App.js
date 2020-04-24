import React from 'react';
import '../stylesheet/App.scss';
import fetchResult from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
  }

  componentDidMount() {
    fetchResult()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
    const info = JSON.parse(localStorage.getItem('Info'))
    if (info !== null) {
      this.setState({
        inputValue: info.inputValue
      })
    }
  }

  handleInput(value) {
    this.setState({
      inputValue: value
    })
  }

  componentDidUpdate() {
    localStorage.setItem('Info', JSON.stringify(this.state.inputValue))
  }

  applyFilters() {
    const { data, inputValue } = this.state
    return data
      .filter(characterObj => inputValue === '' || characterObj.name.toLowerCase().includes(inputValue.toLowerCase()))
  }

  renderCharacterDetail(props) {
    const urlId = props.match.params.id;
    const allCharacters = this.state.data;
    for (let character of allCharacters) {
      if (character.id === parseInt(urlId)) {
        return <CharacterDetail characterItem={character} />
      }
    }
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Filters
              inputValue={inputValue}
              handleInput={this.handleInput}
            />
            <CharacterList
              dataList={this.applyFilters()}
              inputValue={inputValue}
            />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
