import React from 'react';
import '../stylesheet/App.scss';
import fetchResult from '../services/Fetch';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: []
    }
  }

  componentDidMount(){
    fetchResult()
    .then(data =>{
      console.log(data.results)
      this.setState({
        data: data.results
      })
    })

  }

  render() {
    const { data } =this.state;
    return (
      <div className="App">
        hola
        <CharacterList
        dataList={data}
        />
      </div>
    );
  }
}

export default App;
