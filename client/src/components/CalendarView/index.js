import React, { Component } from "react";
import Calendar from 'react-calendar';
import CalendarDateGrab from '../../helpers/CalendarDateGrab';
import './style.css';

class CalendarView extends Component {

  state = {
    date: new Date(),
    niceDate: '',
  };

  onChange = date => this.setState({ date });

  getNiceDate = (value) =>{
    this.setState({niceDate: `${value}`});
  };

  render() {
    return (
      <>
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.getNiceDate}
          tileClassName='tiles'
        />
      </div>
      <div>
        {this.state.niceDate.slice(0, 15)}
      </div>
      </>
    );
  };
  
};

export default CalendarView;
