import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';

import MyProvider from './MyProvider';
import Family from './Family';

export default class BasicApp extends Component {
  render() {
    return (
      <MyProvider>
        <App>
          <Title>Hello World</Title>
          <Family />
        </App>
      </MyProvider>
    );
  }
}
