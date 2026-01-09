/*
// var can be re-declare and update
//let variable we can no re-declare but update
//const = we can not redeclare or update

var a = 10;
var a = 11;
let x = 10;
let x = 20;
console.log(x)
*/







/*
object = its block of code to write a somthing


let obj = {
    name : "kishan",
    age : 19
}

console.log(obj.name)
console.log(obj.age)

*/









/*
to given browser pop-up

alert("this is alert")

confirm("you are kishan")

let a = prompt("hello kishan")
console.log(a)

*/








/*
string functions
1).trim() = remove un-used sapce (not beteen  space)
s = "               kishan 123"
console.log(s.trim())



2).
s = `this is string litrel ${1+2}`
console.log(s)
*/







/*
=>functions
1).simple function
let x=0;
function add(){
    x++;
    console.log(x)
}

add()
add()

2).arrow function
let i =0;
add = () =>{
    i++;
    console.log(i)
}

add()
add()
add()

*/







/*
=>props
->props means parent its recived data from parent file

ex: we create a props in one.jsx and usme hamen ak <p></p> me
this.state.name le liya and uska import karva App.jsx me and
abb usme <First name="kishan" /> ye name pass kiya is ke liye props use hota he


*/









/*
1).spread(...) oparatore its ike for loop and add the value in to the array using spread opratore


2).map
->react me for loop direct nahi use karte he is liye map function ka use karte he.
Array ke har element par operation karke usse UI (JSX) me dikhana

->map function to print the value in ui



3).
filter function
=>isme ye chek karega(!==) agra dono ka index match nahi hota to vo naye array me vo value dal dega agar 
ho gya to nahi put karega

1).() => this.deleteItem(indexv) render method me iski jagah
this.deleteItem(indexv) ye likha he to error aayegi because ye
hamne render me pass kiya he to hame usko arrow function me convert karna pdega jisse vo sirf on click pe hi kam kare
not on render(page refres)





----------------------------------  example of all (spread,map,filter)
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


                // {
                //     array.map((name,index) => (
                //         <p key={index}>your fname {name.first}  &nbsp;   <button onClick={() => this.delele(index)}>delete</button>   </p>
                //     ))
                // }
//             </>
//         );
//     }
// }

// export default First;
//



*/


