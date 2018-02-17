import React from 'react'
import { shallow } from 'enzyme'

import App from '../../App';

describe('<App /> :: Test Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('<App /> :: Test Suite', () => {
    it('Should render WelcomeScene component', () => {
        expect(wrapper.find('WelcomeScene')).toHaveLength(1);
    });
    
  })
})