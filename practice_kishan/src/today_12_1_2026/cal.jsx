import React, { Component } from 'react';
import './basic.css'

class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            opr1 : "",
            opr2 : "",
            opr : "",
            res : ""
        }
    }



    click = (e) =>{
        if(this.state.opr === ""){
            this.setState({
                opr1 : this.state.opr1 + e.target.value,
            },
        );

        } else {
            this.setState({
                opr2 : this.state.opr2 + e.target.value
            },
        )
        }
    }


    opretor = (e) => {
        this.setState({
            opr : e.target.value
        })
    }

    res = () => {
        let { opr1, opr2, opr } = this.state;
        let result = 0;

        let a = parseFloat(opr1);
        let b = parseFloat(opr2);

        switch(opr){
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default:
                result = 0;
        }

        this.setState({
            res : result,
            opr1 : result.toString(),
            opr2 : "",
            opr : ""
        },

    )
    }

    clear = () =>{
       this.setState({
        opr1 : "",
        opr2 : "",
        opr : "",
        res : ""


       })

    }

    render() {
        return (
            <>
                <center>
                    <div className="container">
                        <input
                          type="text"
                          disabled
                          value={this.state.opr1 + this.state.opr + this.state.opr2}
                        /><br/>

                        <input type="text" disabled value={this.state.res} /><br />
                         <button value="CE" onClick={this.clear} style={{
                            height: "20px",
                            width : "210px"
                         }}>CE</button>

                        <div className="row">
                            <button value="7" onClick={this.click}>7</button>
                            <button value="8" onClick={this.click}>8</button>
                            <button value="9" onClick={this.click}>9</button>
                            <button value="/" onClick={this.opretor}>/</button>
                        </div>

                        <div className="row">
                            <button value="4" onClick={this.click}>4</button>
                            <button value="5" onClick={this.click}>5</button>
                            <button value="6" onClick={this.click}>6</button>
                            <button value="-" onClick={this.opretor}>-</button>
                        </div>

                        <div className="row">
                            <button value="1" onClick={this.click}>1</button>
                            <button value="2" onClick={this.click}>2</button>
                            <button value="3" onClick={this.click}>3</button>
                            <button value="+" onClick={this.opretor}>+</button>
                        </div>


                        <div className="row">
                            <button value="*" onClick={this.opretor}>*</button>
                            <button value="0" onClick={this.click}>0</button>
                            <button value=".">.</button>
                            <button value="=" onClick={this.res}>=</button>
                        </div>
                    </div>
                </center>
            </>
        );
    }
}


export default First;
