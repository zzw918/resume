import React from 'react'
import TitleDeco from '../TitleDeco'

import './style.less'

class Others extends React.Component{
	render () {
		return (
			<div className="others-wrap">
				<div className="education item">
					<div className="edu-back">
						<TitleDeco  title='教育背景'/>
					</div>
					<div className="edu-time list">2014-2018</div>
					<div className="profession list">材料科学与工程专业</div>
					<div className="school list">西安交通大学</div>
				</div>
				<div className="certificate item">
					<TitleDeco  title="所获证书"/>
					<ul>
						<li>全国大学生英语六级证书</li>
						<li>全国计算机二级证书</li>
						<li>连续两年获得思源奖学金</li>
					</ul>
				</div>
				<div className="contact item">
					<TitleDeco  title='联系方式'/>
					<div className="phone">18292886984</div>
					<div className="mail">1843021156@qq.com</div>
					<div className="wechat">zhuzhenwei789</div>
				</div>

			</div>
			)
	}
}

export default Others; 