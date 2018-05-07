
import React from 'react'

import NamePlate from './NamePlate'
import NumberPlate from './NumberPlate'
import AbilityGrid from './AbilityGrid'

import '../css/components/Actor.css'


// --------------------------------------------------------
class Actor extends React.Component {
	// - - - - - - - - - - - - - - - - - - - - - - - - -
	actorInitials(maxLength = 3) {
		if (this.props.info.initials) {
			return this.props.info.initials
		}
		return this.props.info.name.split(/\s+/, maxLength).map((word)=>{
			const lcword = word.toLowerCase()
			if (
				   lcword === 'of'
				|| lcword === 'and'
				|| lcword === 'the'
			) {
				return lcword[0]
			}
			return lcword[0].toUpperCase()
		})
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - -
	render() {
		const p = this.props
		const i = p.info
		const {str, dex, con, int, wis, cha} = p.info
		const abilities = {str, dex, con, int, wis, cha}
		return (
			<div className='actor'>
				<div className='actor-avatar'>
					{this.actorInitials()}
				</div>
				<NamePlate name={i.name} pre={i.titlePrefix} post={i.titleSuffix} />
				<NumberPlate head="sword" type="attack" main='+5' foot='🔥2d6+2' />
				<NumberPlate head="AC" type="shield" main={i.ac} />
				<NumberPlate head="HP" type="heart" main={i.hp} foot='/123' />
				<NumberPlate head="HP" type="heartblood" main={i.hp} />
				{/*<NumberPlate head="AC" type="square" main={i.ac} />*/}
				{/*<NumberPlate head="AC" type="circle" main={i.ac} />*/}

				<AbilityGrid abilities={abilities} />
			</div>
		)
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - -
}
// --------------------------------------------------------


export default Actor


/*





// --------------------------------------------------------
class CreditOption extends React.Component {
	// - - - - - - - - - - - - - - - - - - - - - - - - -
	constructor(props) {
		super(props)
		this.state = {
			expanded: false
		}
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - -
	fave = (e)=> {
		e.stopPropagation()
		this.props.fave(this.props.info['id'], true)
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - -
	unfave = (e)=> {
		e.stopPropagation()
		this.props.fave(this.props.info['id'], false)
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - -
	toggleDetail = (e)=> { 
		this.setState((prev)=> {
			return { expanded: !prev.expanded }
		})

	}
	// - - - - - - - - - - - - - - - - - - - - - - - - -
 render() {
		const info = this.props.info

		let detail = <div style={{textAlign: 'center', position: 'relative', top: '0.5rem'}}><small className="text-muted">&or; more details &or;</small></div>
		let expandclass = 'shrunk'

		if (this.state.expanded) {
			expandclass = 'expanded'
			detail = (
				<div style={{clear: 'both', whiteSpace: 'pre-line', backgroundColor: '#fafafa', marginTop: '1em'}} className="p-a-1">
					{ info.description }
				</div>
			)
		}

		return (
			<li 
					className={ 'container clearfix list-group-item list-group-item-action credit-option ' + expandclass }
					onClick={ this.toggleDetail }
					style={{cursor: 'pointer'}}
			>

				<div className="row hidden-md-up">
					<div className="col-xs-12 text-xs-right">
						{ this.props.info['fave'] 
								? <RemoveFromListButton onClick={ this.unfave } /> 
								: <AddToListButton onClick={ this.fave } />
						}
					</div>
				</div>

				<div className="row">
					<div className="col-md-9">
						<div style={{lineHeight: '1.2'}}>
							{ info.from_course }
							<small style={{fontStyle: 'italic', whiteSpace: 'nowrap'}} className="text-muted"> at {info.org_name}</small>
						<div style={{lineHeight: '1.2', marginTop: '0.75em', paddingLeft: '2em', position: 'relative'}}>
							<small style={{fontStyle: 'italic', whiteSpace: 'nowrap'}} className="text-muted"> at JCU</small>
			<div>     

					<ddiv className="col-md-3 text-xs-right hidden-sm-down">
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - -
}
// --------------------------------------------------------
*/








