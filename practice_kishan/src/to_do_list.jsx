import React,{Component} from 'react';

class First extends Component{
    constructor(){
        super();
        this.state = {
            array :[],
            fname : "",
            lname : "",
            ishide : false
        }
    }

    getfname = (e) =>{
        this.setState({fname : e.target.value})
    }

    getlname = (e) =>{
        this.setState({lname : e.target.value})
    };

    Add = () =>{
        this.setState({
            array : [...this.state.array,{first : this.state.fname,last : this.state.lname}]
        })
    }

    delele = (curindex) =>{
        this.setState({
            array : this.state.array.filter((name,index) => index !== curindex)
        })
    }

    render(){
        const {array,fname,lname} = this.state;
        return(
            <>
                <input type="text"  onChange={this.getfname} value={fname}/> &nbsp;
                <input type="text"   onChange={this.getlname} value={lname}/><br/>

                <button onClick={this.Add}>Add Contact</button><hr/>

                {/* here print all values */}
                {
                    array.map((name,index) => (
                        <p key={index}>your fname {name.first}  &nbsp;   <button onClick={() => this.delele(index)}>delete</button>   </p>
                    ))
                }
            </>
        );
    }
}

export default First;