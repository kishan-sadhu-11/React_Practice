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
        if(this.state.lname == "" && this.state.fname == "" ) return alert("enter all required field")
        this.setState({
            array : [...this.state.array,{first : this.state.fname,last : this.state.lname,show:false}]
        })

        this.state.fname =""
        this.state.lname =""
    }


    delele = (curindex) =>{
        this.setState({
            array : this.state.array.filter((name,index) => index !== curindex)
        })
    }


    toggle = (index) => {
        let tmp = [...this.state.array]
        tmp[index].show = !tmp[index].show

        this.setState({array : tmp })

    };


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
                        <p key={index}>your fname {name.first}  &nbsp;

                        <button onClick={() => this.toggle(index)}>View</button>
                        <button onClick={() => this.delele(index)}>Delete</button>  <br/>

                         {/* value.show = agar click and last value enter he tabhi dikhega ye niche vala */}
                        {name.show && "Last value " + name.last}
                        </p>
                    ))
                }
            </>
        );
    }
}

export default First;



