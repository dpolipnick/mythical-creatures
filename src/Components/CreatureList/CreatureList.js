import React, { Component } from 'react';

class CreatureList extends Component {

  render() {
    return (
        <section>
          <h2>All Creatures</h2>
          <ul>
            {this.props.list.map((creature, index) => 
            <li key={index}>The {creature.name} originates from {creature.origin}.</li>
            )
            }
          </ul>
        </section>
    );
  }
}

export default CreatureList;
