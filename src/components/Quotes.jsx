import styled from "styled-components";
import { maxWidth } from "../global";

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);

  @media (max-width: ${maxWidth}px) {
    margin: 20px 0px 20px 0px;
    position: relative;
  }
`;

const Quote = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${maxWidth}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const QuoteSpan = styled.span`
  font-size: 25px;

  &:first-child {
    margin-right: 20px;

    @media (max-width: ${maxWidth}px) {
      margin: 0px;
    }
  }

  @media (max-width: ${maxWidth}px) {
    text-align: center;
    font-size: 1rem;
  }
`;

const Quotes = () => {
  const quotesArr = [
    {
      quote: "The way to get started is to quit talking and begin doing",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap",
      author: "Sheda Savage",
    },
  ];

  const randomIndex = Math.floor(Math.random() * quotesArr.length);

  const quotes = quotesArr[randomIndex];

  return (
    <Footer>
      <Quote>
        <QuoteSpan>{quotes.quote}</QuoteSpan>
        <QuoteSpan>-{quotes.author}-</QuoteSpan>
      </Quote>
    </Footer>
  );
};

export default Quotes;
