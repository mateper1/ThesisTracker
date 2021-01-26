import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

   onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch('http://localhost:3006/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    }).then(response => response.json())
    .then(user => {
      if (user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }

  render() {
	return(
	<article className="maindiv br3 shadow-1 ba black b--black-10 w-100 w-50-m w-25-l mw5 center">	
		<main className="pa3 ph1 black-80">
  			<form className=" measure">
    			<fieldset id="sign_up" className=" ba b--transparent ph0 mh0">
      				<legend className=" f2 fw6 ph0 mh0">Prijava</legend>
      					<div className=" mt3">
        					<label className=" db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        					<input onChange={this.onEmailChange} className="br3 pa2 input-reset ba bg-white hover-bg-white hover-black w-100" 
                  type="email" name="email-address"  id="email-address"/>
      					</div>
      					<div className=" mv3">
        					<label className=" db fw6 lh-copy f6" htmlFor="password">Lozinka</label>
        						<input onChange={this.onPasswordChange} className="br3 pa2 input-reset ba bg-white hover-bg-white hover-black w-100" 
                    type="password" name="password"  id="password"/>
      					</div>
    					</fieldset>
    					<div className=" ">
      						<input onClick={this.onSubmitSignIn} className="br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" value="Prijava"/>
    					</div>
    					<div className=" lh-copy mt3">
      						<p onClick={() => this.props.onRouteChange('register')} className="register f6 link grow black db pointer">Registracija</p>
    					</div>
  				</form>
			</main>
		</article>
	);
}
}

export default SignIn;