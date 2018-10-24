import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import CreatureList from '../CreatureList/CreatureList';
import CreatureForm from '../Form/CreatureForm';

class App extends Component {

  state={
    newCreature: {
      name: '',
      origin: '',
    },
    creatureList: [],
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        [propertyName]: event.target.value,
      }
    })
  }

  submitCreature = (event) => {
    event.preventDefault();
    console.log('Saving new creature', this.state.newCreature);
    this.setState({
      newCreature: {
        name: '',
        origin: '',
      },
      creatureList: [...this.state.creatureList, this.state.newCreature],
    })
  }


  render() {
    return (
      <div>
        <Header />
        <CreatureForm handleChangeFor={this.handleChangeFor}
        newCreature={this.state.newCreature}
        submitCreature={this.submitCreature}/>
        <CreatureList list={this.state.creatureList}/>
      </div>
    );
  }
}

export default App;
