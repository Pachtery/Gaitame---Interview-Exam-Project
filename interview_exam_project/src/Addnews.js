import React, { Fragment , Component, } from 'react';

import './css/CssContact.css';


export default class Addnews extends Component {
    constructor() {
	    super();
	    this.state = { 
	      msgs: [], 
	      currentMsg: " ",
	    };
	}
	handleClickSubmit = () => {
        var msg = this.state.currentMsg.trim()
		if (msg.length > 0) {	
		    let msgsCopy = this.state.msgs.slice();
		    msgsCopy.push(this.state.currentMsg);
            this.setState({msgs: msgsCopy, currentMsg: "", isShowed: (msgsCopy.length>0)})
            window.alert("You are submitting");
            window.location.href = "http://localhost:3000/"
		}
		else { window.alert("No message to Title!"); }

    }
    handleInputChange = e => {
	    this.setState({currentMsg: e.target.value})
	}
    handleClickCancel = () => {
        window.location.href = "http://localhost:3000/"
    }

    render() {
        return (
            <Fragment className="CssContact">
                
                <div className="CssContact-header">
                    <h2 align = 'center'>Gaitame - Interview Exam Project</h2>
                </div>
                <div className="CssContact-content">
                    <section>
                        <h4></h4>
                        <h2 >Add Nwes</h2>                    
                        <h4></h4>
                    </section>
    
                    <section >
                        <div >
                            <table id="table">
                                <td>
                                    <label > Date Time: </label> 
                                    <input type="datetime-local" align = "left" ></input>
                                </td>
                                <td>
                                    <label > News Type: </label>
                                    <select>
                                        <option value="Breaking news">Breaking news</option>
                                        <option value="Fisco">Fisco</option>
                                    </select>
                                </td>
                            </table>
    
                        </div> 
    
                        <p></p>
    
                        <div class = "div1">
                            <label >Title: <t></t></label>
                            <input class="input" value={this.state.currentMsg} onChange={this.handleInputChange}></input>
                        </div> 
                        
                        <p></p>
    
                        <div class = "div1">
                            Description:
                            <br></br>
                            <div align = "center"> 
                                <textarea class = "textarea" rows ="15"></textarea>
                            </div>
                            
                            <div align = "right">
                                <button class="button button1" type="button" onClick={this.handleClickCancel}>Cancel</button>
                                <button class="button button1" type="button" onClick={this.handleClickSubmit}> Submit</button>
                            </div>
                        </div>
                        
    
                    </section>    
                    
                </div>
    
    
            </Fragment>
        )
    }
}
