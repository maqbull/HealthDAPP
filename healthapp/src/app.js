import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import NewPatient from './components/newpatient';
import NewDoctor from './components/newdoctor';
import NewInsuranceCompany from './components/newinsurancecompany';
import NewChemist from './components/newchemist';
import Patient from './components/patient';
import Doctor from './components/doctor';
import InsuranceCompany from './components/insurance';
import Chemist from './components/chemist';


const Navigation = () => {
  
	return(
    <div>
		  <div id="home-header">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div> 
            <div className="navbar-header">
              <h2>HealthApp for FrontLine Workers</h2>
            </div>
           
          </div>
          <NavLink to="/"><button className="btn btn-info">Home</button></NavLink>
        </nav>
      </div>
    </div>
	);
}



class App extends Component {
  render() {
	  return(
      <>
		  <BrowserRouter >
		  <Navigation/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path = "newpatient/" element = {<NewPatient/>}/>
       <Route path = "newdoctor/" element = {<NewDoctor/>}/>
       <Route path = "newinsurancecompany/" element = {<NewInsuranceCompany/>}/>
       <Route path = "newchemist/" element = {<NewChemist/>}/>
       <Route path = "chemist/" element = {<Chemist/>}/>
       <Route path = "patient/" element = {<Patient/>}/>
       <Route path = "doctor/" element = {<Doctor/>}/>
       <Route path = "insurancecompany/" element = {<InsuranceCompany/>}/>
       </Routes>
      </BrowserRouter>
      
      </>
	  )
    // return (
	// 	<>
    //   <BrowserRouter>
	// 	  <div>
	// 	  <Navigation/>

    //   		<Routes>
    //   			<Route path="/" element={Home} exact /> 
    //   			<Route path="/newpatient" element={NewPatient} /> 
    //   			<Route path="/newdoctor" element={NewDoctor} /> 
    //   			<Route path="/newinsurancecompany" element={NewInsuranceCompany} /> 
    //   			<Route path="/newchemist" element={NewChemist} /> 
    //   			<Route path="/patient" element={Patient} /> 
    //   			<Route path="/doctor" element={Doctor} /> 
    //   			<Route path="/insurancecompany" element={InsuranceCompany} /> 
    //   			<Route path="/chemist" element={Chemist} /> 
    //   			<Route element={() => {
    //   				return(
    //   					<div>
    //   						<h1>Error : This page doesn't exist</h1>
    //   					</div>
    //   				);
    //   			}}/>       			
    //   		</Routes>
    //   	</div>
	//   </BrowserRouter>
	//   </>
    // );
  }
}

export default App;