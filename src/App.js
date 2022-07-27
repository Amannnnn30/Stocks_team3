import React, { Component } from "react";
import QuantityComponent from './Quantity';
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      price: 0,
      strData: 0,
      data: [
        { id: 1, stock: "HCL", price: 500 },
        { id: 2, stock: "Infosys", price: 1000 },
        { id: 3, stock: "TCS", price: 1500 },
        { id: 4, stock: "Wipro", price: 2000 },
      ],
    };
  }
  async strDataShow(event) {
    await this.setState({
      strData: event.target.value,
    });
    console.log("testing", event.target.value, this.state.strData);
    this.state.price = event.target.value;
    // document.getElementById("sprice").innerHTML = this.state.price;

  }
  render() {
    let optionsList = this.state.data.map((stock) => (
      <option id={stock.id} value={stock.price}>
        {stock.stock}
      </option>
    ));
    // let { strData } = this.state;
    const myStyle = {
      color: "black",
      backgroundColor: "white",
      padding: "10px",
      width: "50%",
      margin: "0 auto"
    };
    return (
      <div style={myStyle}>

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
        <QuantityComponent price={this.state.price} />
        <PnlCalculation />
      </div>
    );
  }
}

class PnlCalculation extends Component {
  render() {
    return (
      <div id="pnlcalc">
        <button id="profit">Profit</button>
        <button id="loss">Loss</button>
      </div>
    );
  }
}
export default App;
