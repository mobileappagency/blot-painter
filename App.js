// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Router } from '@services';

type State = {
  text: string
}

type Props = {}


class App extends React.Component<Props, State> {
  constructor (props: Object) {
    super(props)
  }

  render () {
    return (
      <Router className="app-router" />
    )
  }
}

export default App;