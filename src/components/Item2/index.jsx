import React from 'react'
import './style.less'

class Item2 extends React.Component{
	render () {
		return (
			<div className="item2-wrap">
				<div className="skill">{this.props.skill}</div>
				<ul className="lists">
					<li>{this.props.spec1}</li>
					<li>{this.props.spec2}</li>
				</ul>
			</div>
		)
	}
}

export default Item2;