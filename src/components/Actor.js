
import React from 'react'

import './Actor.css'

// --------------------------------------------------------
class Actor extends React.Component {
	// - - - - - - - - - - - - - - - - - - - - - - - - -
	actorInitials(maxLength = 3) {
		return this.props.info.name.split(/\s+/, maxLength).map((word)=>{
			return word[0].toUpperCase()
		})
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - -
	render() {
		const p = this.props
		return (
			<div className='actor'>
				<div className='actor-avatar'>
					{this.actorInitials()}
				</div>
				<div>
					{p.info.name}
				</div>
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








