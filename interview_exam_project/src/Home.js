import React, { Fragment , Component, confirm } from 'react';
import './css/CssContact.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormSample extends Component {
   
    handleClickDelete = () => {
        window.alert("Are you sure you want to delete this item?");
        
    }
    handleClickAddnews = () => {
        window.location.href = "http://localhost:3000/Addnews"
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
                    <h2 >New Managerment</h2>
                    <button class="button button1" type="button" onClick={this.handleClickAddnews}>Add News</button>

                    <h4></h4>
                </section>
                <section>
                    <div className="container">
                        <table id="table">
                            <tr>
                                <th> </th>
                                <th>Date Time</th>
                                <th>News Type</th>
                                <th>Title</th>
                            </tr>
                        <tr>
                            <td> 
                                <div>
                                    <a href ="http://localhost:3000/Editnews" > Edit </a>                                                    
                                    <a  onClick={this.handleClickDelete}> Delete </a>
                                    {/* <Dialog opens={this.opens} onClose={this.handleClose}>
                                        <DialogTitle align = 'center'>{"Confirm"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Are you sure you want to delete this item?
                                            </DialogContentText>
                                        </DialogContent>                                        
                                        <DialogActions>
                                        <Button onClick={this.handleClose}>
                                            Cancel
                                        </Button>
                                        <Button  onClick={this.handleClose}>
                                            Confirm
                                        </Button>
                                        </DialogActions>
                                    </Dialog> */}
                                </div>
                            </td>
                            <td>2020/05/26 11:53</td>
                            <td>Breaking news</td>
                            <td>First check 1 = Eurodollar, the lower limit of the cloud is a turning point</td>
                        </tr>
                        <tr>
                            <td> 
                                <a href ="http://localhost:3000/Editnews" > Edit </a> 
                                <a onClick={this.handleClickDelete}> Delete </a>
                                <p id="demo"></p>
                            </td>
                            <td>2020/05/25 15:16</td>
                            <td>Breaking news</td>
                            <td>(pound yen) Pivot turning point (above) reached 131.97</td>
                        </tr>
                        <tr>    
                            <td> 
                                <a href ="http://localhost:3000/Editnews" > Edit </a> 
                                <a onClick={this.handleClickDelete}> Delete </a>
                            </td>       
                            <td>2020/05/25 15:09</td>
                            <td>Fisco</td>
                            <td>Dollar / yen flat. Japanese equities strengthened / dollar / yen Tokyo market</td>
                        </tr>
                        <tr>    
                            <td> 
                                <a href ="http://localhost:3000/Editnews" > Edit </a> 
                                <a onClick={this.handleClickDelete}> Delete </a>
                            </td>        
                            <td>2020/05/25 10:12</td>
                            <td>Breaking news</td>
                            <td>(dollar yen) reached Pivot Resistance (2) 107.859, etc.</td>
                        </tr>               
                    </table>
                </div>
                </section>
            </div>

        </Fragment>
      )
    }
}
