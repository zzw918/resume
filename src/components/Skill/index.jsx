import React from 'react'
import Item2 from '../Item2'
import Title from '../Title'
import './style.less'

class Skill extends React.Component{
	render () {
		return (
			<div className="skill-wrap">
				<Title title="专业技能"/>
				<Item2 skill="vue"  spec1="有使用vue开发项目的经验" spec2="阅读过vue源码，了解vue的主要思想"/>
				<Item2 skill="node"  spec1="有使用node制作个人博客的经历" spec2="对node有兴趣" />
			</div>
		) 
	}
}

export default Skill;