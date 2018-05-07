
import React from 'react'

import '../css/components/NumberPlate.css'

import Shield from './PlateShield.svg'
import Heart from './PlateHeart.svg'
import HeartBlood from './PlateHeartBlood.svg'
import Circle from './PlateCircle.svg'
import Square from './PlateSquare.svg'
import Attack from './PlateAttack.svg'

// --------------------------------------------------------
function NumberPlate(props) {

	let style = {}
	if (props.type) {

		style.backgroundImage = 'url(' + {
			shield: Shield,
			heart: Heart,
			heartblood: HeartBlood,
			circle: Circle,
			square: Square,
			attack: Attack,
		}[props.type] + ')'
	}

	let head = ''
	if (props.head) {
		head = <span className='head'>{props.head}</span>
	}

	let foot = ''
	if (props.foot) {
		foot = <span className='foot'>{props.foot}</span>
	}

	return (
		<div
			className={'number-plate ' + props.type}
			style={style}
		>
			{head}
			<span className='main'>{props.main}</span>
			{foot}
		</div>
	)
}
// --------------------------------------------------------


export default NumberPlate;
