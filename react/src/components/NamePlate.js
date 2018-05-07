
import React from 'react'

import '../css/components/NamePlate.css'

// --------------------------------------------------------
function NamePlate(props) {

	return (
		<div className="name-plate">
			<span className="pre">{props.pre}&nbsp;</span>
			<span className="main">{props.name}</span>
			<span className="post">&nbsp;{props.post}</span>
		</div>
	)
}
// --------------------------------------------------------


export default NamePlate;
