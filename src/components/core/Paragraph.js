import React, { Component } from 'react'

export default class Paragraph extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-1"></div>
		        <div className="col-md-3">
			        <h2>
                        OFFICIAL<br></br>
                        FINALIST<br></br>
                        AT ETSY<br></br>
                        DESIGN AWARDS<br></br>
                    </h2>
                    <br></br>
                    <p>Shop new arrivals</p>			
		        </div>
		        <div className="col-md-3">
                    <p>
                    Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
                    </p>
		        </div>
		        <div className="col-md-3">
                    <p>
                        Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
                    </p>
		        </div>
                <div className="col-md-1"></div>
	        </div>
        )
    }
}
