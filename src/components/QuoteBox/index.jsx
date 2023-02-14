import React from 'react';
import Button from '../Button';
import SocialButton from '../SocialButton';
import { CgTwitter } from "react-icons/cg";

import '../styles.css';

const QuoteBox = (props) => {
    return <div id="quote-box">
        <p id="text" style={{
            color: `#${props.color}`
        }} className='text'>" {props.quote.quote}</p>
        <p id="author" style={{
            color: `#${props.color}`
        }}>-{props.quote.author}</p>
        <br/><br/><br/><br/>
        <Button
            id="new-quote"
            type="button"
            style={{
                backgroundColor: `#${props.color}`
            }}
            onClick={props.onClick}
        >
            New Quote
        </Button>
        <SocialButton
            id="tweet-quote"
            style={{
                backgroundColor: `#${props.color}`
            }}
            href="twitter.com/intent/tweet"
        >
            <CgTwitter />
        </SocialButton>
    </div>
};

export default QuoteBox;