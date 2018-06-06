/* global describe it:true */
import React from 'react'; // eslint-disable-line no-unused-vars
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { sinon } from 'sinon'; // eslint-disable-line no-unused-vars
import Adapter from 'enzyme-adapter-react-16';
import RegisterForm from '../../components/presentational/RegisterForm';




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
  let wrapper;
  it('render one form', () => {
    wrapper = shallow(<RegisterForm {...props} />);
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('has four inputs', () => {
    const wrapper = shallow(<RegisterForm {...props}/>);
    expect(wrapper.find('input')).to.have.length(4);
  });
  it('has four labels', () => {
    const wrapper = shallow(<RegisterForm {...props}/>);
    expect(wrapper.find('label')).to.have.length(4);
  });
  it('has one h2', () => {
    const wrapper = shallow(<RegisterForm {...props}/>);
    expect(wrapper.find('h2')).to.have.length(1);
  });  
  it('has two paragraph', () => {
    const wrapper = shallow(<RegisterForm {...props}/>);
    expect(wrapper.find('p')).to.have.length(2);
  });   
  it('has four labels', () => {
    const wrapper = shallow(<RegisterForm {...props}/>);
    expect(wrapper.find('label')).to.have.length(4);   
  });
  it('has four br', () => {
    const wrapper = shallow(<RegisterForm {...props}/>);
    expect(wrapper.find('br')).to.have.length(4);   
  });

});
