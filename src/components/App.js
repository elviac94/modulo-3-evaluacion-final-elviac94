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
  }

  componentDidMount() {
    fetchResult()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  handleInput(value) {
    this.setState({
      inputValue: value
    })
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
    const { data, inputValue } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
          <Filters
            inputValue={inputValue}
            handleInput={this.handleInput}
          />
          <CharacterList
            dataList={data}
            inputValue={inputValue}
          />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
