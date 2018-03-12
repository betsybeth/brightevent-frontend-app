import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { sinon } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import RegisterForm from '../../components/presentational/RegisterForm'


Enzyme.configure({ adapter: new Adapter() });

const props = {
  registerData:{
    name:'testname',
    email:'test@test.com',
    password:'12345678',
    confirm:'12345678'
  }
};


describe('<RegisterForm', () => {
  it('has two input', () => {
    const wrapper = shallow(<RegisterForm {...props} />);
    expect(wrapper.find('Input')).to.have.length(4);
  });
  it('has one row', () => {
    const wrapper = shallow(<RegisterForm {...props}/>);
    expect(wrapper.find('Row')).to.have.length(1);
  });
  it('renders four icons', () => {
    const wrapper = shallow(<RegisterForm {...props}/>);
    expect(wrapper.find('Icon')).to.have.length(4);
  });

});
