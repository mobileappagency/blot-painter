import React from 'react';
import { shallow } from 'enzyme';

import { PainterScene } from '../../../src/scenes';

describe('<PainterScene /> :: Test Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PainterScene />);
  });

  it('Renders the action TouchableOpacity button', () => {
      expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
  })
})