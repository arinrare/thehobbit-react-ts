import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import './registration.css';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Registration = () => {
    const [membershipTypeState, setMembershipTypeState] = useState('none');
    const [membershipDurationState, setMembershipDurationState] = useState('none');
    const [usernameState, setUSernameState] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [firstNameState, setFirstNameState] = useState('');
    const [lastNameState, setLastNameState] = useState('');
    const [emailState, setEmailState] = useState('');
    const [dobState, setDobState] = useState('');
    const [genderStateM, setGenderStateM] = useState('');
    const [genderStateF, setGenderStateF] = useState('');
    const [genderStateO, setGenderStateO] = useState(''); 
    const [addressState, setAddressState] = useState('');
    const [firstNameErrorState, setFirstNameErrorState] = useState(false);
    const [lastNameErrorState, setLastNameErrorState] = useState(false);
    const [emailErrorState, setEmailErrorState] = useState(false);
    const [emailErrorState2, setEmailErrorState2] = useState(false);
    const [membershipTypeErrorState, setMembershipTypeErrorState] = useState(false);
    const [membershipDurationErrorState, setMembershipDurationErrorState] = useState(false);
    const [usernameErrorState, setUsernameErrorState] = useState(false);
    const [passwordErrorState, setPasswordErrorState] = useState(false);
    const [passwordError2State, setPasswordError2State] = useState(false);
    const [dobErrorState, setDobErrorState] = useState(false);
    const [addressErrorState, setAddressErrorState] = useState(false);
    const [genderErrorState, setGenderErrorState] = useState(false);
    const [validationPassed, setValidationPassed] = useState(false);
    
    
    useEffect(() => {
        document.title = "The Hobbit Website - Registration";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/registration", title: "The Hobbit - Registration Page" });
        sessionStorage.setItem('currentPage', '3');
      }, []);	
    
    function processForm() {
        let passed = true;
        if (firstNameState === "") { 
            setFirstNameErrorState(true);
            passed = false;
        }
        if (lastNameState === "") { 
            setLastNameErrorState(true);
            passed = false;
        }
        if (usernameState === "") { 
            setUsernameErrorState(true);
            passed = false;
        }   
            
        var x, count = 0;
        if (passwordState.length === 0) {
            setPasswordErrorState(true);
            passed = false;
        }
        for (x = 0; x < passwordState.length; x++) {
            if (parseInt(passwordState.charAt(x)) >= 0 && parseInt(passwordState.charAt(x)) <= 9) {
                count++; 
            }
        }
        if (passwordState.length < 8 || count < 2) {
            setPasswordError2State(true);
            passed = false;
        }
        var patternEmail = new RegExp(/^([^\s@]+@[^\s@]+\.[^\s@]+)$/);
        if (emailState === "") { 
            setEmailErrorState(true);
            passed = false;
        }
        if (!patternEmail.test(emailState)) { 
            setEmailErrorState2(true);
            passed = false;
        }   
        if (membershipTypeState === "none") { 
            setMembershipTypeErrorState(true);
            passed = false;
        }

        if (membershipDurationState === "none") { 
            setMembershipDurationErrorState(true);
            passed = false;
        }

        var patternDob =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        if (dobState !== "" && !patternDob.test(dobState)) { 
            setDobErrorState(true);
            passed = false;
        }

        if (addressState === "") { 
            setAddressErrorState(true);
            passed = false;
        }

        if (genderStateF === '' && genderStateM === '' && genderStateO === '') {
            setGenderErrorState(true);
            passed = false;
        }
        if (passed === true) {
            setValidationPassed(true);
        }
        else {
            setValidationPassed(false);
        }
    }

    function handleFirstNameChange(value: string) {      
        setFirstNameState(value);
        if (value !== "") { 
            setFirstNameErrorState(false);
        }
        else {
            setFirstNameErrorState(true);
        }
    }

    function handleLastNameChange(value: string) {      
        setLastNameState(value);
        if (value !== "") { 
            setLastNameErrorState(false);
        }
        else {
            setLastNameErrorState(true);
        }
    }

    function handleMembershipTypeChange(value: string) {      
        setMembershipTypeState(value);
        if (value !== "none") { 
            setMembershipTypeErrorState(false);
        }
        else {
            setMembershipTypeErrorState(true);
        }
    }

    function handleMembershipDurationChange(value: string) {      
        setMembershipDurationState(value);
        if (value !== "none") { 
            setMembershipDurationErrorState(false);
        }
        else {
            setMembershipDurationErrorState(true);
        }
    }

    function handleUsernameChange(value: string) {      
        setUSernameState(value);
        if (value !== "") { 
            setUsernameErrorState(false);
        }
        else {
            setUsernameErrorState(true);
        }
    }

    function handlePasswordChange(value: string) {      
        setPasswordState(value);
        
        if (value.length !== 0) {
            setPasswordErrorState(false);
        } 
        else {
            setPasswordErrorState(true);
        }
        
        var x, count = 0;
        for (x = 0; x < value.length; x++) {
            if (parseInt(value.charAt(x)) >= 0 && parseInt(value.charAt(x)) <= 9) {
                count++; 
            }
        }
        if (count >= 2 && value.length >= 8) {
            setPasswordError2State(false);
        }
        else {
            setPasswordError2State(true);
        }
    }

    function handleDobChange(value: string) {      
        setDobState(value);
        var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        if (value !== "" && pattern.test(value)) { 
            setDobErrorState(false);
        }
        else {
            setDobErrorState(true);
        }
    }

    function handleEmailChange(value: string) {      
        setEmailState(value);
        var patternEmail = new RegExp(/^([^\s@]+@[^\s@]+\.[^\s@]+)$/);
        if (value !== "") { 
            setEmailErrorState(false);
        }
        else {
            setEmailErrorState(true);
        }
        if (patternEmail.test(value)) { 
            setEmailErrorState2(false);
        }
        else {
            setEmailErrorState2(true);
        }
    }

    function handleAddressChange(value: string) {      
        setAddressState(value);
        if (value !== "") { 
            setAddressErrorState(false);
        }
        else {
            setAddressErrorState(true);
        }
    }

    function handleGenderStateMChange(value: string) {      
        setGenderStateM(value);
        if (value !== "") { 
            setGenderErrorState(false);
        }
    }

    function handleGenderStateFChange(value: string) {      
        if (value !== "") { 
            setGenderErrorState(false);
        }
    }

    function handleGenderStateOChange(value: string) {      
        if (value !== "") { 
            setGenderErrorState(false);
        }
    } 

    function resetForm() {  
        setFirstNameState('');
        setLastNameState('');
        setUSernameState('');
        setPasswordState('');
        setDobState('');
        setGenderStateM('');
        setGenderStateF('');
        setGenderStateO('');
        setEmailState('');
        setAddressState('');
        setMembershipTypeState('none');
        setMembershipDurationState('none');
        setFirstNameErrorState(false);
        setLastNameErrorState(false);
        setEmailErrorState(false);
        setEmailErrorState2(false);
        setMembershipTypeErrorState(false);
        setMembershipDurationErrorState(false);
        setUsernameErrorState(false);
        setPasswordErrorState(false);
        setPasswordError2State(false);
        setDobErrorState(false);
        setAddressErrorState(false);
        setGenderErrorState(false);
        setValidationPassed(false);
    }

	return (
        <>
            <Header />
            <Navmenu />
            <div className="contentColumn">
                <div>
                    <div className="registrationForm">
                        <div className="formInstructions formInstructionsOuter">Welcome to The Hobbit registration page. Here you can register to become a valued shopper, simply by filling in and submitting the Web Form on this page.<br/>NOTE: This is a fake form and will not actually send any data.<br/><br/>First Name, Last Name, Username and Password are compulsory fields, and must be filled out. You do not have to give us your date of birth, or gender, but these will be useful for statistical purposes.<br/>An email address is required, but the Address is optional, again useful for statistics. You must however, select a Membership Type and a Membership Duration, which together will determine your membership cost. Prices are as follows:
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="membershipCell"></td>
                                        <td className="membershipCell cellHeading">Annual</td>
                                        <td className="membershipCell cellHeading">Five Years</td>
                                        <td className="membershipCell cellHeading">Ten Years</td>
                                        <td className="membershipCell cellHeading">Lifetime</td>
                                    </tr>
                                    <tr>
                                        <td className="membershipCell cellHeading">Bronze</td>
                                        <td className="membershipCell">$5</td>
                                        <td className="membershipCell">$20</td>
                                        <td className="membershipCell">$30</td>
                                        <td className="membershipCell">$50</td>
                                    </tr>
                                    <tr>
                                        <td className="membershipCell cellHeading">Gold</td>
                                        <td className="membershipCell">$10</td>
                                        <td className="membershipCell">$40</td>
                                        <td className="membershipCell">$60</td>
                                        <td className="membershipCell">$100</td>
                                    </tr>
                                    <tr>
                                        <td className="membershipCell cellHeading">Platinum</td>
                                        <td className="membershipCell">$15</td>
                                        <td className="membershipCell">$60</td>
                                        <td className="membershipCell">$100</td>
                                        <td className="membershipCell">$140</td>
                                    </tr>
                                    <tr>
                                        <td className="membershipCell cellHeading">Mithril</td>
                                        <td className="membershipCell">$50</td>
                                        <td className="membershipCell">$200</td>
                                        <td className="membershipCell">$300</td>
                                        <td className="membershipCell">$500</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className=" formInstructions formInstructionsInner">Membership carries the benefit of store discounts, including discounts on DVD purchases for The Hobbit and The Lord of The Rings.</div>
                        </div>
                        <form className="form">
                            <div className="formheading">Registration Form</div>
                            <fieldset className="formborder">
                                <div className="holder">
                                    <label className="label">First Name:</label>
                                    <input className="input firstName" type="text" name="First Name" value={firstNameState} onChange={(e) => handleFirstNameChange(e.target.value)} />
                                </div>
                                <div className={firstNameErrorState === true ? "error firstNameError showError" : "error firstNameError"}>Required: Please enter your first name</div>
                                <div className="holder">
                                    <label className="label">Last Name:</label>
                                    <input className="input lastName" type="text" name="Last Name" value={lastNameState} onChange={(e) => handleLastNameChange(e.target.value)}/>
                                </div>
                                <div className={lastNameErrorState === true ? "error lastNameError showError" : "error lastNameError"}>Required: Please enter your last name</div>

                                <div className="holder">
                                    <label className="label">Username:</label>
                                    <input className="input username" type="text" name="First Name" value={usernameState} placeholder="Choose a Username" onChange={(e) => handleUsernameChange(e.target.value)} />
                                </div>
                                <div className= {usernameErrorState === true ? "error usernameError showError" : "error usernameError"}>Required: Please enter a username</div>
                                <div className="holder">
                                    <label className="label">Password:</label>
                                    <input className="input password" name="Password" value={passwordState} placeholder="Choose a Password" type="password" onChange={(e) => handlePasswordChange(e.target.value)} />
                                </div>
                                <div className={passwordErrorState === true ? "error passwordError showError" : "error passwordError"}>Required: Please enter a password</div>
                                <div className={passwordError2State === true ? "error passwordError2 showError" : "error passowrdError2"}>Password must be a minimum of 8 characters, and contain 2 numbers</div>
                                <div className="holder">
                                    <label className="label">D.O.B. (dd/mm/yyyy):</label>
                                    <input className="input dob" type="text" name="DOB" value={dobState} onChange={(e) => handleDobChange(e.target.value)}/>
                                </div>
                                <div className= {dobErrorState === true ? "error dobError showError" : "error dobError"}>Required: Please enter a DOB in format dd/mm/yyyy</div>
                                <div className="holder">
                                    <label className="label">Gender:</label>
                                    <input className="input genderMale" type="radio" name="gender" value="male" onChange={(e) => handleGenderStateMChange(e.target.value)} />
                                    <span className = "radioGap">M</span>
                                    <input className="input genderFemale" type="radio" name="gender" value="female" onChange={(e) => handleGenderStateFChange(e.target.value)}/>
                                    <span className = "radioGap">F</span>
                                    <input className="input genderOther" type="radio" name="gender" value="other" onChange={(e) => handleGenderStateOChange(e.target.value)}/>
                                    <span>O</span>
                                </div>
                                <div className={genderErrorState === true ? "error genderError showError" : "error genderError"}>Please select a gender</div>
                                
                                <div className="holder">
                                    <label className="label">Email:</label>
                                    <input className="input email" id="email" type="text" name="email" value={emailState} onChange={(e) => handleEmailChange(e.target.value)} />
                                </div>
                                <div className={emailErrorState === true ? "error emailError showError" : "error emailError"}>Required: Please enter your email address</div>
                                <div className={emailErrorState2 === true ? "error emailError showError" : "error emailError"}>Please enter a correct email address format</div>
                                <div className="holder">
                                    <label className="label">	Address:</label>
                                    <textarea className="input address" value={addressState} onChange={(e) => handleAddressChange(e.target.value)}></textarea>
                                </div>
                                <div className={addressErrorState === true ? "error addressError showError" : "error addressError"}>Please enter an address</div>
                                
                                <div className="holder">
                                    <label className="label">Membership Type:</label>
                                    <select className="input membershipType" value={membershipTypeState} onChange={(e) => handleMembershipTypeChange(e.target.value)}>
                                        <option value="none">None</option>
                                        <option value="mithril">Mithril</option>
                                        <option value="platinum">Platinum</option>
                                        <option value="gold">Gold</option>
                                        <option value="bronze">Bronze</option>
                                    </select>
                                </div>
                                <div className={membershipTypeErrorState === true ? "error membershipTypeError showError" : "error membershipTypeError"}>Required: Please select a membership type</div>
                                <div className="holder">
                                    <label className="label">Membership Duration:</label>
                                    <select className="input membershipDuration" value={membershipDurationState} onChange={(e) => handleMembershipDurationChange(e.target.value)}>
                                        <option value="none">None</option>
                                        <option value="annual">Annual</option>
                                        <option value="five">Five Years</option>
                                        <option value="ten">Ten Years</option>
                                        <option value="lifetime">Lifetime</option>
                                    </select>
                                </div>
                                <div className={membershipDurationErrorState === true ? "error membershipDurationError showError" : "error membershipDurationError"}>Required: Please select a membership duration</div>
                                <div className="buttonHolder">
                                    <span className={validationPassed === true ? "successMessage" : "successMessageHide"}>Form submitted successfully</span>
                                    <input type="reset" value="Reset" onClick={resetForm}/>
                                    <input type="button" value="Submit" onClick={processForm} />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
			</div>
            <Footer />   
        </>
    );
}
export default Registration;
