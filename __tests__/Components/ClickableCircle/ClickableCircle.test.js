import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import { ClickableCircle } from '../../../src/components';
import { styles } from '../../../src/components/ClickableCircle/Styles';

describe('<ClickableCircle /> :: Test Suite', () => {
    let wrapper, clickableWrapper, filledWith;

    beforeEach(() => {
        filledWith = <Text>+</Text>;
        wrapper = shallow(<ClickableCircle fillElement={filledWith} />);
        clickableWrapper = wrapper.find('TouchableOpacity');
    });

    it('Renders circle that is wrapped around TouchableOpacity teg', () => {
        expect(clickableWrapper).toHaveLength(1);
    });

    it('Renders circle that is wrapped around TouchableOpacity teg', () => {
        expect(clickableWrapper.props().children).toBe(filledWith);
    });
  })