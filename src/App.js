import React, { useState } from 'react';
import { quotes } from './quotes';
import './App.css';
import QuoteBox from './components/QuoteBox';


function App() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const index = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
  const [quote, setQuote] = useState(quotes[index]);
  const onClickHandler = () => {
    const index = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
    setQuote(quotes[index]);
};
  return (
    <div className='wrapper' style={{
      backgroundColor: `#${randomColor}`
    }}>
      <div className='main'>
        <QuoteBox color={randomColor} onClick={onClickHandler} quote={quote}/>
      </div>
    </div>
  );
}

export default App;
