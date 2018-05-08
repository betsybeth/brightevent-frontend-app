import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { sinon } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import EventForm from '../../components/presentational/EventForm';

Enzyme.configure({ adapter: new Adapter() });
const props = {
  eventInfo: {
    name:'testevent',
    description:'awesome',
    category:'testCategory',
    date_of_event:'2018-12-4'
  }
};
  

describe('Renders the EventForm component', () => {
  it('render one form', () =>{
    const wrapper = shallow(<EventForm {...props} />);
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('has three inputs', () =>{
    const wrapper = shallow(<EventForm {...props} />);
    expect(wrapper.find('input')).to.have.length(3);
  });
  it('renders heading two ', () =>{
    const wrapper = shallow(<EventForm {...props}/>);
    expect(wrapper.find('h2')).to.have.length(1);
  });
  it('renders six br ', () =>{
    const wrapper = shallow(<EventForm {...props}/>);
    expect(wrapper.find('br')).to.have.length(6);
  });
  it('renders six options ', () =>{
    const wrapper = shallow(<EventForm {...props}/>);
    expect(wrapper.find('option')).to.have.length(6);
  });
  it('renders one select ', () =>{
    const wrapper = shallow(<EventForm {...props}/>);
    expect(wrapper.find('select')).to.have.length(1);
  });
  it('renders one textarea ', () =>{
    const wrapper = shallow(<EventForm {...props}/>);
    expect(wrapper.find('textarea')).to.have.length(1);
  });
});