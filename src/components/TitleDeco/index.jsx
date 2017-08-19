import React from 'react'


class TitleDeco extends React.Component{
	render () {
		var titleStyle = {
			width: "70%",
			padding: 5,
			color: "white",
			background: "blue"
		};
		return (
			<h2 style={titleStyle}>{this.props.title}</h2>
			)
	}
}

export default TitleDeco;