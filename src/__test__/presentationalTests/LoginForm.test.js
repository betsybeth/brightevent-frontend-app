import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { sinon } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../../components/presentational/LoginForm'

Enzyme.configure({ adapter: new Adapter() });
const props = {
  email:'test@test.com',
  password:'12345678'
}

describe('Renders the LoginForm component', () =>{
  it('has one row', () =>{
    const wrapper = shallow(<LoginForm {...props} />)
    expect(wrapper.find('Row')).to.have.length(1)
  });
  it('has four inputs', () =>{
    const wrapper = shallow(<LoginForm {...props} />)
    expect(wrapper.find('Input')).to.have.length(2)
  })
  it('renders icons in the input', () =>{
    const wrapper = shallow(<LoginForm {...props}/>)
    expect(wrapper.find('Icon')).to.have.length(2)
  })
})
