import React, { Component } from 'react';

class CreatureForm extends Component {
  render() {
    console.log('this.props:', this.props);
    
    return (
        <section>
          <h2>Add a Creature</h2>
          <form onSubmit={this.props.submitCreature}>
            <label htmlFor="in-name">Creature:</label>
            <input id="in-name" onChange={this.props.handleChangeFor('name')} value={this.props.newCreature.name}></input>
            <label id="in-origin">Originates:</label>
            <input id="in-origin" onChange={this.props.handleChangeFor('origin')} value={this.props.newCreature.origin}/>
            <input type="submit" value="Add Creature"></input>
          </form>
        </section>
    );
  }
}

export default CreatureForm;