import React, { Component } from "react";

export default class Movie extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="card m-1">
        <div className="card-body text-left">
          <p className="card-text">{this.props.title}</p>
          <p className="card-text">{this.props.director}</p>
        </div>
      </div>
    );
  }
}
