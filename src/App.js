// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {BsFillArrowUpRightCircleFill} from "react-icons/bs"
import {MdOutlineAlternateEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import {BiSolidUserCircle} from "react-icons/bi"
import {BsTelephoneFill} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"


function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<div class="section">
 
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h4 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h4>
			          	<input 
						// 	style={{content=var --(<BsFillArrowUpRightCircleFill/>)}} 
						class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
						{/* {
							<div htmlFor="reg-log">
							<BsFillArrowUpRightCircleFill/>
						</div>} */}
						
			          	<label htmlFor="reg-log"></label>
						<div class="card-3d-wrap mx-auto"
						style={{display: 'flex',
        						alignItems: 'center',
        						justifyContent: 'center',
        						height: '100vh',}}>

							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												{<div className='icon'>
													<MdOutlineAlternateEmail/>
												</div>}
												<input type="email" class="form-style" placeholder= "email"  name='email'/>
												{/* <i class="input-icon uil uil-at"></i> */}
											</div>	
											<div class="form-group mt-2">
												{<div className='icon'>
													<RiLockPasswordFill/>
												</div>}
												<input type="password" class="form-style" placeholder="Password"/>
												{/* <i class="input-icon uil uil-lock-alt"></i> */}
											</div>
											<a href="https://www.web-leb.com/code" class="btn mt-4">Login</a>
                      <p class="mb-0 mt-4 text-center"><a href="https://www.web-leb.com/code" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-3 pb-3">Sign Up</h4>
											<div class="form-group">
											{<div className='icon'>
													<BiSolidUserCircle/>
												</div>}
												<input type="text" class="form-style" placeholder="Full Name" />
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-2">
											{<div className='icon'>
													<BsTelephoneFill/>
												</div>}
											
												<input type="tel" class="form-style" placeholder="Phone Number" />
												<i class="input-icon uil uil-phone"></i>
											</div>	
                      						<div class="form-group mt-2">
											  {<div className='icon'>
													<BiLogoGmail/>
												</div>}
												<input type="email" class="form-style" placeholder="Email"/>
												<i class="input-icon uil uil-at"></i>
											</div>
											<div class="form-group mt-2">
											{<div className='icon'>
													<RiLockPasswordFill/>
												</div>}
												<input type="password" class="form-style" placeholder="Password" />
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="https://www.web-leb.com/code" class="btn mt-4">Register</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
		</div>
	</div>
	
    
  );
}

export default App;
