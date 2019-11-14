import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
// import './style.css';

class ReviewStore extends Component {
    state = {
        allReviews: [],
        item: 'newreviews'
    };

    refreshState = () => {
        this.setState({
            allReviews: []
        });
    };

    grabReviews = () => {
        API.getReviews(this.state.item, this.props.User.id, this.props.calendarDate).then(res => {
            console.log('reviews');
            console.log(res);
            this.setState({ allReviews: res.data.newreviews });
        }).catch(err => console.log(err));
    };

    loadReviews = () => {
    let interval = setInterval(()=> {
        this.grabReviews() }, 60000);
    return () => clearInterval(interval);
    }

    componentDidMount() {
        this.grabReviews();
        this.loadReviews();
    };
  

    render() {

        return (
        <div >
            <h3>Your memories</h3>
            <div>
                {this.state.allReviews ?
                this.state.allReviews.map(element => (
                <p key={element._id}> {element.family} {element.friends} {element.work} {element.study} {element.fun} {element.food} {element.sleep} {element.mood} {element.sport} {element.ideas}  {element.notes} {element.thanks}{element.date}</p>
                )) : null
                }
            </div>
        </div>
        );
    };

};

export default ReviewStore;