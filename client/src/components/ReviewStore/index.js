import React, { Component } from "react";
import API from '../../utils/API';

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
    handleRemove = event => {
        API.removeReview(event.target.getAttribute('dataid')).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        const floatRight = {
            float: 'right'
        } 

        return (
            <div >
                <h3>My memories </h3>
                <div style={{overflowWrap: 'break-word'}}>
                    {this.state.allReviews.length !== 0 ?
                        this.state.allReviews.map(element => (
                            <p key={element._id}> {element.date}  <span style={floatRight} className='remove' dataid={element._id} onClick={this.handleRemove}>X</span><br></br> <br></br><strong>Family:</strong> {element.family} <br></br> <strong>Friends:</strong> {element.friends} <br></br> <strong>Work: </strong>{element.work}<br></br> <strong>Study:  </strong>{element.study}<br></br> <strong>Fun: </strong> {element.fun}<br></br> <strong>Food: </strong> {element.food}<br></br> <strong>Sleep: </strong> {element.sleep} <br></br> <strong>Mood:</strong> {element.mood}<br></br> <strong>Sport:</strong> {element.sport}<br></br><strong>Ideas:</strong>  {element.ideas} <br></br> <strong>Notes:</strong> {element.notes}<br></br> <strong> I am thankful for:  </strong>{element.thanks}<hr></hr></p>
                            
                           
                        )) 
                       
                    : <h5>You haven't added any reviews for this date...</h5>
                        }
                </div>
            </div>
        );
    };

};

export default ReviewStore;