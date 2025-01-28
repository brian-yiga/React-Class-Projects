import React, { useState } from 'react'


const QuoteOfTheDay = () => {
    // assign an array of predefined quotes
    // const quotes = [
    //     {
    //         "quote": "Be yourself; everyone else is already taken.",
    //         "author": "Peter Wilde"
    //     },
    //     {
    //         "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
    //         "author": "Oscar Wilde"
    //     },
    //     {
    //         "quote": "True friends stab you in the front.",
    //         "author": "Lillian Wilde"
    //     },
    //     {
    //         "quote": "Women are made to be Loved, not understood.",
    //         "author": "Brian Wilde"
    //     },
    //     {
    //         "quote": "Be the change that you wish to see in the world.",
    //         "author": "Mahatma Gandhi"
    //     }
    // ]
    // //Get a quote that will be the default value when the page/App is opened
    // const getRandomQuote = () => quotes[Math.floor(Math.random()*quotes.length)]
    // //set useState 
    // const [quoteHeading, setQuoteHeading] = useState(getRandomQuote())

    // //get a function that will get the quote
    // const getQuote = () => {
    //     const newQuote = getRandomQuote()
    //     setQuoteHeading(newQuote)
    // }

    const apiUrl = fetch('https://zenquotes.io/api/quotes/');
    const [quoteHeading, setQuoteHeading] = useState({});

    const getQuote = async () => {
        try {
            const response = await fetch(apiUrl);
            const result = await response.json();
            // Select a random quote from the fetched quotes
            const randomQuote = result.quotes[Math.floor(Math.random() * result.quotes.length)];
            setQuoteHeading(randomQuote);
          } catch (error) {
            console.error('Error fetching the quotes:', error);
          }
    }
 

  return (
    //get a function that will get the random quote and remove the console.log
    <div className='quoteContainer'>
        <h1> Your Daily Quote</h1>
        <h3>"Click to get your Quote of the Day"</h3>
        <h2>"{quoteHeading.quote}"</h2>
        <p id='author'>{quoteHeading.author}</p>
        <button onClick={getQuote}>Click to Get Quote</button>
        
    </div>
  )
}


export default QuoteOfTheDay;