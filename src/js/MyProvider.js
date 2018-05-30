import React, { Component } from 'react';
import PropTypes from 'prop-types';

// create context
export const MyContext = React.createContext();
// create Provider
class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gurden',
      age: 42,
      cool: true
    };
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }
      }>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

MyProvider.propTypes = {
  children: PropTypes.object,
};

MyProvider.defaultProps = {
  children: {}
};

export default MyProvider;
