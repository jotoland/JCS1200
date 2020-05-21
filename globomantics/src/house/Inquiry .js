import React, { Component } from 'react';

class Inquiry extends Component {
    state = {
        name: "",
        email:"",
        remarks:""
    }

    onNameChange = (e) => {
       e.preventDefault();
       this.setState({ name: e.target.value }); 
    }

    onemailChange = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value }); 
     }

     onRemarkChange = (e) => {
        e.preventDefault();
        this.setState({ remarks: e.target.value }); 
     }

     onSubmit =(e) => {
         e.preventDefault
         console.log('message sent = ',e.target.value);
     }

    render() { 
        return (
            <form callsName="mt-2">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="name"
                        value={this.state.name}
                        onChange={this.onNameChange} 
                    />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        value={this.state.email}
                        onChange={this.onemailChange} 
                    />   
                </div>
                <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Remark"
                        id="remark"
                        value={this.state.remark}
                        onChange={this.onRemarkChange} 
                    /> 
                </div>
                <button
                    className="btn btn-primary"
                    disabled={this.state.name.length === 0 ||
                        this.state.email.length === 0}
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </form>
        );
    }
}
 
export default Inquiry;
