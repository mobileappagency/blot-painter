import React from 'react';
import { shallow } from 'enzyme';

import * as constants from '../../../src/constants';
import { WelcomeScene } from '../../../src/scenes';

describe('<WelcomeScene /> :: Test Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WelcomeScene welcomeText={constants.WELCOME_MESSAGE} />);
  });

  it('Shows the welcome message', () => {
    expect(wrapper.find('Text').props().children).toEqual(constants.WELCOME_MESSAGE);
  });

  it('Renders single instance of ButtonsGroup components', () => {
    expect(wrapper.find('ButtonsGroup')).toHaveLength(1);
  });

  describe('<Text /> :: Test Suite', () => {
    it('Contains Text element', () => {
      expect(wrapper.find('Text')).toHaveLength(1);
    });


  });
})