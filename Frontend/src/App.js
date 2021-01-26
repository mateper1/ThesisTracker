import React, {Component} from 'react';
import Clarifai from 'clarifai';
import _ from 'lodash'

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import HoursForm from './components/HoursForm/HoursForm';
import Rank from './components/Rank/Rank';
import UserInfo from './components/UserInfo/UserInfo';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			box: {},
			route: 'signin',
			isSignedIn: false,
      user : {
        id:'',
        name:'',
        email:'',
        entries: 0,
        joined:'',
        faculty:'',
        mentor:'',
        nameofthesis: '',
        projectplan:0,
        reading:0,
        analitics:0,
        projecting:0,
        programming:0,
        testing:0,
        writingdocumentation:0,
        writingaction:0,
        consult:0,
        rest:0 
      }
		}
	}

  loadUser = (data) => {
    console.log('data-----',data);
    this.setState({user: {
        id: data.id,
        name:data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
        faculty: data.faculty,
        mentor: data.mentor,
        nameofthesis: data.nameofthesis,
        analitics: data.analitics,
        consult: data.consult,
        programming: data.programming,
        projecting: data.projecting,
        projectplan: data.projectplan,
        reading: data.reading,
        rest: data.rest,
        testing: data.testing,
        writingaction: data.writingaction,
        writingdocumentation: data.writingdocumentation
    }})
  }
	onInputChange = (event) => {
		this.setState({input:event.target.value});
	}

	onButtonSubmit = async (userData) => {
    const finalUserData = this.finalResult(userData)
    try {
      await fetch(`http://localhost:3006/profile/${this.state.user.id}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...finalUserData
        })
      })
      this.setState({
        user: _.assign({},this.state.user, finalUserData)
      })
    } catch (err) {
      console.log(err);
    }
  }

  finalResult = (userData) => {
    const {
      projectplan,reading,analitics,projecting,programming,
      testing,writingdocumentation,writingaction,consult,rest } = userData
    const {user} = this.state
    return {
      projectplan: projectplan + user.projectplan,
      reading: reading + user.reading,
      analitics: analitics + user.analitics,
      projecting: projecting + user.projecting,
      programming: programming + user.programming,
      testing: testing + user.testing,
      writingdocumentation: writingdocumentation + user.writingdocumentation,
      writingaction: writingaction + user.writingaction,
      consult: consult + user.consult,
      rest: rest + user.rest
    }
  }

    onRouteChange = (route) => {
    	if (route === 'signout') {
    		this.setState({isSignedIn: false})
    	} else if (route === 'home') {
    		this.setState({isSignedIn: true})
    	}
    	this.setState({route: route});

    }

  render() {
  	return (
    <div className="App">
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
      	{this.state.route === 'home' ?
    	 <div>
      		<Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries} faculty={this.state.user.faculty} mentor={this.state.user.mentor} nameofthesis={this.state.user.nameofthesis}/>
      		<HoursForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} data={this.state}/>
      		<UserInfo userInfo={this.state.user}/>
      	</div>
      	: (
      		this.state.route === 'signin' 
           ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : (
          this.state.route === 'signout'
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
          )
       /*   ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      		: <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      		)
      	*/
      }
    </div>
  );
}
}

export default App;

