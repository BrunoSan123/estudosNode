import React, {Component} from "react";
import "./App.css";

const lower = "lower";
const upper = "upper";


class App extends Component{

constructor(props){
  super(props);

  this.state = {message: ""}
}



converter(action){

  let message = this.state.message
  switch(action){
    case lower:
      console.log("lower");

      message = message.toLowerCase();
      break;
    
    case upper:
      console.log("UPPER");

      message = message.toUpperCase();
      break;

      default:
      break;
  }

  this.setState({message});
}

  render(){
    return(

    <div className="App">

      <textarea onChange={(evt)=>{  

         let m = evt.target.value;
         this.setState({message:m});

      }} className="textarea" value ={this.state.message}></textarea>
       <div>
      <button onClick ={()=>{this.converter(lower)}}>lowercase</button>
      <button onClick={()=>{this.converter(upper)}}>UPPERCASE</button>
    </div>
    
    </div>

   
    
      );
  }
}

export default App;