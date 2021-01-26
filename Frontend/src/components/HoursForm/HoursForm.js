import React from 'react';
import './HoursForm.css';

class HoursForm extends React.Component{
  constructor(props) {
	super(props);
    this.state = {
      projectplan: 0,
      reading: 0,
      analitics: 0,
      projecting: 0,
      programming: 0,
      testing: 0,
      writingdocumentation: 0,
      writingaction: 0,
      consult: 0,
      rest: 0
    }
  }

//   onHandleChange = (event) => {
// 	this.setState({
// 		[event.target.id]: 
// 	})
//   }

onProjectPlanChange = (event) => {
    this.setState({projectplan: Number(event.target.value)})
    console.log(event.target.value);
  }
  onReadingChange = (event) => {
    this.setState({reading: Number(event.target.value)})
    console.log(event.target.value);
  }
onAnaliticsChange = (event) => {
    this.setState({analitics:  Number(event.target.value)})
    console.log( Number(event.target.value));
  }
onProjectingChange = (event) => {
    this.setState({projecting:  Number(event.target.value)})
    console.log( Number(event.target.value));
  }
  onProgrammingChange = (event) => {
    this.setState({programming:  Number(event.target.value)})
    console.log( Number(event.target.value));
  }
  onTestingChange = (event) => {
    this.setState({testing:  Number(event.target.value)})
    console.log( Number(event.target.value));
  }
  onWritingChange = (event) => {
    this.setState({writingdocumentation:  Number(event.target.value)})
    console.log( Number(event.target.value));
  }
  onWritingTwoChange = (event) => {
    this.setState({writingaction:  Number(event.target.value)})
    console.log( Number(event.target.value));
  }
  onConsultChange = (event) => {
    this.setState({consult:  Number(event.target.value)})
    console.log( Number(event.target.value));
  }
  onRestChange = (event) => {
    this.setState({rest:  Number(event.target.value)})
    console.log( Number(event.target.value));
  }

  handleClick = () => {
	  try{
	return this.props.onButtonSubmit(this.state);
	  }
	  finally {
		  this.setState({projectplan: Number(0)});
		  document.getElementById('projectplan1').value=0;
		  this.setState({reading: Number(0)});
		  document.getElementById('reading1').value=0;
		  this.setState({analitics: Number(0)});
		  document.getElementById('analitics1').value=0;
		  this.setState({projecting: Number(0)});
		  document.getElementById('projecting1').value=0;
		  this.setState({programming: Number(0)});
		  document.getElementById('programming1').value=0;
		  this.setState({testing: Number(0)});
		  document.getElementById('testing1').value=0;
		  this.setState({writingdocumentation: Number(0)});
		  document.getElementById('writingdocumentation1').value=0;
		  this.setState({writingaction: Number(0)});
		  document.getElementById('writingaction1').value=0;
		  this.setState({consult: Number(0)});
		  document.getElementById('consult1').value=0;
		  this.setState({rest: Number(0)});
		  document.getElementById('rest1').value=0;
	  }
  }

render() {
	return(
		<div>
			<p className='p_div f3'>
			 	{'U sljedeću formu unesite broj sati provedenih na pojedinoj aktivnosti.'}
			</p>
			<div className='center'>
				<div className='mainn form center pa4 br3 shadow-1'>
				<div className='main_one center'>
					<div className="forma br3 shadow-4">
						<label className=" db fw6 lh-copy f6" for="projectplan" name='projectplan' id='projectplan'>Planiranje projekta</label>	
						<input defaultValue={0} onChange={this.onProjectPlanChange} id='projectplan1' className='labela f4 pa2 center br3' type="number"/>
					</div>
					<div className='forma br3 shadow-4'>
						<label className=" db fw6 lh-copy f6" for="reading" name='reading' id='reading'>Čitanje literature</label>
						<input defaultValue={0} onChange={this.onReadingChange} id='reading1' className='labela f4 pa2 center br3' type="number"/>
					</div>
					<div className='forma br3 shadow-3'>
						<label className=" db fw6 lh-copy f6" for="analitics" name='analitics' id='analitics'>Analiza zahtjeva</label>
						<input defaultValue={0} onChange={this.onAnaliticsChange} id='analitics1' className='labela f4 pa2  center br3' type="number"/>
					</div>
					<div className='forma br3 shadow-3'>
						<label className=" db fw6 lh-copy f6" for="projecting" name='projecting' id='projecting'>Projektiranje</label>
						<input defaultValue={0} onChange={this.onProjectingChange} id='projecting1' className='labela f4 pa2 center br3' type="number"/>
					</div>
					<div className='forma br3 shadow-3'>
						<label className=" db fw6 lh-copy f6" for="programming" name='programming' id='programming'>Programiranje</label>
						<input defaultValue={0} onChange={this.onProgrammingChange} id='programming1' className='labela f4 pa2 center br3' type="number"/>
					</div>
					<div className='forma br3 shadow-3'>
						<label className=" db fw6 lh-copy f6" for="testing" name='testing' id='testing'>Testiranje</label>
						<input defaultValue={0} onChange={this.onTestingChange} id='testing1' className='labela f4 pa2 center br3' type="number"/>
					</div>
					<div className='forma br3 shadow-3'>
						<label className=" db fw6 lh-copy f6" for="writingdocumentation" name='writingdocumentation' id='writingdocumentation'>Dokumentiranje</label>
						<input defaultValue={0} onChange={this.onWritingChange} id='writingdocumentation1' className='labela f4 pa2 center br3' type="number"/>
					</div>
					<div className='forma br3 shadow-3'>
						<label className=" db fw6 lh-copy f6" for="writingaction" name='writingaction' id='writingaction'>Pisanje radnje</label>
						<input defaultValue={0} onChange={this.onWritingTwoChange} id='writingaction1' className='labela f4 pa2 center br3' type="number"/>
					</div><div className='forma br3 shadow-3'>
						<label className=" db fw6 lh-copy f6" for="consult" name='consult' id='consult'>Konzultacije</label>
						<input defaultValue={0} onChange={this.onConsultChange} id='consult1' className='labela f4 pa2 center br3' type="number"/>
					</div><div className='forma br3 shadow-3'>
						<label className=" db fw6 lh-copy f6" for="other" name='rest' id='rest'>Ostalo</label>
						<input defaultValue={0} onChange={this.onRestChange} id='rest1' className='labela f4 pa2 center br3' type="number"/>
					</div>
					<div className='form center br3'>	
						<button className='button_main near-black grow f4 link ph3 br2 bg-light-red' onClick={this.handleClick}>SPREMI</button>
					</div>
				</div>
				</div>
		</div>
		</div>
	);
}
}
export default HoursForm;