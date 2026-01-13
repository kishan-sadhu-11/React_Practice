import React, { Component } from 'react';
class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      index: 0,
      part: ""
    }
  }



  onnext = () => {
    if (this.state.index == 2) {
      this.setState({ index: 2 })

    }
    else {
      this.setState({ index: this.state.index + 1 })
    }

  }

  onprev = () => {
    if (this.state.index == 0) {
      this.setState({ index: 0 })

    }
    else {
      this.setState({ index: this.state.index - 1 })
    }
  }

  render() {
    const { t1, t2, t3, t4, t5, t6, index } = this.state;
    return (
      <>
        <div style={{
          display: index == 0 ? "block" : "none"
        }}>
          <h1>part 1</h1>
          <input type="text" onChange={
            (e) => {
              this.setState({
                t1: e.target.value
              })
            }
          } value={t1} /><br />
          <input type="text" onChange={
            (e) => {
              this.setState({
                t2: e.target.value
              })
            }
          } value={t2} />
        </div>


        <div style={{
          display: index == 1 ? "block" : "none"
        }}>

          <h1>part 2</h1>
          ce<input type="checkbox" onChange={(e) => {
            this.setState({
              t3: e.target.value
            })
          }} value="ce" checked={t3 == "ce"} />
          it<input type="checkbox" onChange={
            (e) => {
              this.setState({
                t3: e.target.value
              })
            }
          } value="it" checked={t3 == "it"} /><br />
          <input type="text" onChange={(e) => {
            this.setState({
              t4: e.target.value
            })
          }} value={t4} />
        </div>


        <div style={{
          display: index == 2 ? "block" : "none"
        }}>
          <h1>part 3</h1>
          male<input type="radio" onChange={
            (e) => {
              this.setState({
                t5: e.target.value
              })
            }
          } value="male" checked={t5 === "male"} />
          female<input type="radio" onChange={
            (e) => {
              this.setState({
                t5: e.target.value
              })
            }
          } value="female" checked={t5 === "female"} /><br />
          <input type="text" onChange={
            (e) => {
              this.setState({
                t6: e.target.value
              })
            }
          } value={t6} />

        </div>
        <br />


        <button onClick={this.onnext}>Next</button> &nbsp; <button onClick={this.onprev}>Previous</button><br></br>


        <div>
          t1 : {t1} <br />
          t2 : {t2}<br />
          t3 : {t3}<br />
          t4 : {t4}<br />
          t5 : {t5}<br />
          t6 : {t6}<br />
        </div>




      </>
    );

  }
}
export default First;