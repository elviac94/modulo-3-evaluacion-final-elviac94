import React from 'react';
import '../stylesheet/App.scss';
import fetchResult from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: ''
    }
    this.handleInput = this.handleInput.bind(this)
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

  render() {
    const { data, inputValue } = this.state;
    return (
      <div className="App">
        <Filters
          inputValue={inputValue}
          handleInput={this.handleInput}
        />
        <CharacterList
          dataList={data}
          inputValue={inputValue}
        />
      </div>
    );
  }
}

export default App;
