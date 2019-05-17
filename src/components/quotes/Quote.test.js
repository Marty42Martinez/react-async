import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('renders a Quote', () => {
    const quote = {
      image: 'path/to/image',
      character: 'Bender',
      quote: 'Bite my shiny metal, ass'
    };

    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
