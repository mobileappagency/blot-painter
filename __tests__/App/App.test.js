import React from 'react'
import { shallow } from 'enzyme'

import App from '../../App';

describe('<App /> :: Test Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('<App /> :: Test Suite', () => {
    it('Should render Router instance', () => {
        expect(wrapper.find('.app-router').props().className).toContain('app-router');
    });
    
  })
})