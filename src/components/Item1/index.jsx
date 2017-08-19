import React from 'react'

import './style.less'

class Item1 extends React.Component{
	render () {
		return (
			<div className="item1-wrap">
				<div className="info">
					<span className="time">{this.props.time}</span>
					<span className="company">{this.props.company}</span>
				</div>
				<p className="position">{this.props.position}</p>
				<p className="desc">
					{this.props.desc}
				</p>
			</div>
			)
	}
}

export default Item1;