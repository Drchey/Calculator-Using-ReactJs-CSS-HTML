// import 
import React from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/input";
import Clear from "./components/clear";
import {evaluate}from 'mathjs';

// class component
class App extends React.Component{

  constructor(props){
    super(props);

    this.state ={input: ""};
 }

  addToInput = val =>{
    this.setState({input: this.state.input + val})};

  handleEquals =()=> {this.setState({input: evaluate(this.state.input)}) };


  render(){
    return(
      <div className="app">
          <div className ="wrapper">
              <Input input ={this.state.input}></Input>
              <div className ="row">
                <Button handleClick ={this.addToInput}> 7</Button>
                <Button handleClick ={this.addToInput}> 8</Button>
                <Button handleClick ={this.addToInput}> 9</Button>
                <Button handleClick ={this.addToInput}> /</Button>   
       
              </div>
              <div className ="row">
                <Button handleClick ={this.addToInput}> 4</Button>   
                <Button handleClick ={this.addToInput}> 5</Button>   
                <Button handleClick ={this.addToInput}> 6</Button>   
                <Button handleClick ={this.addToInput}> *</Button>   
                
              </div>
              <div className ="row">
                    <Button handleClick ={this.addToInput}> 1</Button>   
                    <Button handleClick ={this.addToInput}> 2</Button>   
                    <Button handleClick ={this.addToInput}> 3</Button>   
                    <Button handleClick ={this.addToInput}> +</Button>   
              </div>
              <div className ="row">
                    <Button handleClick ={this.addToInput}> .</Button>   
                    <Button handleClick ={this.addToInput}> 0</Button>   
                    <Button handleClick  ={() =>this.handleEquals()}> =</Button>   
                    <Button handleClick ={this.addToInput}> -</Button>   
              </div>
              <div className = "row"> 
                <Clear handleClear={() => this.setState({input:""})}>C</Clear>
              </div>
          </div>     
      </div>
    )
  }
}


// export App to index
export default App;