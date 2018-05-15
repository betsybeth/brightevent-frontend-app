import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { sinon } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../../components/presentational/LoginForm';

Enzyme.configure({ adapter: new Adapter() });
const props = {
  logindata: {
    email:'test@test.com',
    password:'12345678'
  }
}; 

describe('Renders the LoginForm component', () =>{
  it('render one form', () =>{
    const wrapper = shallow(<LoginForm {...props} />);
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('has two inputs', () =>{
    const wrapper = shallow(<LoginForm {...props} />);
    expect(wrapper.find('input')).to.have.length(2);
  });
  it('renders heading one ', () =>{
    const wrapper = shallow(<LoginForm {...props}/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
  it('renders three paragraph ', () =>{
    const wrapper = shallow(<LoginForm {...props}/>);
    expect(wrapper.find('p')).to.have.length(3);
  });
  it('renders two labels ', () =>{
    const wrapper = shallow(<LoginForm {...props}/>);
    expect(wrapper.find('label')).to.have.length(2);
  });
});
