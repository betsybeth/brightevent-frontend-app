/* global describe it:true */

import React from 'react'; // eslint-disable-line no-unused-vars
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { sinon } from 'sinon'; // eslint-disable-line no-unused-vars
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../../components/presentational/SearchBar';


Enzyme.configure({ adapter: new Adapter() });

const props = {
  eventInfo:{
    name:'testname',
  }
};


describe('<SearchBar', () => {
  it('render one div', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('has one form ', () => {
    const wrapper = shallow(<SearchBar {...props}/>);
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('has one input', () => {
    const wrapper = shallow(<SearchBar {...props}/>);
    expect(wrapper.find('input')).to.have.length(1);
  });
});