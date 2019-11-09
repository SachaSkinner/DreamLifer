import React, { Component } from "react";
import Calendar from 'react-calendar';
import './style.css';

class CalendarView extends Component {

  state = {
    date: new Date(),
    niceDate: '',
  };

  onChange = date => {
    this.setState({ date });
  }

  getNiceDate = (value) =>{
    this.setState({niceDate: `${value}`});
    this.props.handleDashState('calendarDate', (`${value}`).slice(0,15))
  };

  componentDidMount() {
    this.getNiceDate(this.state.date);
  };

  render() {
    return (
      <>
      <div className="calanderDiv">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.getNiceDate}
          tileClassName='tiles'
        />
      </div>
      </>
    );
  };
  
};

export default CalendarView;
