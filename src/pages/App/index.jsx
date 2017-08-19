import React from 'react';

import Title from '../../components/Title'
import Item2 from '../../components/Item2'
import Experience from '../../components/Experience'
import Skill from '../../components/Skill'
import Personal from '../../components/Personal'
import Intro from '../../components/Intro'
import Others from '../../components/Others'

import './style.less'

class App extends React.Component{
	
	render () {
		return (
			<div className="app-wrap">
				<div className="sub">
					<div className="intro">
						<Intro/>
					</div>
					<div className="others">
						<Others/>
					</div>
				</div>
				<div className="main">
					<div className="experience">
						<Experience/>
					</div>
					<div className="skill">
						<Skill/>
					</div>
					<div className="personal">
						<Personal/>
					</div>
				</div>
			</div>
			)
	}
}

export default App; 