// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ClickableCircle } from '@components';

type Props = {
    fillElement: () => Function
}

let textComponent = <Text>+</Text>;

export default function PainterScene (props: Props) {
  return (
    <View>
        <ClickableCircle fillElement={textComponent} />
    </View>
  )
}
