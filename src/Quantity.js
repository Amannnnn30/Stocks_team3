import React from 'react';
const QuantityComponent = (props) => {
function handleChange(event){
    var quantity=event.target.value;
    let p =parseFloat(document.getElementById('sprice').innerHTML);
    document.getElementById('total').innerHTML=parseInt(quantity)*p;

    console.log(props.price, parseInt(quantity));
  }
//   render(){
    // console.log(this.props.data);
    return (
      <div>
        <div id="quantity" className="quantity">
          <label for="quantity"> Enter the quantity:</label>
          <input type="number" id="quantity" name="quantity" onChange={handleChange}/>
        </div>
        <div id="tpa">Total Purchase Amount: <span id='total'></span></div>
      </div>
    );
//   } 

}
export default QuantityComponent;