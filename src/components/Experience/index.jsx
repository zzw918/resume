import React from 'react'

import Item1 from '../Item1'
import Title from '../Title'

import './style.less'

class Experience extends React.Component{

	render () {
		return (
			<div className="experience-wrap">
				<Title title="实习经历"/> 
				<Item1 time="2017-01-16 至 2017-03-01" company="西安而立科技" position="前端" desc="在实习期间，作为前端开发工程师，独自完成了政务云网站的开发。"/>
				<Item1 time="2017-07-24 至 2017-08-11" company="CVTE" position="前端开发实习生" desc="在实习期间，进行了为期一周的公司文化、礼仪等培训以及三周的前端开发实习工作。"/>
			</div>
		) 

	}
}

export default Experience;