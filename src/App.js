import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as axios from 'axios';
class App extends React.Component
{
  state={ advice:''};
    componentDidMount()
    {
      this.fetchAdvice();
    }
     fetchAdvice=()=>{
      axios.get('	https://api.adviceslip.com/advice')
      .then((response)=>
      {
        const {advice} =response.data.slip;
        console.log(advice)
        this.setState({advice})
      }).catch((error)=>
      {
        console.log(error)
      })
    }
  render()
  {
    const {advice}=this.state;
    return(
     <div className="app">
       <div className="card">
       <h1 className="heading">{advice}</h1>
       <button className="button" onClick={this.fetchAdvice}><span>Give Me Adivce</span></button>
       </div>  
     </div>
     
      )
  }
}


export default App
