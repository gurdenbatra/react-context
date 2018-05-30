import React, { Component } from 'react';

import { MyContext } from './MyProvider';

class Person extends Component {
  render() {
    return (
      <div className='person'>
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>
              age++
              </button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Person;
