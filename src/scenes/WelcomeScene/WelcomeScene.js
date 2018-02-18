// @flow
import React from 'react';
import { View, Text, Button } from 'react-native';

import * as constants from '@constants'
import { ButtonsGroup } from '@components';
import { styles } from '@scenes/WelcomeScene/Styles';

type Props = {
  welcomeText: string,
  styles: object
}

export default function WelcomeScene (props: Props) {
  return (
    <View style={styles.container}>
      <Text>
        {constants.WELCOME_MESSAGE}
      </Text>
      <ButtonsGroup />
    </View>
  )
}
