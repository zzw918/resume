import React from 'react'

import protrait from '../../images/portrait.png'

import './style.less'


class Intro extends React.Component{
	render () {

		return (
			<div className="intro-wrap">
				<div className="portrait">
					<img src={protrait}/>
     			</div>
				<div className="name">WayneZhu</div>
				<div className="position">
				<span>
					前端开发工程师
				</span>
				</div>
			</div>
			)
	}
}

export default Intro; 