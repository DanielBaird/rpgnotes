import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ActorList from './components/ActorList'

import Data from './data.json'

class App extends Component {

  render() {

  	console.log(Data)

	return (
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
		</header>

		<ActorList actors={Data.actors} />

		<p className="App-intro">
			To get started, edit <code>src/App.js</code> and save to reload.
		</p>
	  </div>
	);
  }
}

export default App;
