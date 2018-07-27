import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieList from './movielist'

export default class MovieCard extends MovieList {
    constructor() {
        super() 
    }
    render() {
        return (
            <div className="card bg-info">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.content}</p>
                </div>
            </div>
        )
    }
};