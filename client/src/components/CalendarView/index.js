import React, { Component } from "react";
import Calendar from 'react-calendar';
import './style.css';

class CalendarView extends Component {

  state = {
    date: new Date(),
    niceDate: '',
  }

  onChange = date => this.setState({ date })

  getNiceDate = (value) =>{
    this.setState({niceDate: `${value}`});
  };

  render() {
    return (
      <>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.getNiceDate}
          tileClassName='tiles'
        /> 
      <div>
        {this.state.niceDate.slice(0, 15)}
      </div>
      </>
    );
  };
  
}

export default CalendarView;
