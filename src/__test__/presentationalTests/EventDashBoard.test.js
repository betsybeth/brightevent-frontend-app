import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventDashboard from '../../components/presentational/EventDashboard';


Enzyme.configure({ adapter: new Adapter() });
const props = {
  eventInfo: {
    name:'testevent',
    description:'awesome',
    category:'testCategory',
    date_of_event:'2018-12-4'
  },
};
  

describe('Renders the EventDashboard  component', () => {
  it('render divs ', () =>{
    const wrapper = shallow(<EventDashboard  {...props} />);
    expect(wrapper.find('div')).to.have.length(6);
  });
  it('renders one input ', () =>{
    const wrapper = shallow(<EventDashboard  {...props}/>);
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('renders one button ', () =>{
    const wrapper = shallow(<EventDashboard  {...props}/>);
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('renders two span ', () =>{
    const wrapper = shallow(<EventDashboard {...props}/>);
    expect(wrapper.find('span')).to.have.length(1);
  });
});