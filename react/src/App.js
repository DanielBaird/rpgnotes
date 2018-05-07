import React, { Component } from 'react';

import ActorList from './components/ActorList'

import './css/App.css';

import Data from './data.json'

class App extends Component {

  render() {

  	console.log(Data)

	return (
		<main className="rpgnotes">
		<header>
			<h1>RPG&hearts;Notes</h1>
		</header>

		<ActorList actors={Data.actors} />

	  </main>
	);
  }
}

export default App;
