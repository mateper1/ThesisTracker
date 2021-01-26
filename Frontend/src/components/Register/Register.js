import React from 'react';
import './Register.css';

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      faculty: '',
      mentor: '',
      nameofthesis: ''
    }
  }

onNameChange = (event) => {
    this.setState({name: event.target.value})
    console.log(event.target.value)
  }

onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

onFacultyChange = (event) => {
    this.setState({faculty: event.target.value});
  }

 onMentorChange = (event) => {
    this.setState({mentor: event.target.value})
  }
 onThesisChange = (event) => {
    this.setState({nameofthesis: event.target.value})
  }


  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch('http://localhost:3006/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        faculty: this.state.faculty,
        mentor: this.state.mentor,
        nameofthesis: this.state.nameofthesis
      })
    }).then(response => response.json())
    .then(user => {
      if (user){
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }
  render() {
	return(
	<article className="maindiv br3 shadow-3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">	
		<main className=" pa4 black-80">
  			<form className="measure">
    			<fieldset id="sign_up" className=" ba b--transparent ph0 mh0">
      				<legend className=" f2 fw6 ph1 mh1 ">Registracija</legend>
      					<div className=" mt3">
                  <label className=" db fw6 lh-copy f6" for="name">Ime i prezime</label>
                  <input onChange={this.onNameChange} className="br3 pa2 input-reset ba bg-white hover-bg-white hover-black w-100" 
                  type="text" name="name"  id="name"/>
                </div>
                <div className=" mt3">
        					<label className=" db fw6 lh-copy f6" for="email-address">Email</label>
        					<input onChange={this.onEmailChange} className="br3 pa2 input-reset ba bg-white hover-bg-white hover-black w-100" 
                  type="email" name="email-address"  id="email-address"/>
      					</div>
      					<div className=" mv3">
        					<label className=" db fw6 lh-copy f6" for="password">Lozinka</label>
        						<input onChange={this.onPasswordChange} className="br3 pa2 input-reset ba bg-white hover-bg-white hover-black w-100" 
                    type="password" name="password"  id="password"/>
      					</div>
                <div className=" mv3">
                  <label className=" db fw6 lh-copy f6" for="faculty">Fakultet</label>
                    <input onChange={this.onFacultyChange} className="br3 pa2 input-reset ba bg-white hover-bg-white hover-black w-100" 
                    type="text" name="facutly"  id="faculty"/>
                </div>
                <div className=" mv3">
                  <label className=" db fw6 lh-copy f6" for="mentor">Mentor</label>
                    <input onChange={this.onMentorChange} className="br3 pa2 input-reset ba bg-white hover-bg-white hover-black w-100" 
                    type="text" name="mentor"  id="mentor"/>
                </div>
                <div className=" mv3">
                  <label className=" db fw6 lh-copy f6" for="nameofthesis">Naslov projekta</label>
                    <input onChange={this.onThesisChange} className="br3 pa2 input-reset ba bg-white hover-bg-white hover-black w-100" 
                    type="text" name="nameofthesis"  id="nameofthesis"/>
                </div>
    					</fieldset>
    					<div className=" ">
      						<input onClick={this.onSubmitSignIn} className="br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Registracija"/>
    					</div>
  				</form>
			</main>
		</article>
	);
}
}

export default Register;