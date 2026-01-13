import React, { Component } from 'react';



class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : "",
            istrue : false,
            newtext : "hello"
        }
    }
    // set timeout = means itni second bad ak bar isko print karvao
    //set interval = means itni second bad usko bar bar print karvao (repeated time)

   componentDidMount() {
        setInterval(() => {
            this.setState({ newtext: "hello" });
        }, 2000);


        setInterval(() => {
            this.setState({ newtext: "welcome to our site user" });
        }, 3000);


   }


    add = (e) =>{
        this.setState({text : e.target.value})
    };

    dark = () =>{
        this.setState({istrue : !this.state.istrue})
    }

    render() {
        return (
          <>


            {/* now add make page convert into dark mode */}
            <button onClick={this.dark} style={{
               backgroundColor : this.state.istrue ? "black" : "red"
            }}>{this.state.istrue ? "black" : "red"}</button><br/><br/><br/>








            {/* change text dynamically */}
            <h2>{this.state.newtext}</h2>








            {/* isme text likha uska count and word count */}
                <textarea onChange={this.add} value={this.state.value}></textarea><br/>
                <p>total charecter  : {this.state.text.length}</p><br/>
                <p>total  word : {this.state.text.split(" ").length}</p><br/>









            {/* react router = refresh/reload huye bina dusre pages par chali jaye.

            react = library
            anguler = framwork

            ->using react create single page website

            npm i react-router-dom

            */}


            </>
        );
    }
}
export default Basic;


