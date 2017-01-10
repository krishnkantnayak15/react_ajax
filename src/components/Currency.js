import React from 'react';
import axios from 'axios';
import './new.css';


export default class Currency extends React.Component {

  constructor(props){
    super(props);
    //this.currency = ['INR' , 'USD']
    this.state = {data : []};
     this.currencies = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];
    this.fetch = this.fetch.bind(this);

  }

  }
  fetch(){
      const from = this.from.value;
      const to = this.to.value;
      const amount = +this.amount.value;
      jsonp(`http://api.fixer.io/latest?base=${from}`, null, (err, data) => {
        const ratio = data.rates[to];
        const converted = amount * ratio;
        this.setState({ratio, converted});
      });
    }
render(){
  return (
    <div className = "first">
      <div  className = "head">
        <h1>Currency Exchange </h1>


      </div >
       <div className ="select1">
        <select ref={n => this.from = n}>
            {
              this.currencies.map((n,i) => <option key={i}>{n}</option>),

             this.currencies.map((n,i) => <option key={i}>{n}</option>)
            }
        </select>
      </div>

       &nbsp;&nbsp;&nbsp;<label>to</label>

      <div className ="select2">
       <select ref={n => this.from = n}>
           {
             this.currencies.map((n,i) => <option key={i}>{n}</option>),

             this.currencies.map((n,i) => <option key={i}>{n}</option>)
           }
       </select>
     </div>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number"  ref = {node => this.number = node} placeholder="enter the value" />
     &nbsp;&nbsp;<button type="button"  onClick = {this.fetch} className="btn btn-primary">Convert</button>
    </div>

  );
}
};
