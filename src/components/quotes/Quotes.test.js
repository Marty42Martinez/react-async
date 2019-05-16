import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes component', () => {
  it('renders a Quotes', () => {
    const quotes = [
      { img: 'test', character: 'Fry', quote: 'hello' },
      { img: 'test2', character: 'Bender', quote: 'go away' }
    ];

    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
