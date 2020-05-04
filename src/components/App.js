import React from 'react';
import '../stylesheet/App.scss';
import fetchResult from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: '',
      isFemale: false,
      isMale: false
      
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleGender = this.handleGender.bind(this);
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
        inputValue: info
      })
    }
  }

  handleInput(value) {
    this.setState({
      inputValue: value
    })
  }

  handleGender(idGender){
    if(idGender==="Female"){
      this.setState(prevState=>{
        return{
          isFemale: !prevState.isFemale
        }
      })
    } else{
      this.setState(prevState=>{
        return{
          isMale: !prevState.isMale,
        }
      })

    }
    
  }

  componentDidUpdate() {
    localStorage.setItem('Info', JSON.stringify(this.state.inputValue))
  }

  applyFilters() {
    
    const { data, inputValue, isFemale, isMale } = this.state
    return data
      .filter(characterObj => inputValue === '' || characterObj.name.toLowerCase().includes(inputValue.toLowerCase()))
      .filter(characterObj => !isFemale || ( isFemale && characterObj.gender ==='Female'))
      .filter(characterObj => !isMale || ( isMale && characterObj.gender ==='Male'))
  }

  renderCharacterDetail(props) {
    const urlId = props.match.params.id;
    const allCharacters = this.state.data;
    const users = allCharacters.find(user => user.id === parseInt(urlId))
    if (users) {
      return <CharacterDetail characterItem={users} />
    } else {
      return <p>El personaje que buscas no existe</p>
    }
  }

  render() {
    const { inputValue, isFemale, isMale } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header />
            <Filters
              inputValue={inputValue}
              isFemale={isFemale}
              isMale={isMale}
              handleInput={this.handleInput}
              handleGender={this.handleGender}
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
