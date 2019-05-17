import React, { useState } from 'react';
import TopQuotes from '../containers/quotes/TopQuotes';

export default function App() {
  const [clicks, updateQuotes] = useState(0);
  return (
    <>
      <button onClick={() => updateQuotes(clicks + 1)}>Top Quotes</button>
      <TopQuotes clicks={clicks} />
      {/* {quotes === 'to && <TopQuotes />} */}
    </>
  );
}
