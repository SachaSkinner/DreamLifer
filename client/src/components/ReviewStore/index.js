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
        API.getItems(this.state.item, this.props.User.id, this.props.calendarDate).then(res => {     
            this.setState({ allReviews: res.data.newreviews });
        }).catch(err => console.log(err));
    };

    loadReviews = () => {
        let interval = setInterval(() => {
            this.grabReviews()
        }, 1000);
        return () => clearInterval(interval);
    }

    componentDidMount() {
        this.grabReviews();
        this.loadReviews();
    };

    render() {

        return (
            <div >
                <h3>My memories </h3>
                <div>
                    {this.state.allReviews.length !== 0 ?
                        this.state.allReviews.map(element => (
                            <p key={element._id}> {element.date} <br></br>Family: {element.family} <br></br>Friends: {element.friends} <br></br>Work: {element.work}<br></br>Study:  {element.study}<br></br>Fun:  {element.fun}<br></br>Food:  {element.food}<br></br>Sleep:  {element.sleep} <br></br>Mood: {element.mood}<br></br> Sport: {element.sport}<br></br> Ideas: {element.ideas} <br></br> Notes: {element.notes}<br></br> I am thankful for:  {element.thanks}<br></br></p>
                        )) : <h5>You haven't added any reviews for this date...</h5>
                        }
                </div>
            </div>
        );
    };

};

export default ReviewStore;