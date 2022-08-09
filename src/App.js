import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css"
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      portfolio: 0,
      amount: 0,
      strData: 0,
      price: 0,
      data: [
        { id: 1, stock: "HCL", price: 500 },
        { id: 2, stock: "Infosys", price: 1000 },
        { id: 3, stock: "TCS", price: 1500 },
        { id: 4, stock: "Wipro", price: 2000 },
      ],
    };

  }

  componentDidMount() {
    axios.get("http://localhost:3003/stocklist")
      .then((res) => {
        this.setState({
          data: res.data
        })
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleChange(event) {
    this.setState({ quantity: parseInt(event.target.value) });
    let p = parseFloat(document.getElementById('sprice').innerHTML);
    const totalAmt = parseInt(event.target.value) * p;
    document.getElementById('total').innerHTML = totalAmt;
    this.setState({ amount: totalAmt });

  }

  async strDataShow(event) {
    await this.setState({
      strData: event.target.value,
    });
    this.state.price = event.target.value;
  }

  render() {
    let optionsList = this.state.data.map((stock) => (
      <option id={stock.id} value={stock.price}>
        {stock.sname}
      </option>
    ));

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

      <div style={myStyle}>

        <h1>WELCOME TO STOCK MARKET!</h1>
        <h3>Here is you watchlist</h3>
        <form onSubmit={this.handleSubmit}>

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
          <div>
            Price:
            <span id="sprice"></span>
          </div>
          <div>
            <label>
              Quantity:
              <input type="number" value={this.state.value} onChange={this.handleChange.bind(this)} />
            </label>
            <div id="tpa">Total Purchase Amount: <span id='total'></span></div>
          </div>
          {/* <QuantityComponent price={this.state.price} />
          <PnlCalculation profitCalc={this.profitCalc} /> */}

          <Link style={{ color: '#000' }} to={`/portfolio`} state={{ props: { ...this.state } }} >
            <button >
              Profit
            </button>
          </Link>
          
          <Link style={{ color: '#000' }} to={`/portfolio`} state={{ props: { ...this.state } }} >
            <button>
              Loss
            </button>
          </Link>
        </form>

        <footer style={footer} id="footer" className="footer">
          <Link style={{ color: '#000' }} to='/addstock' state={{ props: { ...this.state } }} >
            <button id="addstock">Add a stock</button>
          </Link>
        </footer>

      </div >
    );
  }
}

export default App;