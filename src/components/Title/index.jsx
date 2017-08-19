import React from 'react'

class Title extends React.Component{
	render () {
		var titleStyle = {
			paddingLeft: 10,
			color: "blue",
			borderLeft: "5px solid blue"
		};
		return (
			<h2 style={titleStyle}>{this.props.title}</h2>
			)
	}
}

export default Title;