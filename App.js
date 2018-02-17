// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native'

import * as constants from '@constants'
import { WelcomeScene } from '@scenes'

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
      <View style={styles.container}>
        <WelcomeScene welcomeText={constants.WELCOME_MESSAGE}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})

export default App;