import React, { Component } from 'react'

export default class Picture extends Component {
    render() {
        return (
            <div className="row">
		        <div className="col-md-1">
		        </div>
                <div className="col-md-10">
                    <img src="./i1.jpg" className="img-fluid"/>
                </div>
                <div className="col-md-1"></div>
	        </div>
        )
    }
}
