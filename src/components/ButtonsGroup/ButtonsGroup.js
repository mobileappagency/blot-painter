// @flow
import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '@components/ButtonsGroup/Styles';

type Props = {
    styles: object,
    title: string,
    onPress: () => Function
}

export default function ButtonsGroup (props: Props) {
  return (
    <View style={styles.container}>
        <Button
          style={styles.button}
          title="Start"
          onPress={() => {}}
        />
        <Button
          style={styles.button}
          title="Library"
          onPress={() => {}}
        />
        <Button
          style={styles.button}
          title="Info"
          onPress={() => {}}
        />      
    </View>
  )
}
