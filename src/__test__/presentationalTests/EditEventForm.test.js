/* global describe it:true */
import React from 'react'; // eslint-disable-line no-unused-vars
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditEventForm from '../../components/presentational/EditEventForm';

Enzyme.configure({ adapter: new Adapter() });
const props = {
  eventInfo: {
    name:'testevent',
    description:'awesome',
    category:'testCategory',
    date_of_event:'2018-12-4',
    location:'nairobi'
  }
};
  

describe('Renders the EditEventForm component', () => {
  it('render one form', () =>{
    const wrapper = shallow(<EditEventForm {...props} />);
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('has three inputs', () =>{
    const wrapper = shallow(<EditEventForm {...props} />);
    expect(wrapper.find('input')).to.have.length(4);
  });
  it('renders heading two ', () =>{
    const wrapper = shallow(<EditEventForm {...props}/>);
    expect(wrapper.find('h2')).to.have.length(1);
  });
  it('renders six br ', () =>{
    const wrapper = shallow(<EditEventForm {...props}/>);
    expect(wrapper.find('br')).to.have.length(6);
  });
  it('renders one textarea ', () =>{
    const wrapper = shallow(<EditEventForm {...props}/>);
    expect(wrapper.find('textarea')).to.have.length(1);
  });
});