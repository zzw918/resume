import React from 'react'
import Title from '../Title'

class Personal extends React.Component{
	render () {
		var personalStyle = {
			margin: 10,
		};
		var paraStyle = {
			paddingLeft: 20,
			textIndent: "2em",
			marginBottom: 15
		}
		var personalTitle = {
			margin: 20
		}
		return (
			<div  style={personalStyle} className="personal-wrap">
				<div style={personalTitle}>
					<Title title="个人简介"/>
				</div>
				<p style={paraStyle}>我是西安交通的大三学生，从事前端开发工作一年左右，对前端非常感兴趣。英语水平良好，通过了大学英语六级，可以阅读英文技术文档，这对新技术的学习是很有帮助的。在学校学习期间，有两次公司实习的经历，从事的工作均为前端开发工程师，积累了一定的项目经验。 </p>
				<p style={paraStyle}> 除了技术之外，对其他方面也有广泛的兴趣。经常喜欢跑步，多次参加学校组织的迷你马拉松比赛；喜欢车，对各类车有一定的认识；爱好打乒乓球，在学习、工作之余打球强身健体。 </p>
			</div>
		) 
	}
}

export default Personal;