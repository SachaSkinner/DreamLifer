import React, { Component } from "react";
import axios from 'axios';
import QuotesApi from '../components/QuotesApi';

class QuotesRequest extends Component {
    state = {
        quoteText: '',
        quoteAuthor: ''
    };

    getQuotes() {
        axios.get("http://quotes.rest/qod.json", {})
            .then(res => {
                this.setState({ quoteText: res.data.contents.quotes[0].quote, quoteAuthor: res.data.contents.quotes[0].author });
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.getQuotes();
    };

    render() {
        return (
            <QuotesApi key={this.state.quoteText + this.state.quoteAuthor }>
                <p>{this.state.quoteText}</p>
                <p>{this.state.quoteAuthor}</p>
            </QuotesApi>
        );
    };
};

export default QuotesRequest;

