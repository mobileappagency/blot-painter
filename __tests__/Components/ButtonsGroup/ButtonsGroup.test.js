import React from 'react';
import { shallow } from 'enzyme';

import { styles } from '../../../src/components/ButtonsGroup/Styles';
import { ButtonsGroup } from '../../../src/components';

describe('<ButtonsGroup /> :: Elements Test Suite', () => {
    let titlesArray = ["Start", "Library", "Info"];
    let wrapper;
    let findButton;

    beforeEach(() => {
        wrapper = shallow(<ButtonsGroup />);
        findButton = wrapper.find('Button');
    });

    it('Renders three controll buttons', () => {
        expect(findButton).toHaveLength(3);
    });

    it('Has button with title of "start", "library" and "info"', () => {
        wrapper.find('View').children().forEach((each, index) => {
            expect(each.props().title).toEqual(titlesArray[index]);
        });
    });

    it('Has defined styles', () => {
        findButton.forEach((each) => {
            expect(each.props().style).toEqual(styles.button);
        });
    });
  })