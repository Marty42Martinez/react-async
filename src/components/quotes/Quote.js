import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }) {
  return (
    <section>
      <img src={quote.image}/>
      <p>{quote.character}</p>
      <p>{quote.quote}</p>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    img: PropTypes.string,
    character: PropTypes.string,
    quote: PropTypes.quote
  }).isRequired
};


export default Quote;
