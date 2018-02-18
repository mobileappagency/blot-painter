// @flow
import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '@components/ButtonsGroup/Styles';
import * as constants from '@constants';

type Props = {
    styles: object,
    title: string,
    onPress: () => Function
}

function navigateTo(route) {
  console.log(route);
}

export default function ButtonsGroup (props: Props) {
  return (
    <View style={styles.container}>
        <Button
          className="start-btn"
          onPress={() => navigateTo(constants.PAINTER_ROUTE)}
          style={styles.button}
          title="Start"
          onPress={() => {}}
        />
        <Button
          className="library-btn"
          style={styles.button}
          title="Library"
          onPress={() => {}}
        />
        <Button
          className="info-btn"
          style={styles.button}
          title="Info"
          onPress={() => {}}
        />      
    </View>
  )
}
