import axios from 'axios';



module.exports = function() {
    axios.get("http://quotes.rest/qod.json", {

    }).then(res => {
    this.setState({ quoteText: res.data.contents.quotes[0].quote, quoteAuthor: res.data.contents.quotes[0].author });
    }).catch(err => console.log(err));
};
