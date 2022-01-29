import React, { Component, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

const Home = () => {
	let navigate = useNavigate();
    const[redirectto,setRedirectTo] = useState(5);
	return (
		<div id="home-body">
					<h2>Sign Up via Metamask</h2>
				<div><NavLink to="/newpatient" className="btn btn-primary"><h4>As a Patient</h4></NavLink></div>
				<br></br>
				<div><NavLink to="/newdoctor" className="btn btn-primary"><h4>As a Doctor</h4></NavLink></div>
				<br></br>
				<div><NavLink to="/newinsurancecompany" className="btn btn-primary"><h4>As an Insurance Company</h4></NavLink></div>
				<br></br>
				<div><NavLink to="/newchemist" className="btn btn-primary"><h4>As a Chemist</h4></NavLink></div>
				<br></br>
			<h2>Already registered?</h2>
			  <button onClick={async() => {
				  const accounts = await web3.eth.getAccounts();
				  await contract.methods.Identify().call({from : accounts[0]}, (error,result) => {
					  setRedirectTo(result);
					  console.log(result);
				  });
			  }} className="btn btn-primary"><h4>Enter</h4></button>
		{
			(redirectto==1) 
				? navigate('/patient')
				: (<span></span>)
		}
		{
			(redirectto==2) 
				? navigate('/doctor')
				: (<span></span>)
		}
		{
			(redirectto==3) 
				? navigate('/insurancecompany')
				: (<span></span>)
		}
		{
			(redirectto==4) 
				? navigate('/chemist')
				: (<span></span>)
		}
		</div>
	)
}


export default Home;