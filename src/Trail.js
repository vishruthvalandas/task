import React, { Component } from 'react'
import "./index.css";


export default class Trail extends Component {
    state={
      name:'',
      email:'',
      isnameValid:true,
      isemailValid:true,
      user:[]
    }


     onsubmitHandler=(event)=>{
      event.preventDefault();
      console.log(this.state.name);
      console.log(this.state.email);
      this.setState({user: [...this.state.user,{
        id:new Date().getTime(),
        name:this.state.name,
        email:this.state.email
      }]});
      this.setState({name:""});
      this.setState({email:""});
      // console.log(this.state.user);
    };

    changeName=(event)=>{
      this.setState({name:event.target.value});
      if(event.target.value===''){
        this.setState({isnameValid:false});
      }
      else{
        this.setState({isnameValid:true});
      }
      // console.log(this.state.name);
    };

    changeEmail=(event)=>{
      this.setState({email:event.target.value});
      if(event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
        this.setState({isemailValid:true});
      }
      else{
        this.setState({isemailValid:false});
      }
      // console.log(this.state.email);
    };

    helloBlurred=(event)=>{
      // console.log(this.state.name);
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

    onclickDelete=(id)=>{
      const variable=this.state.user.filter((element)=>{
        return element.id!==id;
      })
      this.setState({user:variable});
    }

    onclickUpdate=(id)=>{
      const variable=this.state.user.map((element)=>{
        if(element.id===+id){
          return{
            id:element.id,
            name:this.state.name,
            email:this.state.email
          }
        }
        else{
          return element;
        }
      });
      this.setState({user:variable});
      this.setState({name:'',email:''});
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
          <form >
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
              <button className={`btn btn-primary ${classVar2}`} type="submit" onClick={this.onsubmitHandler}>Submit form</button>
            </div>
          </form>
          </div>
        </div>

                  {
                    this.state.user.map((element)=>{
                      return(
                        <div className="card mb-3 m-3">
                        <div className="list-group w-auto">
                          <div className="list-group-item  d-flex gap-3 py-3">

                            <div className="d-flex gap-2 w-100 justify-content-between">
                              <div>
                                <h6 className="mb-0">{element.name}</h6>
                                <p className="mb-0 opacity-75">{element.email}</p>
                              </div>
                              <button className="text-nowrap btn btn-primary" onClick={()=>{this.onclickUpdate(element.id)}}>Update</button>
                              <button className="text-nowrap btn btn-primary" onClick={()=>{this.onclickDelete(element.id)}}>Delete</button>
                            </div>
                          </div>
                        </div>
                        </div>
                      );
                    })
                  }
      </div>
    );
  }
}
