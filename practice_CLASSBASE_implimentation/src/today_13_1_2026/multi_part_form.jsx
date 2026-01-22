import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            t1: "",
            t2: "",
            t3: "",
            t4: "",
            t5: "",
            t6: "",
            t7: "",
            t8: "",
            t9: "",
            index: 0

        }
    }

    one = (e) => {
        this.setState({ t1: e.target.value })
    };

    two = (e) => {
        this.setState({ t2: e.target.value })
    };
    three = (e) => {
        this.setState({ t3: e.target.value })
    };

    four = (e) => {
        this.setState({ t4: e.target.value })
    };
    five = (e) => {
        this.setState({ t5: e.target.value })
    };
    six = (e) => {
        this.setState({ t6: e.target.value })
    };
    seven = (e) => {
        this.setState({ t7: e.target.value })
    };
    eight = (e) => {
        this.setState({ t8: e.target.value })
    };
    nine = (e) => {
        this.setState({ t9: e.target.value })
    };


    onclicknext = () => {
        this.setState({
            index: this.state.index + 1
        })
    }

    onclickprev = () => {
        this.setState({
            index: this.state.index - 1
        })
    }

    render() {
        return (
            <>
                <h2>Form</h2>
                <div style={{
                    display: this.state.index == 0 ? "block" : "none"
                }}>
                    <h3>Part 1 </h3><br></br>
                    <input type="text" onChange={this.one} value={this.state.t1} placeholder='enter your fname' /><br />
                    <input type="text" onChange={this.two} value={this.state.t2} placeholder='enter your midname' /> <br />
                    <input type="text" onChange={this.three} value={this.state.t3} placeholder='enter your lname' />
                </div><br />


                <div style={{
                    display: this.state.index == 1 ? "block" : "none"
                }}>
                    <h3>Part 2 </h3><br></br>
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.t4 === "male"}
                        onChange={this.four}
                    />

                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.t4 === "female"}
                        onChange={this.four}
                    /><br />

                    <select onChange={this.five} value={this.state.t5} placeholder='enter city' >
                        <option value="rajkot">rajkot</option>
                        <option value="surat">surat</option>
                        <option value="ahemedabad">ahmedabad</option>
                    </select><br />

                    CE<input type="checkbox" name="branch" onChange={this.six} value="ce" checked={this.state.t6 === "ce"} />
                    IT<input type="checkbox" name="branch" onChange={this.six} value="it" checked={this.state.t6 === "it"} />
                </div><br />


                <div style={{
                    display: this.state.index == 2 ? "block" : "none"
                }}>
                    <h3>Part 3 </h3><br></br>
                    <input type="color" onChange={this.seven} value={this.state.t7} placeholder='enter your color picker' /> <br />
                    <input type="date" onChange={this.eight} value={this.state.t8} placeholder='dob' /> <br />
                    <textarea onChange={this.nine} value={this.state.t9} placeholder='your review' ></textarea>
                </div><br />

                <button onClick={this.onclicknext} disabled={this.state.index == 2}>Next</button> &nbsp;   <button onClick={this.onclickprev} disabled={this.state.index == 0}>previous</button>

                <div>
                    <h3>Output </h3>
                    <p>t1 : <b>{this.state.t1}</b></p>
                    <p>t2 : <b>{this.state.t2}</b></p>
                    <p>t3 : <b>{this.state.t3}</b></p>
                    <p>Gender : <b>{this.state.t4}</b></p>
                    <p>City : <b>{this.state.t5}</b></p>
                    <p>Branch : <b>{this.state.t6}</b></p>
                    <p>Color : <b>{this.state.t7}</b></p>
                    <p>DOB : <b>{this.state.t8}</b></p>
                    <p>Your Review : <b>{this.state.t9}</b></p>
                </div><br /><br />


            </>
        );

    }
}
export default Form;