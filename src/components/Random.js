import React from 'react';
import axios from 'axios';

export default class Random extends React.Component {

     constructor(props){
       super(props);
       this.state = {data : []};
       this.fetch = this.fetch.bind(this);
     }
  fetch(){
    const num = +this.number.value;
    console.log("num" ,num);
    axios.get(`https://qrng.anu.edu.au/API/jsonI.php?length=${num}&type=uint16`)
        .then( (response) => {
        const data  = response.data.data;
        console.log("data" ,data )
        this.setState({data});
      })
        .catch((error) => {
        console.log(error);
      });
  }
  render(){
    return (
      <div>
        <div>
          <h1>Random </h1>
          <input type="number" ref = {node => this.number = node}/>
          <button type="button" className="btn btn-danger"  onClick = {this.fetch}>Fetch Random</button>
        </div>
        <div>
          <ul>
              {
                this.state.data.map((n,i) => <li key={i}>{n}</li>)
              }
          </ul>
        </div>
      </div>

    );
 }
};
