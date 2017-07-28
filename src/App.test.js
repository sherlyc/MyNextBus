import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('the environment', () => {
  it('works, hopefully', () => {
    expect(true).toEqual(true);
  });
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />)
  const welcome = <h2>Welcome to React</h2>
  expect(wrapper.contains(welcome)).toEqual(true)
})
