import React, { Component } from 'react'
import "./index.css";

export default class Trail extends Component {
    state={
      name:'',
      email:'',
      isnameValid:true,
      isemailValid:true
    }


     onsubmitHandler=(event)=>{
      event.preventDefault();
    };

    changeName=(event)=>{
      this.setState({name:event.target.value});
      console.log(this.state.name);
    };

    changeEmail=(event)=>{
      this.setState({email:event.target.value});
      console.log(this.state.email);
    };

    helloBlurred=(event)=>{
      console.log(this.state.name);
      if(event.target.value===''){
        this.setState({isnameValid:false});
      }
      else{
        this.setState({isnameValid:true});
      }
    }

    hello2Blurred=(event)=>{
      if(event.target.value===''){
        this.setState({isemailValid:false});
      }
      else{
        if(event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
        {
          this.setState({isemailValid:true});
        }
        else{
          this.setState({isemailValid:false});
        }
      }

    }




  render() {
    const classVar=(!this.state.isnameValid)?"textRead":"";
    const classVar1=(!this.state.isemailValid)?"textRead":"";
    const classVar2=(this.state.isnameValid&&this.state.isemailValid)?"":"disabled1";

    return (
      <div>
        <div className="card mb-3 m-3">
          <div className="card-body m-2">
          <div className="mx-auto d-flex justify-content-center "><h2>Form</h2></div>
          <form onSubmit={this.onsubmitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label" >Username</label>
              <input type="text" className={`form-control ${classVar}`} id="exampleFormControlInput1" placeholder="enter Username" value={this.state.name} onChange={this.changeName} onBlur={this.helloBlurred}/>
            </div>
            <div>{(!this.state.isnameValid)?<p className='textboxred'>Enter the correct name</p>:""}</div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label" >Email address</label>
              <input type="email" className={`form-control ${classVar1}`} id="exampleFormControlInput2" placeholder="name@example.com" value={this.state.email} onChange={this.changeEmail} onBlur={this.hello2Blurred}/>
            </div>
            <div>{(!this.state.isemailValid)?<p className='textboxred'>Enter the correct email</p>:""}</div>
            <div className="col-12">
              <button className={`btn btn-primary ${classVar2}`} type="submit">Submit form</button>
            </div>
          </form>
          </div>
        </div>

      </div>
    );
  }
}
