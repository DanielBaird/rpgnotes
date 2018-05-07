
import React from 'react'

import '../css/components/AbilityGrid.css'

// --------------------------------------------------------
function abilityBonus(abilityScore) {
	// ~~ is a bitwise flip which also turns the answer into an int.
	// If we use floor 
	return Math.floor(abilityScore/2) - 5
}
// --------------------------------------------------------
function AbilityGrid(props) {

	console.log(props.abilities)
	let grid = []
	for (let ability in props.abilities) {
		let score = props.abilities[ability]
		let bonusStr = '' + abilityBonus(score)
		if (bonusStr[0] !== '-') {
			bonusStr = '+' + bonusStr
		}
		grid.push(
			<div className={'ability ability-' + ability}
				style={{gridArea: ability }}
			>
				<span className='name'>{ability}</span>
				<span className='value'>{score}</span>
				<span className='bonus'>{bonusStr}</span>
			</div>
		)
	}

	return (
		<div className='ability-grid'>
			{grid}
		</div>
	)
}
// --------------------------------------------------------


export default AbilityGrid;
