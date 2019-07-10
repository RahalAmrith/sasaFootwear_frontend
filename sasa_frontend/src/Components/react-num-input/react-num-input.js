import React, { Component } from "react";

import "./reactNumInput.css";

class reactNumInput extends Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      max: null,
      step: 1,

      value: null
    };

    this.containerStyles = {};
  }

  componentWillMount() {
    if (this.props.customContainerStyle != undefined) {
      this.containerStyles = this.props.customContainerStyle;
    }

    // setting Min
    if (this.props.min != undefined) {
      this.setState({
        min: this.props.min
      });
    }
    // setting Max
    if (this.props.min != undefined) {
      this.setState({
        min: this.props.min
      });
    }
    // setting step
    if (this.props.step != undefined) {
      this.setState({
        step: this.props.step
      });
    }
    // setting value
    if (this.props.value != undefined) {
      this.setState({
        value: this.props.value
      });
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleDec() {
    this.refs.numInput.stepDown(this.state.step);
    this.setState({
      value: this.refs.numInput.value
    });
  }

  handleInc() {
    this.refs.numInput.stepUp(this.state.step);
    this.setState({
      value: this.refs.numInput.value
    });
  }

  handleWheel(e) {
    if (e.deltaY < 0) {
      this.handleInc();
    } else if (e.deltaY > 0) {
      this.handleDec();
    }
  }

  componentDidUpdate() {
    // console.log(this.state.value);
    if (this.props.onChange != undefined) {
      this.props.onChange(this.state.value);
    }
  }

  render() {
    return (
      <div className="rni_main" style={this.containerStyles}>
        <button
          className={this.props.buttonClassName}
          className="rni_btn rni_dec"
          onClick={() => this.handleDec()}
        >
          -
        </button>
        <input
          className="rni_input"
          type="number"
          placeholder={this.props.placeholder}
          ref="numInput"
          defaultValue={this.state.value}
          min={this.state.min}
          max={this.state.max}
          onChange={event => this.handleChange(event)}
          onWheel={event => this.handleWheel(event)}
        />
        <button className="rni_btn rni_inc" onClick={() => this.handleInc()}>
          +
        </button>
      </div>
    );
  }
}

export default reactNumInput;
