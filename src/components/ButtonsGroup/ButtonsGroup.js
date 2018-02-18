// @flow
import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '@components/ButtonsGroup/Styles';
import { routes } from '@constants';

type Props = {
    styles: object,
    title: string,
    onPress: () => Function
}

export default function ButtonsGroup (props: Props) {
  return (
    <View style={styles.container}>
        <Button
          className="start-btn"
          onPress={() => props.navigateTo(props, routes.Painter)}
          style={styles.button}
          title="Start"
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
