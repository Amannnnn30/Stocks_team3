import React, { Component } from "react";
// import PnlComponent from './Pnl';
import { Link } from "react-router-dom";
// import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import "./App.css"
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      portfolio: 100,
      price: 0,
      strData: 0,
      quantity: 0,
      amount: 0,
      stockId: 0,
      data: [
        // { id: 1, stock: "HCL", price: 500 },
        // { id: 2, stock: "Infosys", price: 1000 },
        // { id: 3, stock: "TCS", price: 1500 },
        // { id: 4, stock: "Wipro", price: 2000 },
      ],
    };

  }
  
  componentDidMount(){
    axios.get("http://localhost:3003/stocklist")
      .then((res)=>{
        this.setState({
          data:res.data
        })
        // console.log(res.data);
      })
      .catch((err)=>{
          console.log(err)
      })
}

  profitCalc() {
    
    
    // callback timer



    var amount = parseInt(document.getElementById("total").innerHTML);
    var profitAmt = amount * 0.015 + this.state.portfolio;
    console.log(profitAmt);
    // this.setState({portfolio: profitAmt})
    this.setState({portfolio: profitAmt})
    console.log("*********portfolio*******", this.state.portfolio);
  }
  
  handleChange(event) {
    // console.log("******", event.target.value)
    var sq = event.target.value;
    this.setState({ quantity: parseInt(sq) });
    let p = parseFloat(document.getElementById('sprice').innerHTML);
    const totalAmt = parseInt(sq) * p;
    document.getElementById('total').innerHTML = totalAmt;
    this.setState({ amount: totalAmt });
    console.log("*********amt*******", this.state.amount);
    // console.log(this.state.price, parseInt(sq));
  }

  async strDataShow(event) {
    await this.setState({
      strData: event.target.value,
    });
    console.log("testing", event.target.value, this.state.strData);
    this.state.price = event.target.value;
    // document.getElementById("sprice").innerHTML = this.state.price;
  }
  // const [data, setData] = useState('');
  render() {
    let optionsList = this.state.data.map((stock) => (
      <option id={stock.id} value={stock.price}>
        {stock.sname}
      </option>
    ));
    let { strData } = this.state;
    const myStyle = {
      color: "black",
      backgroundColor: "white",
      padding: "10px",
      width: "50%",
      margin: "0 auto"
    };

    const footer = {
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      backgroundColor: "red",
      color: "white",
      textAlign: "center"
    };

    return (

      <div className="mystyle" >

        <h1>WELCOME TO STOCK MARKET!</h1>
        <div>
          <h3>Here is you watchlist</h3>
          Choose a stock to buy:
          <span>
            <select id="stockname" onChange={(e) => {
              console.log(e, 'this is e');
              this.strDataShow.bind(e);
              this.state.price = e.target.value;
              document.getElementById("sprice").innerHTML = this.state.price;
              this.setState({
                price: e.target.value
              })
            }}>
              {optionsList}
            </select>
          </span>
        </div>
        <div>
          Price:
          <span id="sprice"></span>
        </div>
        <div>
          <div id="quantity" className="quantity">
            <label for="quantity"> Enter the quantity:</label>
            <input type="number" id="quantity" name="quantity" onChange={this.handleChange.bind(this)} />
          </div>
          <div id="tpa">Total Purchase Amount: <span id='total'></span></div>
        </div>
        {/* <QuantityComponent price={this.state.price} />
        <PnlCalculation profitCalc={this.profitCalc} /> */}

        <Link onClick={this.profitCalc.bind(this)} style={{ color: '#000' }} to='/portfolio' state={{ props: { ...this.state } }} >
          <button >
            Profit
          </button>
        </Link>

        <Link style={{ color: '#000' }} to='/portfolio' state={{ props: { ...this.state } }} >
          <button>
            Loss
          </button>
        </Link>

        <footer style={footer} id="footer">
          <Link style={{ color: '#000' }} to='/addstock' state={{ props: { ...this.state } }} >
            <button id="addstock">Add a stock</button>
          </Link>
        </footer>

      </div >
    );
  }
}

export default App;