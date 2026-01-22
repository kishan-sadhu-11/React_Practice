import React, { Component } from 'react';

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array : [
                { id: "1", name: "kishan", age: "19" },
                { id: "2", name: "rahul", age: "20" },
                { id: "3", name: "aman", age: "21" },
                { id: "4", name: "rohit", age: "22" },
                { id: "5", name: "sumit", age: "23" },

                { id: "6", name: "jay", age: "24" },
                { id: "7", name: "raj", age: "25" },
                { id: "8", name: "ajay", age: "26" },
                { id: "9", name: "vijay", age: "27" },
                { id: "10", name: "sanjay", age: "28" },

                { id: "11", name: "deep", age: "29" },
                { id: "12", name: "harsh", age: "30" },
                { id: "13", name: "amit", age: "31" },
                { id: "14", name: "karan", age: "32" },
                { id: "15", name: "nilesh", age: "33" },

                { id: "16", name: "manoj", age: "34" },
                { id: "17", name: "rakesh", age: "35" },
                { id: "18", name: "sunil", age: "36" },
                { id: "19", name: "anil", age: "37" },
                { id: "20", name: "pravin", age: "38" },

                { id: "21", name: "akash", age: "39" },
                { id: "22", name: "sachin", age: "40" },
                { id: "23", name: "yash", age: "41" },
                { id: "24", name: "rahul", age: "42" },
                { id: "25", name: "rohan", age: "43" },

                { id: "26", name: "vikas", age: "44" },
                { id: "27", name: "arjun", age: "45" },
                { id: "28", name: "neeraj", age: "46" },
                { id: "29", name: "mohit", age: "47" },
                { id: "30", name: "lokesh", age: "48" },

                { id: "31", name: "dev", age: "49" },
                { id: "32", name: "pankaj", age: "50" },
                { id: "33", name: "bhavesh", age: "51" },
                { id: "34", name: "hardik", age: "52" },
                { id: "35", name: "darshan", age: "53" },

                { id: "36", name: "ravi", age: "54" },
                { id: "37", name: "tejas", age: "55" },
                { id: "38", name: "parth", age: "56" },
                { id: "39", name: "kevin", age: "57" },
                { id: "40", name: "jatin", age: "58" },

                { id: "41", name: "mayur", age: "59" },
                { id: "42", name: "kunal", age: "60" },
                { id: "43", name: "chirag", age: "61" },
                { id: "44", name: "nikhil", age: "62" },
                { id: "45", name: "tushar", age: "63" },

                { id: "46", name: "suresh", age: "64" },
                { id: "47", name: "mahesh", age: "65" },
                { id: "48", name: "paresh", age: "66" },
                { id: "49", name: "kalpesh", age: "67" },
                { id: "50", name: "hitesh", age: "68" }
            ],
            index: 0,
            pageSize: 5
        };
    }

    next = () => {
        const { index, array, pageSize } = this.state;
        if ((index + 1) * pageSize < array.length) {
            this.setState({ index: index + 1 });
        }
    }

    prev = () => {
        const { index } = this.state;
        if (index > 0) {
            this.setState({ index: index - 1 });
        }
    }

    render() {
        const { array, index, pageSize } = this.state;
        const start = index * pageSize;
        const end = start + pageSize;
        const dataToShow = array.slice(start, end);



        return (
            <>
                {dataToShow.map((item) => (
                    <p key={item.id}>
                        {item.id} - {item.name} - {item.age}
                    </p>
                ))}


                &nbsp;{this.state.index}/10 &nbsp;&nbsp;
                <button onClick={this.prev} disabled={index === 0}>Prev</button> &nbsp;
                <button onClick={this.next} disabled={end >= array.length}>Next</button>
            </>
        );
    }
}

export default First;
