import React, { Component } from 'react'
import styled from 'styled-components'

const JumboStyle = styled.h1`
font-size = 10em;
`

export default class Jumbotron extends Component {
    render() {
        return (
        <div>
            <div className="row">
		        <div className="col-md-1">
		        </div>
                 <div className="col-md-10" id="product">
                    <h1>
				        PRODUCT
			        </h1>
                </div>
                <div className="col-md-1"></div>
	        </div>
	        <div className="row">
		        <div className="col-md-1">
		        </div>
                <div className="col-md-8" id="design">
                    <h1>
				        DESIGN
			        </h1>
                </div>
                <div className="col-md-1">
                    <br></br><br></br><br></br><br></br><u>Shop</u>
                </div>
	        </div>
        </div>
        )
    }
}
